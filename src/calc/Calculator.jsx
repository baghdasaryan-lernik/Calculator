
import React, {useState} from 'react'
import './Calculator.css'

const Calculator = () => {

const operators = ["/", "*", "+", "-", "."]

const [expression, setExpression] = useState("")

const updateExpression = (value) =>{
  
  if(expression.length >= 32) return

  for(let i of operators){
    if(operators.includes(value) && expression[expression.length-1] == i) return
  }
  

  setExpression(expression + value)

} 

const estimateExpression = () => {
    setExpression(`${eval(expression)}`)
}

  const digitCreator = () => {
    const digits = []
    for(let i = 1; i < 10; i++){
      digits.push(
        <button onClick={() => updateExpression(i)}  key={i}>{i}</button>
      )
    }
    return digits
  }

  const deleteDigits = () => {
     setExpression(expression.slice(0, -1))

  }  

  return (
    <div className="container">
      <div className="calculator">
       <div className="screen">
         <h3>{expression || "0"}</h3>

      </div>
      <div className="operators">
        <button onClick={(e) => updateExpression(e.target.innerText)}>*</button>
        <button onClick={(e) => updateExpression(e.target.innerText)}>/</button>
        <button onClick={(e) => updateExpression(e.target.innerText)}>+</button>
        <button onClick={(e) => updateExpression(e.target.innerText)}>-</button>
        
        <button onClick={deleteDigits}>D</button>
      </div>
      <div className="digits">
        {...digitCreator()}
        <button onClick={(e)=> updateExpression(e.target.innerText)}>.</button>
        <button onClick={(e)=> updateExpression(e.target.innerText)}>0</button>
        <button onClick={estimateExpression}>=</button>
      </div>
      </div>
    </div>
  )
}

export default Calculator