/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
// import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Search from './screens/Search';
import Home from './screens/Home';

const Tabs = createBottomTabNavigator();
const App = () => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#16161d" />
      <NavigationContainer>
        <Tabs.Navigator
          screenOptions={({route}) => ({
            tabBarIcon: ({color}) => {
              let iconName;
              if (route.name === 'Home') {
                iconName = 'home-city-outline';
              } else if (route.name === 'Search') {
                iconName = 'map-search-outline';
              }
              return (
                <MaterialCommunityIcons
                  name={iconName}
                  size={25}
                  color={color}
                />
              );
            },
          })}
          tabBarOptions={{
            activeTintColor: '#16161d',
            inactiveTintColor: 'gray',
          }}>
          <Tabs.Screen
            name="Home"
            component={Home}
            initialParams={{city: 'Chennai'}}
          />
          <Tabs.Screen name="Search" component={Search} />
        </Tabs.Navigator>
      </NavigationContainer>
      {/* <Search />
      <Home /> */}
      {/* <View
        style={{
          flex: 1,
          // flexDirection: 'row',
          justifyContent: 'center',
          alignContent: 'center',
          alignItems: 'center',
          backgroundColor: 'black',
        }}>
        <Text>hello</Text>
      </View> */}

      {/* <StatusBar barStyle="dark-content" backgroundColor="#00aaff" />
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({route}) => ({
            tabBarIcon: ({color}) => {
              let iconName;
              if (route.name === 'home') {
                iconName = 'home-city-outline';
              } else if (route.name === 'search') {
                iconName = 'city';
              }
              return (
                <MaterialCommunityIcons
                  name={iconName}
                  size={25}
                  color={color}
                />
              );
            },
          })}
          tabBarOptions={{
            activeTintColor: 'white',
            inactiveTintColor: 'gray',
            activeBackgroundColor: '#00aaff',
            inactiveBackgroundColor: '#00aaff',
          }}>
          <Tab.Screen
            name="home"
            component={Home}
            initialParams={{city: 'london'}}
          />
          <Tab.Screen name="search" component={Search} />
        </Tab.Navigator>
      </NavigationContainer> */}
    </>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
