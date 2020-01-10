import React, {Component} from 'react';
import {Text, TouchableHighlight, Image, Dimensions} from 'react-native';
import Block from '../Components/Block';
import Header from '../Header/Header';
export default class Index extends Component {
  render() {
    const widthLogin = Dimensions.get('window').width;
    return (
      <Block>
        <Block block middle center>
          <Header style={{fontSize: 20}} name="LOGIN" />
        </Block>
        <Block>
          <Image
            source={require('./loginlogo.png')}
            style={{height: 200, width: widthLogin, marginTop: 30}}></Image>
        </Block>
        <Block middle  center style={{marginTop:30}} >
          <TouchableHighlight style={{justifyContent:"center" , alignItems:'center'}}>
            <Text style={{fontSize:20 , backgroundColor:'#ffa500', padding:5}}>Sign in with Email</Text>
          </TouchableHighlight>
        </Block>
        <Block middle  center style={{marginTop:30}}>
          <TouchableHighlight style={{justifyContent:"center" , alignItems:'center' }}>
            <Text style={{fontSize:20 , backgroundColor:'#8a2be2', padding:5}}>Register with Email</Text>
          </TouchableHighlight>
        </Block>
      </Block>
    );
  }
}
