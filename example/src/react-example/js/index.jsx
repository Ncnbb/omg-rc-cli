
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Sub from './Sub';
import Button from 'zzc-design-mobile/lib/Button';
import consoleFn from '@/console';
import '../scss/index.scss';

class App extends Component {
    componentDidMount() {
        consoleFn('1111');
    }

    render () {
        return (
            <div>
                <h1>OMG-CLI</h1>
                <Button>322</Button>
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

