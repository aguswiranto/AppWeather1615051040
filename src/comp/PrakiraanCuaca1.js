import React from 'react';
import { StyleSheet, Text, View, AppRegistry,Button,TextInput } from 'react-native';

export default class Cuaca extends React.Component {

  constructor(props){
      super(props)
      this.state = {
        city:'',
        forecast:{
          main: '-',
          description: '-',
          temp: 0
        }
      };
    }

    getWeather= () =>{
  //  let url ='http://api.openweathermap.org/data/2.5/weather?q'+this.state.city+ '&appid=da326182f8fa24a9d790d0b6acaa9305&units=metric';
  let url = 'http://api.openweathermap.org/data/2.5/weather?q='+this.state.city+ '&appid=da326182f8fa24a9d790d0b6acaa9305&units=metric';
    fetch (url)
    .then((response) => response.json())
    .then((responseJson) => {
      //console.log(responseJson);
      this.setState({
        forecast: {
          main: responseJson.weather[0].main,
          description: responseJson.weather[0].description,
          temp: responseJson.main.temp
        }
      });
    });
  }

    render() {
      return (
        <View style={styles.containerMain}>
          <View style={styles.box1}>
            <Text style={styles.text1}>Prakiraan Cuaca</Text>
          </View>
          <View style={styles.box2}>
              <TextInput style = {styles.text1}
                placeholder="Masukkan Nama Kota"
                onChangeText={(city)=>this.setState({city})}
              />

              <Button
              onPress={
                () => this.getWeather()
              }
              title="Lihat"
              color="#4A148C"
              accessibilityLabel="Klik untuk melihat"
              />
          </View>
          <View style={styles.box3}>
            <Text style = {{padding: 10, fontSize: 20}} >
              Kota = {this.state.city} {"\n"}
              Cuaca = {this.state.forecast.main} {"\n"}
              Description = {this.state.forecast.description} {"\n"}
              Suhu = {this.state.forecast.temp} {"'Celcius"}
            </Text>
          </View>
          <View style={styles.box5}>
            <Text style={styles.text1}>Copyright@sandal (React-Native)</Text>
          </View>
        </View>
      );
    }
}

const styles = StyleSheet.create({
  containerMain: {
    backgroundColor: '#34495E',
    flex: 1,
    flexDirection: 'column',
  },

  box1: {
    backgroundColor: '#7B1FA2',
    flex: 1,
    justifyContent: 'center'
  },

  box2: {
    margin:20,
    padding: 10,
    backgroundColor: '#E040FB',
    flex: 2,
    justifyContent: 'center'
  },

  box3: {
    backgroundColor: '#E1BEE7',
    flex: 4,
    flexDirection: 'column',
    //justifyContent: 'space-around',
    //alignItems: 'center',
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10
  },

  box4: {
    backgroundColor: '#52B3D9',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10
  },

  box5: {
    backgroundColor: '#4A148C',
    flex: 1,
    margin: 10
  },

  box6: {
    width: 50,
     height: 50,
     backgroundColor: '#E4F1FE',
     justifyContent: 'center',
     alignItems: 'center',
  },

  box7: {
    backgroundColor: '#52B3D9',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },

  text: {
    padding: 30, fontSize: 20, color: 'white', textAlign: 'center'
  },

  text1: {
    padding: 30, fontSize: 20, color: 'white', textAlign: 'center', fontWeight:'bold'
  }

});
