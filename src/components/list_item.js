import React from 'react';

export default (props) => {
    return (
        <li className="collection-item row">
            <div className="col s10">
                {props.title}
            </div>
            <div className='col s2 center'>
                <button onClick={props.delete} className="btn btn-floating red darken-2">

                    <i className='material-icons'>delete</i>

                </button>

            </div>
        </li>
    );
}