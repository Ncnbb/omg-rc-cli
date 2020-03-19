const { isAbsolute, join } = require('path');
const { stringifyRequest } = require('loader-utils');
const {
  stringify,
  generateImport,
  generateExport,
  generateSpritePlaceholder
} = require('svg-sprite-loader/lib/utils');

function stringifySymbol(symbol) {
  let content = symbol.render().replace(/id="(.*)--sprite"/, 'id="$1"');
	return stringify({
		id: symbol.id.replace('--sprite', ''),
		use: symbol.useId.replace('--sprite', ''),
		viewBox: symbol.viewBox,
		content: content,
	});
}

/**
 * @param {Object} params
 * @param {SpriteSymbol} params.symbol - Sprite symbol instance {@see https://git.io/v9k8g}
 * @param {SVGSpriteLoaderConfig} params.config - Parsed loader config
 * @param {string} params.context - Context folder of current processing module
 * @param {Object} params.loaderContext {@see https://webpack.js.org/api/loaders/#the-loader-context}
 * @return {string}
 */
function reactRuntimeGenerator(params) {
  const { symbol, config, context, loaderContext } = params;
  const { extract, esModule, spriteModule, symbolModule, runtimeCompat, publicPath } = config;
  let runtime;

  // 去除默认的svgid带有的参数
  const symbolId = symbol.id = symbol.id.replace('--sprite', '');

  if (extract) {
    const spritePlaceholder = generateSpritePlaceholder(symbol.request.file);
    const path = stringify(publicPath) || '__webpack_public_path__';
    const data = `{
      id: ${stringify(symbol.id)},
      viewBox: ${stringify(symbol.viewBox)},
      url: ${path} + ${stringify(spritePlaceholder)},
      toString: function () {
        return this.url;
      }
    }`;
    runtime = generateExport(data, esModule);
  } else {
    const spriteModuleAbsPath = isAbsolute(spriteModule) ? spriteModule : join(context, spriteModule);
    const symbolModuleAbsPath = isAbsolute(symbolModule) ? symbolModule : join(context, symbolModule);

    const spriteModuleImport = stringifyRequest(loaderContext, spriteModuleAbsPath);
    const symbolModuleImport = stringifyRequest(loaderContext, symbolModuleAbsPath);
    runtime = [
      generateImport('SpriteSymbol', symbolModuleImport, esModule),
      generateImport('sprite', spriteModuleImport, esModule),
      generateImport('React', 'react', esModule),
      `let symbol = new SpriteSymbol(${stringifySymbol(symbol)})`,
			'sprite.add(symbol)',
      `
      export default function ${symbolId}IconComponent(props) {
          return React.createElement('svg',
              props,
              React.createElement('use', { xlinkHref: '#${symbolId}' })
          );
      }
      `
    ].join(';\n');
  }
  return runtime;
}

module.exports = reactRuntimeGenerator;