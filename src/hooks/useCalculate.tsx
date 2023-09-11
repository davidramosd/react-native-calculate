import { useState, useRef } from 'react';

enum Options {
    sum, subtraction, multiply, divide
}

export const useCalculate = () => {
    const [number, setNumber] = useState('0');
    const [previusNumber, setPreviusNumber] = useState('0');

    const lastOptions = useRef<Options>();

    const clean = () => {
      setNumber('0');
      setPreviusNumber('0');
    };
    const handleNumber = (textNumber: string) => {
      //No accept double .
      if (number.includes('.') && textNumber === '.') {return;}
      if (number.startsWith('0') || number.startsWith('-0')){
        if (textNumber === '.'){
          setNumber(number + textNumber);
        } else if (textNumber === '0' && number.includes('.')){
          setNumber( number + textNumber);
        } else if ( textNumber !== '0' && !number.includes('.')){
          setNumber( textNumber);
        } else if ( textNumber === '0' && !number.includes('.')){
          setNumber(number);
        } else {
          setNumber( number + textNumber);
        }
      } else {
        setNumber( number + textNumber);
      }

    };
    const handleNumberPrevius = () => {
      if (number.endsWith('.')) {
        setPreviusNumber( number.slice(0,-1));
      } else {
        setPreviusNumber( number);
      }
      setNumber('0');
    };

    const positiveNegative = () => {
      if (number.includes('-')){
        setNumber( number.replace('-', ''));
      } else {
        setNumber('-' + number);
      }
    };
    const btnDelete = () => {
      let negativo = '';
      let numberTemp = number;
      if (number.includes('-')){
        negativo = '-';
        numberTemp = number.substring(1);
      }
      if (numberTemp.length > 1){
        setNumber(negativo + numberTemp.slice(0,-1));
      } else {
        setNumber('0');
      }
    };

    const btnSubtraction = () => {
      handleNumberPrevius();
      lastOptions.current = Options.subtraction;
    };
    const btnDivide = () => {
      handleNumberPrevius();
      lastOptions.current = Options.divide;
    };
    const btnSum = () => {
      handleNumberPrevius();
      lastOptions.current = Options.sum;
    };
    const btnMultiply = () => {
      handleNumberPrevius();
      lastOptions.current = Options.multiply;
    };

    const calculate = () => {
      const num1 = Number( number );
      const num2 = Number( previusNumber );
      switch ( lastOptions.current ) {
        case Options.sum:
          setNumber( `${ num1 + num2 }` );
          break;
        case Options.subtraction:
          setNumber( `${ num2 - num1 }`);
          break;
        case Options.multiply:
          setNumber( `${ num1 * num2 }`);
          break;
        case Options.divide:
          setNumber( `${ num2 / num1 } `);
          break;
        default:
          break;
      }
      setPreviusNumber('0');
    };

    return {
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
    };
};

