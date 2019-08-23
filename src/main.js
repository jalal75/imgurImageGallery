import Vue from 'vue';
import App from './App';
import store from './store';
import VueRouter from 'vue-router';
import Authhandler from './components/Authhandler';
import ImageList from './components/ImageList';
import UploadForm from './components/UploadForm';

Vue.use(VueRouter);
export const router = new VueRouter({
  mode: 'history',
  routes:[
    {path:'/', component:ImageList},
    {path:'/upload', component: UploadForm},
    {path: '/oauth2/callback', component: Authhandler}
  ]
});

new Vue({
  router: router,
  store: store,           // or just store,
  render: h => h(App),
    
}).$mount("#app");