import React from 'react';
import { getFunName } from '../helpers';

// use es6 classes to write components
// every compinent needs at least one method -- the render() method
class StorePicker extends React.Component {
    constructor() {
        super();
        // binds any function not render() to the StorePicker class
        this.goToStore = this.goToStore.bind(this);
    }
    goToStore(e) {
        e.preventDefault();
        const storeId = this.storeInput.value;
        this.context.router.transitionTo(`/store/${storeId}`);
        // we need to grab data from input, but we don't want to touch DOM
        // $(input).val(); THIS TOUCHES THE DOM; DONT DO IT.
        // in react we use refs: way to reference the actual input

    }
    render() {
        // return can only return one parent HTML element; can't have two html elements on the same level
        return (
            <form className="store-selector" onSubmit={(e) => this.goToStore(e)}>
                <h2>Please enter a store</h2>
                <input type="text" required placeholder="Store Name" defaultValue={getFunName()} 
                 ref={(input => { this.storeInput = input } )} />
                 {/* the above ref makes the whole input field a prop on the class; $r.storeInput accesses the input field */}
                <button type="submit">Visit Store</button>
            </form>
        )
    }
}

// BrowserRouter is available to the whole app bc <BrouserRouter> component is at the root
// but we still need to surface the Router from the StorePicker component
// this tells react that the StorePicker component expects something called 'router'
StorePicker.contextTypes = {
    router: React.PropTypes.object
}

export default StorePicker;