import Login from '../views/Login';
import Register from '../views/Register';
import Dashboard from '../views/Dashboard';
import Topic from '../views/Topic';
import LoaderSample from '../views/LoaderSample';

const indexRoutes = [
  { path: '/login', name: 'Login', component: Login },
  { path: '/register', name: 'Register', component: Register },
  {
    path: '/topics',
    name: 'Topic',
    component: Topic,
  },
  { path: '/actionloader', name: 'Loaders', component: LoaderSample },
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard,
    authenticated: false,
  },
];

export default indexRoutes;
