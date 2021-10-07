import React from 'react'
import { Button, Menu, Typography, Avatar } from 'antd';
import {Link } from 'react-router-dom';
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined , FundOutlined , MenuOutlined } from '@ant-design/icons';
import icon from '../images/cryptocurrency.png'

const Navbar = () => {
    return (
        <div className="nav-container">
            <div className="logo-container">
                <Avatar src={icon} size="small"/>
                <Typography.Title level={2} className="logo">
                    <Link to='/'>Mc Crypto</Link>
                </Typography.Title>
                {/* <Button className="menu-control-container"></Button> */}
            </div>
            {/* creating our menu */}
            <Menu theme="dark">
                <Menu.Item icon={<HomeOutlined/>}>
                    <Link to="/">Home</Link>
                </Menu.Item>
                <Menu.Item icon={<HomeOutlined/>}>
                    <Link to="/">Home</Link>
                </Menu.Item>
                <Menu.Item icon={<HomeOutlined/>}>
                    <Link to="/">Home</Link>
                </Menu.Item>
                <Menu.Item icon={<HomeOutlined/>}>
                    <Link to="/">Home</Link>
                </Menu.Item>
                <Menu.Item icon={<HomeOutlined/>}>
                    <Link to="/">Home</Link>
                </Menu.Item>
                

            </Menu>
        </div>
    )
}

export default Navbar
