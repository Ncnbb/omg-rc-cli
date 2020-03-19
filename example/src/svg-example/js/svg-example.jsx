
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../style/index.scss';
import edit from '../svg/edit.svg?__sprite';
import Icon from '../svg/ic_free.svg';

class App extends Component {
    render () {
        return (
            <div>
                <h1>OMG-CLI</h1>
                <div className='inline-svg'/>
                <div className='url-svg'/>

                <h1>js引入</h1>
                <svg><use xlinkHref={`#${edit.id}`}></use></svg>
                <Icon style={{fill: 'red'}} className='123'/>
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById( 'root' )
);

