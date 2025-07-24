import React, {useState} from 'react';
import './App.css';

function Calculator(){
    const [num1,setNum1]=useState('');
    const [num2,setNum2]=useState('');
    const [result,setResult]=useState(null);

    const handlecalculation=(operator)=>{

        const a=parseFloat(num1);
        const b=parseFloat(num2);
        if(isNaN(a)||isNaN(b)){
            setResult('Please enter valid numbers');
            return;
        }
        switch(operator){
            case '+':
                setResult(a+b);
                break;
            case '-':
                setResult(a-b);
                break;
            case '*':
                setResult(a*b);
                break;
            case '/':
                setResult(b!==0? a/b:'Cannot divide by zero');
                break;
            default:
                setResult('Invalid operation');
            
        }
    };
    return(
        <div className="calculator">
            <input
            type = "number"
            value={num1}
            onChange={(e)=>setNum1(e.target.value)}
            placeholder="First Number"
            />
            <input
            type="number"
            value={num2}
            onChange={(e)=> setNum2(e.target.value)}
            placeholder='Second Number'>
            </input>
            <div>
                <button onClick={()=>handlecalculation('+')}>+</button>
                <button onClick={()=>handlecalculation('-')}>-</button>
                <button onClick={()=>handlecalculation('*')}>*</button>
                <button onClick={()=>handlecalculation('/')}>/</button>
            </div>
            <h2>Result: {result}</h2>
        </div>
    );
}

export default Calculator;