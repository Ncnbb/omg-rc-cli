import React from 'react';
import '../style/sub.scss';
export default class Sub extends React.Component {
    constructor( props ) {
        super( props );
    }
    render () {
        return (
            <div>
                <h1>后加载内容</h1>
            </div>
        );
    }
}