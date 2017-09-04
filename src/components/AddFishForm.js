import React from 'react';

class AddFishForm extends React.Component {
    constructor() {
        super();
        this.createFish = this.createFish.bind(this);
    }
    createFish(e) {
        e.preventDefault();
        const fish = {
           name: this.name.value,
           price: this.price.value,
           status: this.status.value,
           desc: this.desc.value,
           image: this.image.value
        }
        this.props.addFish(fish);
        
        // reset the form fields after submit
        this.fishForm.reset();
    }
    render() {
        return (
            <form ref={(input) => this.fishForm = input} className="fish-edit" onSubmit={(e) => this.createFish(e)}>
                <input type="text" placeholder="Fish Name" ref={(input) => this.name = input} />
                <input type="text" placeholder="Fish Price" ref={(input) => this.price = input} />
                <select ref={(input) => this.status = input}>
                    <option value="available">Fresh!</option>
                    <option value="unavailable">Sold Out.</option>
                </select>
                <textarea placeholder="Fish Desc" ref={(input) => this.desc = input}></textarea>
                <input type="text" placeholder="Fish Image" ref={(input) => this.image = input }/>

                {/* when someone clicks this button we want to take all this data and put it in a fish object */}
                <button type="submit">+ Add Item</button>
            </form>
        )
    }
}

export default AddFishForm;