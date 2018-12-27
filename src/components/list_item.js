import React from 'react';
import {Link} from 'react-router-dom';

export default (props) => {
    return (
        <li className="collection-item row">
            <div className="col s10">

                <Link to={`/item/${props.itemId}`}>{props.title}</Link>

            </div>
            <div className='col s2 center'>

                <button onClick={props.delete} className="btn btn-floating red darken-2">

                    <i className='material-icons'>delete</i>

                </button>

            </div>
        </li>
    );
}