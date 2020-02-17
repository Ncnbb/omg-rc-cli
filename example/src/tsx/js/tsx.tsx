import React, { useState } from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor(porps) {
        super(porps);
        this.state = {};
    }

    render() {
        return (
            <div>
                <h1>Hellp World</h1>
                <Text />
            </div>
        );
    }
}

function Text(): JSX.Element {
    const [count] = useState(0);
    return (<p>{count}</p>);
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);