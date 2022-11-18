import React from 'react';
import { render } from 'react-dom'

function Hi() {
  return <p>Hellow World!</p>;
}

render(<Hi />, document.getElementById("app"));