import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Header,Left,Right,Icon} from 'native-base';

export default class HomeScreen extends React.Component {

  static navigationOptions = {
      drawerIcon : ({tintColor}) =>(
          <Icon name = "home" style={{fontSize:24,color:tintColor}}/>
      )
  }  

  render() {
    return (
      <View style={styles.container}>
        <Header>
            <Left>
                <Icon name='menu' onPress={()=>this.props.navigation.openDrawer()} 
                />
            </Left>
            <Right/>
        </Header>
        <Text>Home</Text>
        
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});
