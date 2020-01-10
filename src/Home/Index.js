import React, { Component } from 'react'
import {
    Text,
    TouchableHighlight,
    Image,
    TextInput,
    Dimensions,
  } from 'react-native';
  import Headers from '../Header/Header';
import Block from  '../Components/Block'
export default class Index extends Component {
    render() {
        return (
            <Block>
                <Block>
                    <Headers name= "HOME" />
                </Block>
            </Block>
        )
    }
}
