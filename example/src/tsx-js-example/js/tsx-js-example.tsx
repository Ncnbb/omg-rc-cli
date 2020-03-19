
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component<any, any> {
    render (): JSX.Element {
        return (
            <div>OMG-CLI</div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById( 'root' )
);

