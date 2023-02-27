import React from 'react';
import Link from "next/link";
import GitHub from '../svg/github.svg';
import Image from "next/image";
import Style from '../styles/style.module.scss';
import {Roboto} from "@next/font/google";

const robotoBold = Roboto({
    weight: '700',
    subsets: ['latin']
});

const Header = () => {
    return (
        <header className={Style.header}>
            <div className={robotoBold.className}>
                <Link href='/' className={Style.linkNull}><h2 className={Style.logoText}>Summer</h2></Link>
            </div>
            <div>
                <Link href='https://github.com/Danylo-Honcharenko/summer_client' target="_blank"><Image src={GitHub} alt='GitHub' /></Link>
            </div>
        </header>
    );
};

export default Header;