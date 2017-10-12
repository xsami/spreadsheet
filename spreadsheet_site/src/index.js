import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/';
import CredentialsForm from './components/CredentialsForm'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<CredentialsForm />, document.getElementById('cred-form'));
registerServiceWorker();
