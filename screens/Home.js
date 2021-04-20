import React, {useState, useEffect} from 'react';
import {Appbar, Title, Button, Card} from 'react-native-paper';
import {View, Text, TextInput, FlatList, StyleSheet, Image} from 'react-native';
import Header from './Header';

const Home = props => {
  const [info, setInfo] = useState({
    name: 'Loading . . . ',
    temp: 'Loading . . . ',
    humidity: 'Loading . . . ',
    desc: 'Loading . . . ',
    icon: 'Loading . . . ',
  });
  useEffect(() => {
    getWeather();
  }, []);
  const getWeather = () => {
    let MyCity;
    const {city} = props.route.params;
    MyCity = city;
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${MyCity}&APPID=da04a57f758d879d84db3620dddafa53&units=metric`,
    )
      .then(data => data.json())
      .then(results => {
        setInfo({
          name: results.name,
          temp: results.main.temp,
          humidity: results.main.humidity,
          desc: results.weather[0].description,
          icon: results.weather[0].icon,
        });
        console.log(results);
      });
  };
  if (props.route.params.city != 'Chennai') {
    getWeather();
  }
  return (
    <View>
      <Header name="weather" />
      {/* <Text>Home</Text> */}
      <View
        style={{
          alignItems: 'center',
        }}>
        <Title>{info.name}</Title>
        <Image
          style={{height: 150, width: 150}}
          source={{
            uri: 'https://openweathermap.org/img/w/' + info.icon + '.png',
          }}
        />
      </View>

      <Card
        style={{
          margin: 5,
          padding: 10,
          border: 5,
          //   borderColor: '#16161d',
          backgroundColor: '#f5deb3',
          alignItems: 'center',
        }}>
        <Title>Temperature: {info.temp}'c</Title>
        <Title>Humidity: {info.humidity}</Title>
        <Title>Description: {info.desc}</Title>
      </Card>

      {/* <Title>{info.icon}</Title> */}
    </View>
  );
};

export default Home;
