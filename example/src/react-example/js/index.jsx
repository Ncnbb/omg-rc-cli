
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Sub from './Sub';
import Button from 'zzc-design-mobile/lib/Button';
import '../scss/index.scss';
class App extends Component {
    render () {
        return (
            <div>
                <h1>OMG-CLI</h1>
                <Button>111143334</Button>
                <h1>123123123</h1>
                <Sub/>
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById( 'root' )
);

