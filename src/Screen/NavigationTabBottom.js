import React, { Component } from 'react'
import Screen1 from './Screen1'
import Screen2 from './Screen2'
import Screen3 from './Screen3'
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import Block from '../Components/Block';
import 'react-native-gesture-handler'

export default class NavigationTabBottom extends Component {
    render() {
        return (
            <Block style={{ flex: 1 }}>
                <Appcontainer/>
            </Block>
        )
    }
}

const TabBottomNavigation = createBottomTabNavigator({
    Home : {
        screen : Screen1,
        navigationOptions:{
            tabBarLabel : 'Home',
            tabBarIcon : ()=>(
                <Icon name="md-home" size={24} />   
            )
        }
    },
    Option : {
        screen : Screen2,
        navigationOptions : {
            tabBarLabel : 'Option',
            tabBarIcon : ()=>(
                <Icon name="md-cog" size = { 24} />
            )
        }
    },
    Refresh : {
        screen: Screen3,
        navigationOptions : {
            tabBarLabel : 'Refresh' ,
            tabBarIcon : () => (
                <Icon name ="md-refresh" size = {24} />
            )
        }
    }
},
{
    initialRouteName:'Home',
    tabBarOptions : {
        activeTintColor: '#a52a2a',
        labelStyle: {
          fontSize: 20,
        },
        style: {
            height:60,
            backgroundColor: '#663399',
            paddingTop:10
        },
    },
}
)

const Appcontainer = createAppContainer(TabBottomNavigation);