import * as React from 'react';
import {Appbar, Title} from 'react-native-paper';
import {View, Text} from 'react-native';
const Header = props => {
  return (
    <Appbar.Header
      theme={{
        colors: {
          primary: '#16161d',
        },
      }}
      style={{flexDirection: 'row', justifyContent: 'center'}}>
      <Title style={{color: 'white'}}>{props.name}</Title>
    </Appbar.Header>
  );
};

export default Header;
