import http from '@/utils/http';
import { getSid, setSid, removeSid } from '@/utils/auth';
import { resetRouter } from '@/router';

const state = {
  sid: getSid(),
  name: '',
  logo: '',
  bibiH: '',
  unid: '',
  certification: '',
  avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
  ossUrl: 'https://bibi-release.oss-cn-hangzhou.aliyuncs.com/',
  iosDownloadUrl: 'https://apps.apple.com/us/app/哔哔news/id1439991106?l=zh&ls=1',
  androidDownloadUrl: 'https://bitalk.oss-cn-hangzhou.aliyuncs.com/bitalk_android.apk'
};

const mutations = {
  SET_SID: (state, sid) => {
    state.sid = sid;
  },
  SET_NAME: (state, name) => {
    state.name = name;
  },
  SET_ID: (state, id) => {
    state.id = id;
  },
  SET_LOGO: (state, logo) => {
    state.logo = logo;
  },
  SET_BIBIH: (state, bibiH) => {
    state.bibiH = bibiH;
  },
  SET_UNID: (state, unid) => {
    state.unid = unid;
  },
  SET_CERTIFICATION: (state, certification) => {
    state.certification = certification;
  },
  SET_AVATAR: (state, avatar) => {
    state.avatar = avatar;
  }
};
const actions = {
  // user login
  login({ commit }, userInfo) {
    const { username, password, loginType } = userInfo;
    return new Promise((resolve, reject) => {
      http({
        url: '/login',
        method: 'post',
        data: {
          username: username.trim(),
          password: password,
          loginType: loginType
        }
      }).then(res => {
        if (res.code === 200) {
          // commit('SET_SID', res.object);
          // setSid(res.object);
        }
        resolve(res);
      }).catch(error => {
        reject(error);
      });
    });
  },

  // user check
  check({ commit }, params) {
    const { sms } = params;
    return new Promise((resolve, reject) => {
      http({
        url: '/login/check',
        method: 'post',
        params: {
          sms: sms
        }
      }).then(res => {
        if (res.code === 200) {
          commit('SET_SID', res.object);
          setSid(res.object);
        }
        resolve(res);
      }).catch(error => {
        reject(error);
      });
    });
  },

  // get info
  getInfo({ commit, state }) {
    return new Promise((resolve, reject) => {
      http({
        url: '/account/info',
        method: 'post'
      }).then(res => {
        if (res.code === 200) {
          // res.object = JSON.parse(res.object);
          commit('SET_NAME', res.object.nickName);
          commit('SET_ID', res.object.id);
          commit('SET_BIBIH', res.object.bibiH);
          commit('SET_UNID', res.object.unid);
          // commit('SET_CERTIFICATION', data.object.certification);
        } else {
          commit('SET_NAME', '');
          commit('SET_ID', '');
          commit('SET_BIBIH', '');
          commit('SET_UNID', '');
          commit('SET_CERTIFICATION', '');
          removeSid();
          resetRouter();
        }
        resolve(res);
      }).catch(error => {
        commit('SET_NAME', '');
        removeSid();
        resetRouter();
        reject(error);
      });
    });
  },
  // get info
  getDetail({ commit, state }) {
    return new Promise((resolve, reject) => {
      http({
        url: '/account/detail',
        method: 'post'
      }).then(res => {
        if (res.code === 200) {
          // res.object = JSON.parse(res.object);
          commit('SET_NAME', res.object.nickName);
          commit('SET_ID', res.object.id);
          commit('SET_LOGO', res.object.accountLogo);
          commit('SET_UNID', res.object.unid);
          // commit('SET_CERTIFICATION', data.object.certification);
        } else {
          commit('SET_NAME', '');
          commit('SET_ID', '');
          commit('SET_LOGO', '');
          commit('SET_UNID', '');
          commit('SET_CERTIFICATION', '');
          removeSid();
          resetRouter();
        }
        resolve(res);
      }).catch(error => {
        commit('SET_NAME', '');
        removeSid();
        resetRouter();
        reject(error);
      });
    });
  },

  // user logout
  logout({ commit, state }) {
    return new Promise((resolve, reject) => {
      http({
        url: '/logout',
        method: 'post'
      }).then(() => {
        commit('SET_SID', '');
        commit('SET_NAME', '');
        removeSid();
        resetRouter();
        resolve();
      }).catch(error => {
        reject(error);
      });
    });
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};

