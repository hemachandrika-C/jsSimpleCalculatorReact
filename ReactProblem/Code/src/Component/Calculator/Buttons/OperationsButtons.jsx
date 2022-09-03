import React from 'react';
import { connect } from 'react-redux';
import { opToExpression, numToExpression ,restoreExpression} from "../../../actions/operationsReeducers";
import { addHistoryItem } from '../../../actions/showHistory';

function OperationsButtons({expression,operationsProps,addHistoryItem,operationToExpression}) {
     console.log(operationsProps)
    return (
    <div>
        {operationsProps.map((el,i)=>(<button onClick={() => el === '=' ? addHistoryItem(expression) : operationToExpression(el)}  key={i}>{el}</button>))}
       
    </div>
  )
}

const mapStateToProps = state => ({
  expression: state.currentExpression,
});

const mapDispatchToProps = (dispatch) => ({
  operationToExpression: op => dispatch(opToExpression(op)),
  numberToExpression: num => dispatch(numToExpression(num)),
  addHistoryItem: expr => dispatch(addHistoryItem(expr))
})


export default  connect(mapStateToProps, mapDispatchToProps)(OperationsButtons)