import App from './App.html';
import store from "./store";
import './assets/less/app.less';

const app = new App({
	target: document.querySelector('body'),
	data: store
});

// const listener = app.on('nodeselected', event => {
//   console.log( `A thing happened: ${event.thing}` );
// });