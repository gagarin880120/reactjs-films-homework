import React from 'react';
import ReactDOM from 'react-dom';
import Signature from './components/Signature/Signature';

ReactDOM.render(
  <Signature name="Andrei Mandryk" />,
  document.getElementById('root') || document.createElement('div'),
);

export default function moduleHotAccept(mod) {
  if (mod && mod.hot) {
    mod.hot.accept();
  }
}

moduleHotAccept(module);
