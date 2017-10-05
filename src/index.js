import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PeanutButterSandwich from './PeanutButterSandwich';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<PeanutButterSandwich />, document.getElementById('root'));
registerServiceWorker();
