import React from 'react';
import {SidebarProps} from "../Sidebar/Sidebar.props";

const Header = ({...props}:SidebarProps):JSX.Element => {
    return (
        <div {...props}>
            Header
        </div>
    );
};
export default Header;