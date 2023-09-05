import Vue from "vue";
import Vuex from "vuex";
import persistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [persistedState({
    storage: window.sessionStorage,
    reducer(val) {
      return {
        // 只储存state中的assessmentData
        token: val.token,
        memberId: val.memberId,
        user_id: val.user_id,
        username: val.username,
        img_sum: val.img_sum,
        img_off: val.img_off,
        img_on: val.img_on,
        img_pending: val.img_pending,
        usertype: val.usertype,
      }
    }
  })],

  state: {
    token: "",
    user_id: "",
    img_canvas: [],
    img_url: [],
    username: '',
    img_off: '',
    img_on: '',
    img_pending: '',
    scroll_x: 0,
    scroll_y: 0,
    imglist_lazy: '',
    move_item: '',
    imglist_lazy_list: '',
    imguse_url: '',
    memberId: '',
    usertype: ''
  },
  mutations: {
    token(state, val) {
      state.token = val
    },
    memberId(state, val) {
      state.memberId = val
    },
    userId(state, val) {
      state.user_id = val
    },
    username(state, val) {
      state.username = val
    },
    imgSum(state, val) {
      state.img_sum = val
    },
    imgOff(state, val) {
      state.img_off = val
    },
    imgOn(state, val) {
      state.img_on = val
    },
    imgPending(state, val) {
      state.img_pending = val
    },
    imglistLazy(state, val) {
      state.imglist_lazy = val
    },
    imglistLazyList(state, val) {
      state.imglist_lazy_list = val
    },
    moveItem(state, val) {
      state.move_item = val
    },
    imguseUrl(state, val) {
      state.imguse_url = val
    },
    usertype(state, val) {
      state.usertype = val
    },


  },
  actions: {},
  modules: {}

});