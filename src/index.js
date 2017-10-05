import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import BananaStand from './BananaStand';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<BananaStand />, document.getElementById('root'));
registerServiceWorker();
