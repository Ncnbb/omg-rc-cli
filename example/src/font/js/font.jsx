
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../style/index.scss';
class App extends Component {
    render () {
        return (
            <div>
                <h1>OMG-CLI</h1>
                <i className='icon-home'/>
                <i className='icon-home2'/>
                <i className='icon-home3'/>
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById( 'root' )
);

