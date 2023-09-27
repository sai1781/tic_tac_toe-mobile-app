import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import type {PropsWithChildren} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Switch} from 'react-native';

type IconProps = PropsWithChildren<{
  name: String;
}>;

const icons = ({name}: IconProps) => {
  switch (name) {
    case 'circle':
      return <Icon name="circle-thin" size={38} color="blue" />;
      break;
    case 'cross':
      return <Icon name="times" size={38} color="red" />;
      break;

    default:
      return <Icon name="pencil" size={38} color="black" />;
  }
};

export default icons;

const styles = StyleSheet.create({});
