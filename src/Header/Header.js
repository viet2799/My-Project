import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
import Block from '../Components/Block'

export default class Header extends Component {
  render() {
    return (
      <Block block middle center>
        <Text style={{fontSize: 25, margin:20}}>{this.props.name}</Text>
      </Block>
    );
  }
}
