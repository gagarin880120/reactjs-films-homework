import React from 'react';
import ReactDOM from 'react-dom';
import Signature from './components/Signature/Signature.jsx';

ReactDOM.render(<Signature name="Andrei Mandryk"/>, document.getElementById('root'));

if (process.env.NODE_ENV === 'development') {
  module.hot.accept();
}
