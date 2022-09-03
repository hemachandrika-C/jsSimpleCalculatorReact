import React ,{useState} from 'react';
import { connect } from 'react-redux';

import { restoreExpression } from "../../../actions/operationsReeducers";

function ShowHistory({showlist = [],restoreExpression}) {
  
  console.log(showlist)
  const [keyword, setKeyword] = useState([]);


  keyword.push(showlist.slice(Math.max(showlist.length - 10, 0)))


  return (
    <div>
        {showlist.map((item, index) => <li key={index} onClick={() => restoreExpression(item.expr) }>
      {item.expr} = {item.result}
    </li>)}
        
    </div>
  )
}

const mapStateToProps = (state) => ({
    showlist: state.history
  });
  
  const mapDispatchToProps = {
    restoreExpression
  }

export default connect(mapStateToProps, mapDispatchToProps )(ShowHistory)