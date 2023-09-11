import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { style } from '../theme/appTheme'


interface Props {
    text: string;
    color?: string;
    wide?: boolean;
    action: (textNumber: string) => void;
}
export const ButtonCalc = ({text, color = '#2D2D2D', wide = false, action}: Props) => {
  return (
    <TouchableOpacity
     onPress={ () => action(text)}
    >
        <View style={{
                ...style.button,
                backgroundColor: color,
                width: (wide) ? 180 : 80,
            }}>
                <Text style={
                    {...style.buttonText,
                        color: (color === '#9B9B9B') ? 'black' : 'white',
                    }
                }>
                    {text}
                </Text>
        </View>
    </TouchableOpacity>
  );
};
