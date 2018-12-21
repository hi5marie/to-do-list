import React from 'react';
import ListItem from './list_item';

const List = (props) => {
        
    const listElements = props.toDos.map((item) => {

        //console.log('Each item:', item);

        return <ListItem delete={() => props.delete(item._id)} key={item._id} title={item.title}/>
        //return <li key={item._id} className="collection-item">{item.title}</li>
    });

    return (
        <ul className="collection">
            {listElements}
        </ul>
    );
}

export default List;
