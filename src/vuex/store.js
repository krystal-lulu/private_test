import Vuex from 'vuex'
import Vue from 'vue'
import axios from 'axios'
import * as types from './type.js'
import moment from 'moment'

/*if (process.env.NODE_ENV === 'development') {
  axios.defaults.baseURL = 'http://zhihuapi.herokuapp.com/api/';
} else {
  axios.defaults.baseURL = 'http://zhihuapi.herokuapp.com/api/';
}*/

axios.defaults.baseURL = 'http://zhihuapi.herokuapp.com/api/';


Vue.use(Vuex)

const state = {
	newsList: [],
	newsLatestTop: {},
	time: moment(),
	newsDetail: {},
	loading: false
}

const getters = {
	[types.NEWS_LIST]: state => {
		console.log(state.newsList)
		return state.newsList;
	},
	[types.NEWS_LATEST_TOP]: state => {
		return state.newsLatestTop;
	},
	[types.NEWS_DETAIL]: state => {
		return state.newsDetail;
	},
	[types.LOADING]: state => {
		return state.loading;
	}
}

const mutations = {
	[types.TOGGLE_NEWS_LATEST](state, all) {
		// state.newsList = []
		state.newsList.push({
			date: all.date,
			stories: all.stories
		});
		state.newsLatestTop = all.top_stories;
	},
	[types.TOGGLE_NEWS_BEFORE](state, all) {
		state.time.subtract(1, 'days');
		state.newsList.push({
			date: all.date,
			stories: all.stories
		});
	},
	[types.TOGGLE_NEWS_DETAIL](state, all) {
		String.prototype.replaceAll = function (s1, s2) {
      return this.replace(new RegExp(s1, "gm"), s2);
    }
    all.body = all.body.replaceAll('<div class=\"headline\">', '');
		all.body = '<link href=' + all.css + ' rel="stylesheet">' + all.body;
		state.newsDetail = all;
	},
	[types.SHOW_LOADING](state) {
		state.loading = true;
	},
	[types.HIDE_LOADING](state) {
		state.loading = false;
	}
}

const actions = {
	[types.FECTH_NEWS_LATEST]({ commit }) {
		var now = state.time.format('YYYYMMDD');
		axios.get('4/news/latest')
				 .then(res => {
				 		commit(types.TOGGLE_NEWS_LATEST, res.data);
				 })
				 .then(function() {
					axios.get('4/news/before/' + now)
								.then(res => {
					 				 commit(types.TOGGLE_NEWS_BEFORE, res.data);
					 			})
				 }).catch(err => console.log(err))
	},
	[types.FECTH_NEWS_BEFORE]({ state, commit }) {
		var now = state.time.format('YYYYMMDD');
		commit(types.SHOW_LOADING);
		axios.get('4/news/before/' + now)
				 .then(res => {
				 		commit(types.TOGGLE_NEWS_BEFORE, res.data);
				 		commit(types.HIDE_LOADING);
				 }).catch(err => console.log(err))
	},
	[types.FECTH_NEWS_DETAIL]({ commit }, id) {
		commit(types.SHOW_LOADING);
			axios.get('4/news/' + id)
				 .then(res => {
				 		commit(types.TOGGLE_NEWS_DETAIL, res.data);
				 		commit(types.HIDE_LOADING);
				 }).catch(err => console.log(err))
		
	}
}

const store = new Vuex.Store({
	state,
	getters,
	mutations,
	actions
})

export default store