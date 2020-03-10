
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Sub from './Sub';
class App extends Component {
    render () {
        return (
            <div>
                <h1>OMG-CLI</h1>
                <Sub/>
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById( 'root' )
);

