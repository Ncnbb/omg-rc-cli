import React from 'react';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            SubComponent: null
        }
    }

    componentDidMount() {
        import( './Sub.jsx' ).then( component => {
            this.setState({
                SubComponent: component.default
            });
        } )
    }

    render () {
        const { SubComponent } = this.state;
        return (
            <div>
                <h1>1231231</h1>
                {SubComponent && <SubComponent/>}
            </div>
        );
    }
}