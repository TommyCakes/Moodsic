import React from 'react'
import Flex from '../components/FlexParent'
import Padding from '../components/Padding'
import Header from '../components/Header'

const layoutStyle = {
    background:'#191927',
}

const Index = () => (
    <div style={layoutStyle}>
        <Header/>
        <Padding></Padding>
        <Flex></Flex>
    </div> 
)



export default Index

