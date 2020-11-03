import * as service from '@/services/user';

const globalModal = {
  namespace: 'global',
  state: {
    userInfo: {}
  },
  effects: {
    *getUserInfo({ payload }, { put, call, select }) {
      const data = yield call(service.getUserInfo, {});
      yield put({
        type: 'save',
        payload: {
          userInfo: data
        }
      })
    },
  },
  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
  }
};

export default globalModal;
