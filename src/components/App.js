import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import sampleFishes from '../sample-fishes';
import Fish from './Fish';
import base from '../base';

class App extends React.Component {
    constructor() {
        super();

        // any methods we want available to the component we have to bind to the constructor
        this.loadSamples = this.loadSamples.bind(this);
        this.addFish = this.addFish.bind(this);
        this.addToOrder = this.addToOrder.bind(this);
        this.updateFish = this.updateFish.bind(this);

        // getintitialstate -- this essentially creates an empty state object
        this.state = {
            fishes: {},
            order: {}
        }
    }

    componentWillMount() {
        this.ref = base.syncState(`${this.props.params.storeId}/fishes`
        , {
            context: this,
            state: 'fishes'
        });
        
        // check to see if anything is in localstorage
        const localStorageRef = localStorage.getItem(`order-${this.props.params.storeId}`);

        if(localStorageRef) {
            this.setState({
                order: JSON.parse(localStorageRef)
            });
        }
    }

    // this will run whenever state or props change, right before the component renders
    componentWillUpdate(nextProps, nextState) {
        // storeId is the key, nextState is the value
        localStorage.setItem(`order-${this.props.params.storeId}`, JSON.stringify(nextState.order));
    }

    // if we change stores or pages we'll unsync from the current ref so that we don't have multiple listeners open
    componentWillUnmount() {
        base.removeBinding(this.ref);
    }

    loadSamples() {
        this.setState({
            fishes: sampleFishes
        });
    }

    addToOrder(key) {
        // make copy of current state
        const order = {...this.state.order};
        // order[fish1], so with the key we have access to the entire fish1 object
        order[key] = order[key] + 1 || 1;
        //set state
        this.setState({ order: order });
    }

    // addFish is in <App /> because the addFish method adds to the state object, which is controlled from the parent, <App />
    addFish(fish) {
        // make copy of current state
        const fishes = {...this.state.fishes};
        // add our new fish
        const timestamp = Date.now();
        fishes[`fish-${timestamp}`] = fish;
        // set state
        this.setState({ fishes: fishes });
    }

    updateFish(key, updatedFish) {
        const fishes = {...this.state.fishes};
        fishes[key] = updatedFish;
        this.setState({ fishes });
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
                                .map(key => <Fish key={key} index={key} details={this.state.fishes[key]} 
                                    addToOrder={this.addToOrder} />)
                        }
                    </ul>
                </div> 
                <Order fishes={this.state.fishes} order={this.state.order} params={this.props.params} />
                <Inventory 
                    loadSamples={this.loadSamples} 
                    addFish={this.addFish} 
                    fishes={this.state.fishes} 
                    updateFish={this.updateFish}
                />
            </div>
        )
    }
}

export default App;