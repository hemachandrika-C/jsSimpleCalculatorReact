import React from 'react';
import { connect } from 'react-redux';
import { opToExpression, numToExpression ,restoreExpression} from "../../../actions/operationsReeducers";
import { addHistoryItem } from '../../../actions/showHistory';

function NumberBtns({numbersProps, numberToExpression}) {
    console.log(numbersProps)
  return (
    <div className="number__boxWrapper">
        {numbersProps.map((el,i)=>(<button onClick={() => numberToExpression(el)}  key={i} className="Numbers">{el}</button>))}
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

export default connect(mapStateToProps, mapDispatchToProps)(NumberBtns)