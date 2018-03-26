import 'nprogress/nprogress.css';
import './app.less';
import NProgress from 'nprogress';
import { render } from 'react-dom';
import Routes from './routes.jsx';

NProgress.start();
window.onload = () => {
  NProgress.done();
};
document.title = "DEMO";
render(Routes, document.getElementById('App'));