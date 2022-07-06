import React from 'react';
import ReactDom from 'react-dom';
import App from './App'
import './index.css'


// function ncard(val){
//     return(
//     <Card
//     imgsrc = {val.imgsrc}
//     title = {val.title}
//     sname = {val.sname}
//     link = {val.link}
//     />
//     )
// }

ReactDom.render(<App />,document.getElementById('root'))