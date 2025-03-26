import { useEffect, useRef, useState } from "react"

enum Operator {
    add = '+',
    subtract = '-',
    multiply = 'x',
    divide = '÷'
}

export const useCalculator = () => {

    const [formula, setFormula] = useState('0');
    
    const [number, setNumber] = useState('0');
    const [previousNumber, setPreviousNumber] = useState('0');

    useEffect(() => {
        const subResult = calculateSubResult();
        setPreviousNumber(`${subResult}`);
    }, [formula])
    
    useEffect(() => {
      if(lastOperation.current) {
        const firstFormPart = formula.split(' ').at(0 );
        setFormula(`${firstFormPart} ${lastOperation.current} ${number}`);
      }else {
        setFormula(number);
      }
    }, [number])
    

    const lastOperation = useRef<Operator>();

    const clean = () => {
        setNumber('0');
        setPreviousNumber('0');
        setFormula('0');

        lastOperation.current = undefined
    }

    const toggleSign = () => {
        if(number.includes('-')) {
            setNumber(number.replace('-', ''));
        } else {
            setNumber('-' + number);
        }
    }

    const deleteLast = () => {
        
        let currentSign = '';
        let temporalNumber = number;

        if(number.includes('-')) {
            currentSign = '-';
            temporalNumber = number.substring(1);
        }

        if(temporalNumber.length > 1) {
            return setNumber(currentSign + temporalNumber.slice(0, -1));
        }

        setNumber('0');
    }

    const setLastNumber = () => {
        if(number.endsWith('.')) {
            setPreviousNumber(number.slice(0, -1));
        }
        setPreviousNumber(number);
        setNumber('0');
    }

    const divideOperation = () => {
        setLastNumber();
        lastOperation.current = Operator.divide;
    }

    const multiplyOperation = () => {
        setLastNumber();
        lastOperation.current = Operator.multiply;
    }

    const subtractOperation = () => {
        setLastNumber();
        lastOperation.current = Operator.subtract;
    }   

    const addOperation = () => {
        setLastNumber();
        lastOperation.current = Operator.add;
    }

    const calculateSubResult = () => {
        const [firstValue, operation, secondValue] = formula.split(' ');
        const num1 = Number(firstValue);
        const num2 = Number(secondValue);

        if(isNaN(num2)) return num1;

        switch(operation) {
            case Operator.add:
                return num1 + num2;
            case Operator.subtract:
                return num1 - num2;
            case Operator.multiply:
                return num1 * num2;
            case Operator.divide:
                return num1 / num2;
            default:
                return num1;
        }
    }

    const calculateResult = () => {
        const result = calculateSubResult();
        setFormula(`${result}`);

        lastOperation.current = undefined;
        setPreviousNumber('0');
    }

    const buildNumber = (textNumber: string) => {

        if(number.includes('.') && textNumber === '.') return;

        if(number.startsWith('0') || number.startsWith('-0')) {
            if(textNumber === '.') {
                setNumber(number + textNumber);
            } else if(textNumber === '0' && number.includes('.')) {
                setNumber(number + textNumber);
            } else if(textNumber !== '0' && !number.includes('.')) {
                setNumber(textNumber);
            } else if(textNumber === '0' && !number.includes('.')) {
                setNumber(number);
            } else {
                setNumber(number + textNumber);
            }
        } else {
            setNumber(number + textNumber);
        }
    }

    return {
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
    }

}