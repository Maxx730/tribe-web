import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TribeRoot from './TribeRoot';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<TribeRoot />, document.getElementById('root'));
registerServiceWorker();
