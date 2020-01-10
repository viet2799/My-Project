import React, { Component, } from 'react'
import { StyleSheet , Dimensions ,ActivityIndicator,FlatList ,Text} from 'react-native'
import Block from '../Components/Block'
import Api from '../API/Api'
export default class CallApi extends Component {
    constructor(props){
        super(props);
        this.state ={ isLoading: true}
      }
    
      componentDidMount(){
        const Data = fetch(Api.gender)
          .then((response) => response.json())
          .then((responseJson) => {
    
            this.setState({
              isLoading: false,
              dataSource: responseJson.results,
            }, function(){
    
            });
    
          })
          .catch((error) =>{
            console.error(error);
          });
          return Data ;
      }
    render() {
        if(this.state.isLoading){
            return(
              <Block style={{flex: 1, padding: 20}}>
                <ActivityIndicator/>
              </Block>
            )
          }
        return (
            <Block>
            <FlatList
            data={this.state.dataSource}
            renderItem={({item}) => <Text style={{fontSize:20 , color:'blue' ,padding : 50}}>{item.gender}, {item.name.title}</Text>}
            // keyExtractor={({gender}, index) => gender}
          />
            </Block>
        )
    }
}
