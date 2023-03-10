import React from 'react';
import {SidebarProps} from "./Sidebar.props";
import {Menu} from "../Menu/Menu";

const Sidebar = ({...props}:SidebarProps):JSX.Element => {
    return (
        <div {...props}>
            <Menu/>
        </div>
    );
};

export default Sidebar;