import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import sampleFishes from '../sample-fishes';
import Fish from './Fish';

class App extends React.Component {
    constructor() {
        super();

        // any methods we want available to the component we have to bind to the constructor
        this.loadSamples = this.loadSamples.bind(this);
        this.addFish = this.addFish.bind(this);

        // getintitialstate -- this essentially creates an empty state object
        this.state = {
            fishes: {},
            order: {}
        }
    }

    loadSamples() {
        this.setState({
            fishes: sampleFishes
        });
    }

    // addFish is in <App /> because the addFish method adds to the state object, which is controlled from the parent, <App />
    addFish(fish) {
        // copy current state and update state
        const fishes = {...this.state.fishes};
        // add our new fish
        const timestamp = Date.now();
        fishes[`fish-${timestamp}`] = fish;
        // set state
        this.setState({ fishes: fishes });
    }

    render() {
        return (
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagLine="Balls and stuff" />
                    <ul className="list-of-fishes">
                        {
                            Object
                                .keys(this.state.fishes)
                                .map(key => <Fish key={key} details={this.state.fishes[key]} />)
                        }
                    </ul>
                </div> 
                <Order />
                <Inventory loadSamples={this.loadSamples} addFish={this.addFish} />
            </div>
        )
    }
}

export default App;