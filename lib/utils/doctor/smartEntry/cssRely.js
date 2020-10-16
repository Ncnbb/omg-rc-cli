const { isObject, isArray } = require( '../../typeof' );

module.exports = function findCssImport ( ASTList, result ) {
    if ( ASTList && isObject( ASTList ) ) {
        switch ( ASTList.type ) {
            case 'MemberExpression':
                findCssImport( ASTList.object, result );
                break;
            case 'CallExpression':
                if ( ASTList.callee.name == 'url' ) {
                    findCssImport( ASTList.arguments, result );
                } else {
                    findCssImport( ASTList.callee, result );
                }
                break;
            case 'ImportExpression':
                const { source } = ASTList;
                result.push( source.value );
                break;
            case 'ExpressionStatement':
                findCssImport( ASTList.expression, result );
                break;
            case 'SequenceExpression':
                findCssImport( ASTList.expressions, result );
                break;
            case 'ClassDeclaration':
            case 'ClassBody':
            case 'FunctionExpression':
            case 'BlockStatement':
            case 'Program':
                findCssImport( ASTList.body, result );
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
                    findCssImport( curr.body, result );
                    break;
                case 'ExpressionStatement':
                    findCssImport( curr.expression, result );
                    break;
                case 'MethodDefinition':
                    findCssImport( curr.value, result );
                    break;

                default: findCssImport( curr, result );
            }
        }
    }
    return result

}