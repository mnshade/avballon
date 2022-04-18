import React from 'react';
import { Button } from 'react-native';

export const MyButton = (props) => {
  return (
    <Button
      title={props.texto}
      onPress={props.pressionado}
      color={props.cor}
    />
  );
}
export default MyButton;