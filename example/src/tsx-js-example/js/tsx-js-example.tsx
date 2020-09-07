
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Sub from './sub';

class App extends Component<any, any> {
    render (): JSX.Element {
        return (
            <div>
                <p>OMG-CLI</p>
                <Sub/>   
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById( 'root' )
);

