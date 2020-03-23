
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Sub from './Sub';
import Button from 'zzc-design-mobile/lib/Button';
class App extends Component {
    render () {
        return (
            <div>
                <h1>OMG-CLI</h1>
                <Button>123</Button>
                <Sub/>
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById( 'root' )
);

