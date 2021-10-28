// Import React and ReactDOM
import React from 'react';
import ReactDOM from 'react-dom';
// Import Indecision App code from its file
import IndecisionApp from './components/IndecisionApp';

// Imports the css styles from the styles.css file
import 'normalize.css/normalize.css';
import './styles/styles.scss';

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));