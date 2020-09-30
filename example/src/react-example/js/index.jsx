
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

    say(text) { 
        for(let i = 0; i < 10; i++) {
            console.log(text);
            console.log(text);
            console.log(text);
            console.log(text);
            console.log(text);
            console.log(text);
            console.log(text);
        }
    }

    say2(text) { 
        for(let i = 0; i < 10; i++) {
            console.log(text);
            console.log(text);
            console.log(text);
            console.log(text);
            console.log(text);
            console.log(text);
            console.log(text);
        }
    }


    render () {
        return (
            <div>
                <h1>OMG-CLI</h1>
                <Button>322</Button>
                <h1>123123123234234</h1>
                <Sub/>
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById( 'root' )
);

