import React from 'react';
import Style from '../styles/style.module.scss';
import Image from "next/image";
import {Roboto} from "@next/font/google";
import classNames from "classnames";

const roboto = Roboto({
    weight: '400',
    subsets: ['latin']
});

const EmptyEntry = (props) => {
    return (
        <div className={classNames(Style.emptyContainer, roboto.className)} >
            <div>
                <Image src={props.image} alt="Icons" />
            </div>
            <div>
                <p className={Style.textEmpty}>{props.text}</p>
            </div>
        </div>
    );
};

export default EmptyEntry;