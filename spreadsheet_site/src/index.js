import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import CredentialsForm from './forms/CredentialsForm'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<CredentialsForm />, document.getElementById('cred-form'));
registerServiceWorker();
