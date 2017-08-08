import React from 'react';
import ReactDOM from 'react-dom';
import 'containers/index.css';
import App from 'components/App';
import registerServiceWorker from 'containers/registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
