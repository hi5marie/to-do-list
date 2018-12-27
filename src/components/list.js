import React from 'react';
import ListItem from './list_item';
import NavButton from './nav_button';


const List = (props) => {
        
    const listElements = props.toDos.map((item) => {
        //console.log('Each item:', item);

        return <ListItem delete={() => props.delete(item._id)} key={item._id} title={item.title}/>

        //return <li key={item._id} className="collection-item">{item.title}</li>
    });

    return (

        <div>

            <h1 className="center">To Do List</h1>

            <NavButton to="/add-item" text="Add Item" />

            <ul className="collection">
                {listElements}
            </ul>


        </div>


    );
}

export default List;
