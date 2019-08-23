import api from '../../api/imgur';
import qs from 'qs';
import {router} from '../../main';
const state ={
  token: window.localStorage.getItem('imgue_token') || null,
};

const getters ={
  isLoggedIn: (state)=> !!state.token
};

const actions ={

  login: ()=>{
    api.login();
  },

  logout:({ commit })=>{
    commit('setToken', null);
    window.localStorage.removeItem('imgue_token');

  },

  finalizeLogin:({ commit }, hash)=>{
    const query = qs.parse(hash.replace('#', ''));
    commit('setToken', query.access_token);
    window.localStorage.setItem('imgue_token', query.access_token);
    router.push('/');
  },

};

const mutations ={
  setToken:(state, token)=> {
    state.token = token;
  }
};

export default {
  state,   // or state:state
  getters,  // or getters:getters
  actions,  // or ..
  mutations  // or ..
};
