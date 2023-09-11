import React from 'react';
import { Text, View } from 'react-native';
import { style } from '../theme/appTheme';
import { ButtonCalc } from '../components/ButtonCalc';
import { useCalculate } from '../hooks/useCalculate';

export const CalculadoraScreen = () => {

  const {
    number,
    previusNumber,
    positiveNegative,
    btnDelete,
    clean,
    handleNumber,
    btnSubtraction,
    btnDivide,
    btnSum,
    btnMultiply,
    calculate,
  } = useCalculate();

  return (
    <View style={style.container}>
      {
        ( previusNumber !== '0' ) && (
          <Text style={style.answer_small}>{previusNumber}</Text>
        )
      }
        <Text
          style={style.answer}
          numberOfLines={1}
          adjustsFontSizeToFit
        >{number}</Text>
      {/*
        #2D2D2D gris oscuro
        #FF9427 naranja
        #9B9B9B gris claro
      */}
      <View style={style.row}>
        <ButtonCalc text="C" color="#9B9B9B" action={clean}/>
        <ButtonCalc text="+/-" color="#9B9B9B" action={positiveNegative}/>
        <ButtonCalc text="del" color="#9B9B9B" action={btnDelete}/>
        <ButtonCalc text="/" color="#FF9427" action={btnDivide}/>
      </View>

      <View style={style.row}>
        <ButtonCalc text="7" action={handleNumber}/>
        <ButtonCalc text="8"action={handleNumber}/>
        <ButtonCalc text="9"action={handleNumber}/>
        <ButtonCalc text="x" color="#FF9427" action={btnMultiply}/>
      </View>

      <View style={style.row}>
        <ButtonCalc text="4" action={handleNumber}/>
        <ButtonCalc text="5" action={handleNumber}/>
        <ButtonCalc text="6" action={handleNumber}/>
        <ButtonCalc text="-" color="#FF9427" action={btnSubtraction}/>
      </View>

      <View style={style.row}>
        <ButtonCalc text="1" action={handleNumber}/>
        <ButtonCalc text="2" action={handleNumber}/>
        <ButtonCalc text="3" action={handleNumber}/>
        <ButtonCalc text="+" color="#FF9427" action={btnSum}/>
      </View>

      <View style={style.row}>
        <ButtonCalc text="0" wide action={handleNumber}/>
        <ButtonCalc text="." action={handleNumber}/>
        <ButtonCalc text="=" color="#FF9427" action={calculate}/>
      </View>

    </View>
  );
};
