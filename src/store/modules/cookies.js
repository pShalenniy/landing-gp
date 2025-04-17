import { get, set } from 'tiny-cookie';

const cookiesNames = {
  isCookiesPopup: 'COOKIES_POPUP',
  amplitudeAnalytics: 'AMPLITUDE_ANALYTICS',
  googleAnalytics: 'GOOGLE_ANALYTICS'
};

const state = {
  isCookiesDialog: false,
  isCookiesPopup: get(cookiesNames.isCookiesPopup, JSON.parse),
  amplitudeAnalytics: get(cookiesNames.amplitudeAnalytics, JSON.parse),
  googleAnalytics: get(cookiesNames.googleAnalytics, JSON.parse)
};

const getters = {
  getCookiesDialog: state => state.isCookiesDialog,
  getCookiesPopup: state => {
    if (state.isCookiesPopup === null) {
      return true;
    }

    return state.isCookiesPopup;
  },
  isAmplitudeAnalyticsCookies: state => state.amplitudeAnalytics,
  isGoogleAnalyticsCookies: state => state.googleAnalytics
};

const mutations = {
  updateCookiesDialogs(state, payload) {
    state.isCookiesDialog = payload;
  },
  updateCookiesPopup(state, payload) {
    set(cookiesNames.isCookiesPopup, payload, JSON.parse);
    state.isCookiesPopup = payload;
  },
  updateAmplitudeAnalytics(state, payload) {
    set(cookiesNames.amplitudeAnalytics, payload, JSON.parse);
    state.amplitudeAnalytics = payload;
  },
  updateGoogleAnalytics(state, payload) {
    set(cookiesNames.googleAnalytics, payload, JSON.parse);
    state.googleAnalytics = payload;
  }
};

const actions = {
  setCookiesDialogs({ commit }, value) {
    commit('updateCookiesDialogs', value);
  },
  setCookiesPopup({ commit }, value) {
    commit('updateCookiesPopup', value);
  },
  setAmplitudeAnalytics({ commit }, value) {
    commit('updateAmplitudeAnalytics', value);
  },
  setGoogleAnalytics({ commit }, value) {
    commit('updateGoogleAnalytics', value);
  },
  acceptAllCookies({ commit }) {
    commit('updateAmplitudeAnalytics', true);
    commit('updateGoogleAnalytics', true);
    commit('updateCookiesPopup', false);
  }
};

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations
};
