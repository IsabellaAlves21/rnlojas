import React from 'react';
import { Pressable, Text} from 'react-native';
import { styles } from './buttonStyle';

type Props = {
    text:string,
    function: () => void
}

export function Button(props:Props) {
  return (
    <Pressable onPress={props.function} style={styles.button}>
        <Text style={styles.buttonText}>{props.text}</Text>
    </Pressable>
  );
}