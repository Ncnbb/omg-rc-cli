import React, { useState } from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor() {
        super();
        this.state = {};
    }
    
    render () {
        return (
            <div>
                <h1>Hellp World</h1>
                <Text />
            </div>
        );
    }
}

function Text () {
    const [count] = useState( 0 );
    return ( <p>{count}</p> );
}

ReactDOM.render(
    <App />,
    document.getElementById( 'root' )
);