import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { NavDrawer } from '@elevenia/master-ui/components/Molecules'
import logo from 'assets/image/logo.png'
import isMenus from 'config/Menu'
import { Segment } from '@elevenia/master-ui/components/Atom'

const Sidebar = (props) => {
    const [path, setPath] = useState(null);

    useEffect(() => {
        const explodeURIS = props.location.pathname.split('/');
        const active = explodeURIS[1] ? explodeURIS[1] : "home";
        setPath(active);
    }, [props.location.pathname])

    const handleClick = (data) => {
        // console.log('hellow');
    }

    return (
        <aside>
            <Segment p={30} className="logos">
                <NavLink to="#">
                    <img src={logo} alt="Logo" style={{ height: 41, margin: 'auto' }} />
                </NavLink>
            </Segment>
            <Segment bg="white" s mb={30}>
                <NavDrawer
                    tree={isMenus}
                    activeNav={path}
                    onClickNav={(data) => handleClick(data)}
                    className={"nav-drawer"}
                />
            </Segment>
        </aside>
    )
}

export default Sidebar