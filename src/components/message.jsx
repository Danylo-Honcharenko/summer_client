import React from 'react';
import Image from "next/image";
import Style from '../styles/style.module.scss';

const Message = (props) => {
    return (
        <div className={Style.containerMessage}>
            <div>
                <Image src={props.image} alt={props.altImg} />
            </div>
            <div>
                <p className={Style.textMessage}>{props.text}</p>
            </div>
        </div>
    );
};

export default Message;