import React from 'react';
import { connect } from 'react-redux';

// import { opToExpression, numToExpression ,restoreExpression} from '../../actions/operationsReeducers';
// import { addHistoryItem } from '../../actions/showHistory';

import InputTextbox from './Buttons/InputTextbox';
import OperationsButtons from './Buttons/OperationsButtons';
import NumberBtns from './Buttons/NumberBtns';


import ShowHistory from './Buttons/showHistory';

import "./Calculator.css";


function Calculator({expression}) {
     const operations = ['*','/','-', '+', '='];
     let numbers =[0,1,2,3,4,5,6,7,8,9];
  return (
    <div className="container">
        <div className='row'>
            <div className='col-md-8'>
                <div className='leftWrappper'>
                    <h1>Simple Calculator</h1>
                    <div className='inputtext__wrapper'>
                            <InputTextbox disabilityprops="true" />
                    </div>
                    <div className='numbox__mainWrapper d-flex'>
                        <div className="left__numbox">
                            <NumberBtns numbersProps={numbers}/>
                        </div>
                        <div className="right__opbx">
                            <OperationsButtons operationsProps={operations} />
                        </div>
                    </div>
                </div>
            </div>
            <div className='col-md-4'>
                <ShowHistory />
            </div>
        </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
    CalculationValue: state.currentExpression,
  });
  

  

export default connect(mapStateToProps)(Calculator)