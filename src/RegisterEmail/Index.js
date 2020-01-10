import React, {Component} from 'react';
import {
  Text,
  TouchableHighlight,
  Image,
  TextInput,
  Dimensions,
} from 'react-native';
import Headers from '../Header/Header';
import Block from '../Components/Block';
export default class Index extends Component {
  render() {
    return (
      <Block>
        <Block>
          <Headers name="Register Email" />
        </Block>
        <Block middle center style={{marginTop: 70}}>
          <TextInput
            style={{
              width: Dimensions.get('window').width - 50,
              height: 50,
              backgroundColor: '#c0c0c0',
              marginTop: 20,
              borderRadius: 5,
            }}></TextInput>
          <TextInput
            style={{
              width: Dimensions.get('window').width - 50,
              height: 50,
              backgroundColor: '#c0c0c0',
              marginTop: 20,
              borderRadius: 5,
            }}></TextInput>
          <TextInput
            style={{
              width: Dimensions.get('window').width - 50,
              height: 50,
              backgroundColor: '#c0c0c0',
              marginTop: 20,
              borderRadius: 5,
            }}></TextInput>
          <TextInput
            style={{
              width: Dimensions.get('window').width - 50,
              height: 50,
              backgroundColor: '#c0c0c0',
              marginTop: 20,
              borderRadius: 5,
            }}></TextInput>
          <TextInput
            style={{
              width: Dimensions.get('window').width - 50,
              height: 50,
              backgroundColor: '#c0c0c0',
              marginTop: 20,
              borderRadius: 5,
            }}></TextInput>
        </Block>
        <Block middle center style={{marginTop: 50}}>
          <TouchableHighlight
            style={{
              width: Dimensions.get('window').width - 250,
              height: 46,
              backgroundColor: '#006400',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 10,
            }}>
            <Text
              style={{
                fontSize: 25,
              }}>
              {' '}
              Submit{' '}
            </Text>
          </TouchableHighlight>
        </Block>
      </Block>
    );
  }
}
