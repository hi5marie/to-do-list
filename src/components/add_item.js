import React, { Component } from 'react';
import NavButton from './nav_button';

class AddItem extends Component {
    state = {
        title: '',
        details: ''
    }

    handleSaveItem = async (e) => {
        e.preventDefault();

        await this.props.add(this.state);

        //this.props.add(this.state);

        this.props.history.push('/');

        //this.reset();

    }

    reset = () => {
        this.setState({
            title: '',
            details: ''
        });
    }

    render(){

        const { title, details } = this.state;

        //console.log('Add Item Props:', this.props);

        return (

            <div>

            <h1 className="center">Add To Do Item</h1>

            <NavButton to="/" text="Back To List" color="purple"/>

            <form onSubmit={this.handleSaveItem}>
                <div className="row">
                    <div className="input-field col s8 offset-s2">
                        <input onChange={(e) => this.setState({title: e.target.value})} value={title} id="title" type="text" name="title" autoComplete="off"/>
                        <label htmlFor="title">Title</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s8 offset-s2">
                        <input onChange={(e) => this.setState({ details: e.target.value })} value={details} id="details" type="text" name="details" autoComplete="off"/>
                        <label htmlFor="details">Details</label>
                    </div>
                </div>
                <div className="row">
                    <div className="col s6 center">
                        <button onClick={this.reset} type="button" className="btn red waves-effect waves-light">Cancel</button>
                    </div>
                    <div className="col s6 center">
                        <button className="btn green waves-effect waves-light">Add Item</button>
                    </div>
                </div>
            </form>



        </div>

        );
    }
}

export default AddItem;
