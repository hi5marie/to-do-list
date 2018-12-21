import React, { Component } from 'react';

const List = (props) => {
        
    const listElements = props.toDos.map((item) => {
        return <li key={item._id} className="collection-item">{item.title}</li>
    });

    return (
        <ul className="collection">
            {listElements}
        </ul>
    );
}

export default List;
