import { View, Text } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors'
import { globalStyles } from '@/styles/global-styles'
import ThemeText from '@/components/ThemeText'
import CalculatorBtn from '@/components/CalculatorBtn'
import { useCalculator } from '@/hooks/useCalculator'

const CalculatorApp = () => {

  const {
    formula,
    number,
    previousNumber,
    buildNumber,
    clean,
    toggleSign,
    deleteLast,
    divideOperation,
    multiplyOperation,
    subtractOperation,
    addOperation,
    calculateResult
  } = useCalculator();

  return (
    <View style={ globalStyles.calculatorContainer}>
      <View style={{paddingHorizontal: 30, marginBottom: 20}}>
        <ThemeText variant='primary'>{formula}</ThemeText>
        {formula === previousNumber ? (
          <ThemeText variant='secondary'> </ThemeText>
        ): (
          <ThemeText variant='secondary'>{previousNumber}</ThemeText>
        )}
      </View>

      <View style={globalStyles.row}>
        <CalculatorBtn blackText color={Colors.lightGray} label='C' onPress={clean}/>
        <CalculatorBtn blackText color={Colors.lightGray} label='+/-' onPress={toggleSign}/>
        <CalculatorBtn blackText color={Colors.lightGray} label='del' onPress={deleteLast}/>
        <CalculatorBtn color={Colors.orange} label='÷' onPress={divideOperation}/>
      </View>

      <View style={globalStyles.row}>
        <CalculatorBtn color={Colors.darkGray} label='7' onPress={() => buildNumber('7')}/>
        <CalculatorBtn color={Colors.darkGray} label='8' onPress={() => buildNumber('8')}/>
        <CalculatorBtn color={Colors.darkGray} label='9' onPress={() => buildNumber('9')}/>
        <CalculatorBtn color={Colors.orange} label='x' onPress={multiplyOperation}/>
      </View>

      <View style={globalStyles.row}>
        <CalculatorBtn color={Colors.darkGray} label='5' onPress={() => buildNumber('5')}/>
        <CalculatorBtn color={Colors.darkGray} label='6' onPress={() => buildNumber('6')}/>
        <CalculatorBtn color={Colors.darkGray} label='7' onPress={() => buildNumber('7')}/>
        <CalculatorBtn color={Colors.orange} label='-' onPress={subtractOperation}/>
      </View>

      <View style={globalStyles.row}>
        <CalculatorBtn color={Colors.darkGray} label='1' onPress={() => buildNumber('1')}/>
        <CalculatorBtn color={Colors.darkGray} label='2' onPress={() => buildNumber('2')}/>
        <CalculatorBtn color={Colors.darkGray} label='3' onPress={() => buildNumber('3')}/>
        <CalculatorBtn color={Colors.orange} label='+' onPress={addOperation}/>
      </View>
      <View style={globalStyles.row}>
        <CalculatorBtn color={Colors.darkGray} doubleSize label='0' onPress={() => buildNumber('0')}/>
        <CalculatorBtn color={Colors.darkGray} label='.' onPress={() => buildNumber('.')}/>
        <CalculatorBtn color={Colors.orange} label='=' onPress={calculateResult}/>
      </View>
    </View>
  )
}

export default CalculatorApp