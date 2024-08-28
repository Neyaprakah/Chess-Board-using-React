import React from 'react';
import ReactDOM from 'react-dom';
import Content from './components/content';

function Chessboard(){
  return(
    <div>
      <Content />
    </div>
  )
}
ReactDOM.render(<Chessboard/>,document.getElementById("root"));