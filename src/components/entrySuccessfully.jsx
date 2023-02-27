import React from 'react';
import Style from '../styles/style.module.scss';
import Image from "next/image";
import CheckMark from '../svg/Check Mark.svg';
const EntrySuccessfully = (props) => {
    return (
        <div className={Style.containerEntrySucc}>
            <div>
                <Image src={CheckMark} alt='Check Mark' />
            </div>
            <div>
                <p className={Style.textEntrySucc}>{props.text}</p>
            </div>
        </div>
    );
};

export default EntrySuccessfully;