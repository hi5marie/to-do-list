import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize';
import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import axios from 'axios';
import List from './list';
import AddItem from './add_item';
import ViewItem from './view_item';
import {BASE_URL, API_KEY} from '../config/api';



class App extends Component {
    state = {
        list: []
    }

    componentDidMount() {
        this.getListData();
    }
    // before:
    addItem = async (item) => {
        const resp = await axios.post(BASE_URL + API_KEY, item);
        this.getListData();
    }

    async getListData() {
        try{
            const resp = await axios.get(BASE_URL + API_KEY);

            this.setState({
                list: resp.data.todos

            });
        }catch(err){
            console.log('Something went wrong in getListData')
        }
    }
    deleteItem = async (id) => {
        await axios.delete(`${BASE_URL}/${id + API_KEY}`);
        this.getListData();
    }
    toggleComplete = async (id) => {
        await axios.put(`${BASE_URL}/${id + API_KEY}`);
        this.getListData();
    }
    render(){
        const { list } = this.state;

        return (
            <div className="container">


                <Route path="/" exact render={(props) => {

                    return <List {...props} delete={this.deleteItem} toDos={list}/>;
                }}/>

                <Route path="/add-item" render={(props) => {
                    //console.log('Props:', props);
                    return <AddItem {...props} add={this.addItem}/>
                }}/>

                <Route path="/item/:item_id" component={ViewItem}/>

            </div>
        );
    }
}

export default App;



