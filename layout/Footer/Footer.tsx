import React from 'react';
import {SidebarProps} from "../Sidebar/Sidebar.props";
import styles from './Footer.module.css';
import cn from "classnames";
import {format} from 'date-fns';

const Footer = ({className,...props}:SidebarProps):JSX.Element => {
    return (
        <footer className={cn(className,styles.footer)} {...props}>
            <div className={styles.rights}>
                FLYoka © 2020 - {format(new Date(), 'yyyy')} Все права защищены
            </div>
            <a className={styles.link1} href="#" target="_blank">Пользовательское соглашение</a>
            <a className={styles.link2} href="#" target="_blank">Политика конфиденциальности</a>
        </footer>
    );
};

export default Footer;