import React, { useState } from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
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
    const [count, setCount] = useState( 0 );
    return ( <p>{count}</p> );
}

ReactDOM.render(
    <App />,
    document.getElementById( 'root' )
);