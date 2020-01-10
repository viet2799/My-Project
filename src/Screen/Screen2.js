import React, { Component } from 'react';
import { Dimensions,Text } from 'react-native'
import Block from '../Components/Block'

export default class Screen1 extends Component {
    render() {
        return (
            <Block  style={{ backgroundColor :'#f0f8ff', flex:1}} middle center>
                <Text >Task2</Text>
            </Block>
        )
    }
}
