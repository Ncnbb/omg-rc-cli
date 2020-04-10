
import '../style/index.scss';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import png from '../images/2.png';
class App extends Component {
    render () {
        return (
            <div>
                <h1>OMG-CLI</h1>
                <div className='logo'/>
                <div className='logo2'/>
                <div className='logo3'/>
                <div className='logo4'/>
                <div className='logo5'/>
                <img src={png}/>
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById( 'root' )
);

