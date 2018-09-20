import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ItemList from './components/ItemList';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<ItemList/>, document.getElementById('root'));
registerServiceWorker();
