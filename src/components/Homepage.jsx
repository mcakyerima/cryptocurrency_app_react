
import React from 'react';
import { Typography, Row , Col , Statistic } from 'antd';
import {Link } from 'react-router-dom';
import { useGetCryptosQuery } from '../services/cryptoApi';
import { Cryptocurrencies, News } from '../components'
import millify from 'millify';
import Slide from 'react-reveal/Slide';
import Loader from './Loader'


const { Title } = Typography;
const Homepage = () => {
    // get our query data with redux using the isFetching state and data hook
    const { data , isFetching } = useGetCryptosQuery(10);
    if(data){
        console.log('this is data' , Object.keys(data), data.data)
    }
    if(isFetching) return <Loader/>;
    const globalStats = data?.data?.stats
   
    return (
        <>
            <Title level={2} className="heading" >Global Crypto Stats</Title>
            <Row>
                <Col span={12}> <Statistic title="Total Cryptocurrencies" value={globalStats?.total}/> </Col>
                <Col span={12}> <Statistic title="Total Exchanges" value={globalStats.totalExchanges}/> </Col>
                <Col span={12}> <Statistic title="Total Market Cap" value={millify(globalStats.totalMarketCap)}/> </Col>
                <Col span={12}> <Statistic title="Total 24h Volume" value={millify(globalStats.total24hVolume)}/> </Col>
                <Col span={12}> <Statistic title="Total Markets" value={globalStats.totalMarkets}/> </Col>
            </Row>
            <div className="home-heading-container">
                <Title level={2} className="home-title">Top 10 Cryptocurrencies in the World</Title>
                <Title level={3} className='show-more'><Link to="/cryptocurrencies">Show More</Link></Title>
            </div>
        
                <Cryptocurrencies simplified Search/>
                <div className="home-heading-container">
                    <Title level={2} className="home-title">Latest Crypto News</Title>
                    <Title level={3} className='show-more'><Link to="/News">Show More</Link></Title>
                </div>
                <News simplified/>
         
        </>
    )
}

export default Homepage
