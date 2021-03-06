import React , { useState , useEffect } from 'react'
import { Button, Menu, Typography, Avatar } from 'antd';
import {Link } from 'react-router-dom';
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined , FundOutlined , MenuOutlined, UserOutlined } from '@ant-design/icons';
import icon from '../images/cryptocurrency.png';
import Slide from 'react-reveal/Slide';


const Navbar = () => {
    const [ activeMenu , setActiveMenu ] = useState(true);
    const [ screenSize , setScreenSize ] = useState(null);

    useEffect(() => {
        const handleResize = () => setScreenSize(window.innerWidth)
        window.addEventListener('resize' , handleResize);
        handleResize();

        // reset the event listener once when component mounts for the first timePeriod
        return () =>  window.removeEventListener('resize', handleResize);
    } , [])

    useEffect(() => {
        if(screenSize > 768) {
            setActiveMenu(true)
        }else {
            setActiveMenu(false)
        }

    }, [screenSize])

    return (
        <div className="nav-container">
            <div className="logo-container">
                <Avatar src={icon} size='large'/>
                <Typography.Title level={3} className="logo">
                    <Link to='/'>Cryptosphere</Link>
                </Typography.Title>
                <Button className="menu-control-container" onClick={()=> setActiveMenu(!activeMenu)}>
                    <MenuOutlined/>
                </Button>
            </div>
            {activeMenu && (
                <Slide right>
                     <Menu theme="dark">
                     <Menu.Item icon={<HomeOutlined/>}>
                         <Link to="/">Home</Link>
                     </Menu.Item>
                     <Menu.Item icon={<FundOutlined/>}>
                         <Link to="/cryptocurrencies">Cryptocurrencies</Link>
                     </Menu.Item>
                     <Menu.Item icon={<MoneyCollectOutlined/>}>
                         <Link to="/exchanges">Exchanges</Link>
                     </Menu.Item>
                     <Menu.Item icon={<BulbOutlined/>}>
                         <Link to="/news">News</Link>
                     </Menu.Item>
                     <Menu.Item icon={<UserOutlined />}>
                         <Link to='/About'>About</Link>
                     </Menu.Item>
     
                 </Menu>
                </Slide>
                    
            )}
            {/* creating our menu */}
           
        </div>
    )
}

export default Navbar
