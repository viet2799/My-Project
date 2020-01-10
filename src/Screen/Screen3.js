import React, { Component } from 'react';
import { Dimensions,Text } from 'react-native'
import Block from '../Components/Block'

export default class Screen1 extends Component {
    render() {
        return (
            <Block  style={{ backgroundColor :'#7fffd4', flex:1}} middle center>
                <Text >Task3</Text>
            </Block>
        )
    }
}
