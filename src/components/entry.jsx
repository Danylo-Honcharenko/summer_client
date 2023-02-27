import React from 'react';
import Style from '../styles/style.module.scss';

const Entry = (props) => {
    return (
        <div className={Style.entryColumn}>
            <div>
                <p>{props.title}</p>
            </div>
            <div>
                <p>{props.price}$</p>
            </div>
            <div>
                <p>{props.dateBuy}</p>
            </div>
            <div>
                <p>{props.dateCreate}</p>
            </div>
        </div>
    );
};

export default Entry;