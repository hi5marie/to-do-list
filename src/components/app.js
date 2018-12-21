import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize';
import React, { Component } from 'react';
import axios from 'axios';
import List from './list';
import AddItem from './add_item';
import dummyList from '../data/to_do_list';
import { randomString } from '../helpers';

const BASE_URL = 'http://api.reactprototypes.com/todos';
const API_KEY = '?key=hi5marie';

class App extends Component {
    state = {
        list: []
    }
    componentDidMount() {
        this.getListData();
    }
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
                <h1 className="center">To Do List</h1>
                
                <AddItem add={this.addItem}/>
                <List delete={this.deleteItem} toDos={list}/>

            </div>
        );
    }
}

export default App;


