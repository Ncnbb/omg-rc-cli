
import '../style/index.scss';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import png from '../images/2.png';
import edit from '../svg/edit.svg?__sprite';
import Icon from '../svg/ic_free.svg';
import Sub from './Sub';
import Button from 'zzc-design-mobile/lib/Button';
import consoleFn from '../../../tool/console';
import say from '@/say';
import '../style/jsImportCss.css';

class App extends Component {

    constructor(props) {
        super(props)
        this.state = {
            SubComponent: null
        }
    }

    componentDidMount() {
        import( './Lazy.jsx' ).then( component => {
            this.setState({
                SubComponent: component.default
            });
        } )
        consoleFn('hello');
    }

    render () {

        const { SubComponent } = this.state;
        return (
            <div>
                <h1>OMG-CLI</h1>
                <div className='logo'/>
                <div className='logo2'/>
                <div className='logo3'/>
                <div className='logo4'/>
                <div className='logo5'/>
                <img src={png}/>

                <svg><use xlinkHref={`#${edit.id}`}></use></svg>
                <Icon style={{fill: 'red'}} className='123'/>

                <i className='icon-home'/>
                <i className='icon-home2'/>
                <i className='icon-home3'/>
                <Sub/>
                <Button>1111433343333</Button>

                {SubComponent && <SubComponent/>}
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById( 'root' )
);

