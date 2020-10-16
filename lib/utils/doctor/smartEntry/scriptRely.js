const { isObject, isArray } = require( '../../typeof' );

module.exports = function findJavaScriptImport ( ASTList, result ) {
    if ( ASTList && isObject( ASTList ) ) {
        switch ( ASTList.type ) {
            case 'MemberExpression':
                findJavaScriptImport( ASTList.object, result );
                break;
            case 'CallExpression':
                findJavaScriptImport( ASTList.callee, result );
                break;
            case 'ImportExpression':
                const { source } = ASTList;
                result.push( source.value );
                break;
            case 'ClassDeclaration':
            case 'ClassBody':
            case 'FunctionExpression':
            case 'BlockStatement':
            case 'Program':
                findJavaScriptImport( ASTList.body, result );
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
                case 'ExpressionStatement':
                    findJavaScriptImport( curr.expression, result );
                    break;
                case 'MethodDefinition':
                    findJavaScriptImport( curr.value, result );
                    break;

                default: findJavaScriptImport( curr, result );
            }
        }
    }
    return result

}