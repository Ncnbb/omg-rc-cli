
import '../style/index.scss';
import styles from '../style/index.module.scss';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
    render () {
        return (
            <div>
                <h1>OMG-CLI</h1>
                <p className={styles['class-name1']}>this is text</p>
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById( 'root' )
);

