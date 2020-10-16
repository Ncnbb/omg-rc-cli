const { isObject, isArray } = require( '../../typeof' );

module.exports = function findScssImport ( ASTList, result ) {
    if ( ASTList && isObject( ASTList ) ) {
        switch ( ASTList.type ) {
            case 'MemberExpression':
                findScssImport( ASTList.object, result );
                break;
            case 'CallExpression':
                if ( ASTList.callee.name == 'url' ) {
                    findScssImport( ASTList.arguments, result );
                } else {
                    findScssImport( ASTList.callee, result );
                }
                break;
            case 'ImportExpression':
                const { source } = ASTList;
                result.push( source.value );
                break;
            case 'ExpressionStatement':
                findScssImport( ASTList.expression, result );
                break;
            case 'SequenceExpression':
                findScssImport( ASTList.expressions, result );
                break;
            case 'ClassDeclaration':
            case 'ClassBody':
            case 'FunctionExpression':
            case 'BlockStatement':
            case 'Program':
                findScssImport( ASTList.body, result );
                break;
        }
    }

    else if ( ASTList && isArray( ASTList ) ) {
        for ( let i = 0; i < ASTList.length; i++ ) {
            const curr = ASTList[i];
            switch ( curr.type ) {
                case 'ImportDeclaration':
                    const { source } = curr;
                    result.push( source.value );
                    break;
                case 'Literal':
                case 'Identifier':
                    const { value } = curr;
                    result.push( value );
                    break;
                case 'LabeledStatement':
                    findScssImport( curr.body, result );
                    break;
                case 'ExpressionStatement':
                    findScssImport( curr.expression, result );
                    break;
                case 'MethodDefinition':
                    findScssImport( curr.value, result );
                    break;

                default: findScssImport( curr, result );
            }
        }
    }
    return result

}