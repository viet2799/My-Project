import React, {Component} from 'react';
import { View } from 'react-native'
import Block from './Block';
export default class TestBlock extends Component {
  render() {
    return (
      <Block
        flex
        row
        
        style={{backgroundColor: 'black', justifyContent: 'space-around'}}>
        <Block bottom card style={{width: 150, height: 150, backgroundColor: 'red'}}/>
        <Block  style={{width: 150, height: 150, backgroundColor: 'green'}} />
      </Block>
    );
  }
}
