import React from 'react';
import Button from 'zzc-design-mobile/lib/Button';
import '../style/lazy.scss';
export default class Lazy extends React.Component {
    constructor( props ) {
        super( props );
    }
    render () {
        return (
            <div>
                <h1>后加载内容2</h1>
                <Button>2222</Button>
            </div>
        );
    }
}