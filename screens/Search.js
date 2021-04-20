import React, {useState} from 'react';
import {Appbar, Title, Button, Card} from 'react-native-paper';
import {View, Text, TextInput, FlatList, StyleSheet} from 'react-native';
import Header from './Header';
const Search = ({navigation}) => {
  const [city, setCity] = useState('');
  const [cities, setCities] = useState([]);
  const [number, onChangeNumber] = React.useState(null);
  const fetchCities = text => {
    setCity(text);
    fetch(
      'https://api.weather.com/v3/location/search?apiKey=6532d6454b8aa370768e63d6ba5a832e&language=en-US&query=' +
        text +
        '&locationType=city&format=json',
    )
      .then(res => res.json())
      .then(data => {
        setCities(data.location.address);
        console.log(data.location.address);
      });
  };
  const btnClick = () => {
    navigation.navigate('Home', {city: city});
  };
  const listClick = cityname => {
    setCity(cityname);
    navigation.navigate('Home', {city: city});
  };
  return (
    <>
      <Header name="Weather" />
      <View>
        {/* <Text>search screen</Text> */}
        <TextInput
          label="city name"
          theme={{color: {primary: '#16161d'}}}
          value={city}
          style={styles.input}
          onChangeText={text => fetchCities(text)}
          placeholder="search city"
        />
        <Button
          icon="search-web"
          mode="contained"
          onPress={() => btnClick()}
          theme={{color: {primary: '#16161d'}}}
          style={{margin: 20}}>
          search
        </Button>
        <FlatList
          data={cities}
          renderItem={({item}) => {
            return (
              <Card
                style={{margin: 2, padding: 12}}
                onPress={() => listClick(item.name)}>
                <Text>{item}</Text>
              </Card>
            );
          }}
          keyExtractor={item => item}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
  },
});

export default Search;
