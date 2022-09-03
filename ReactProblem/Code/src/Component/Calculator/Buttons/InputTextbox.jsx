import React from 'react'
import { connect } from 'react-redux';
import { opToExpression, numToExpression ,restoreExpression} from "../../../actions/operationsReeducers";
import { addHistoryItem } from '../../../actions/showHistory';

function InputTextbox({disabilityprops,expression}) {
  console.log(expression)
  return (
    <div>
        <input type="text" disabled={disabilityprops} value={expression} className="textboxForm"/>
    </div>
  )
}

const mapStateToProps = (state) => ({
  expression: state.currentExpression,
  list: state.history
});


const mapDispatchToProps = (dispatch) => ({
  operationToExpression: op => dispatch(opToExpression(op)),
  numberToExpression: num => dispatch(numToExpression(num)),
  addHistoryItem: expr => dispatch(addHistoryItem(expr))
})



export default connect(mapStateToProps, mapDispatchToProps )(InputTextbox);