import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { init } from './canvasHelpers'
import ChromeBoisDomain from './ChromeBoisDomain.js'
// handleMouseMove={ (x, y) => drawChromeBoiAtCoords(x, y) } 
init()

ReactDOM.render(
  <ChromeBoisDomain />,
  document.getElementById('root')

);
