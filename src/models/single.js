import { getCommonJson, getSchoolJson, getSocietyJson, getHrefJson } from '@/services'

export default {
  namespace: 'singledata',
  state: {
    common: {},
    school: {},
    society: {},
    hrefList: {}
  },
  effects: {
    *GetCommonList({ payload }, { call, put }) {
      const response = yield call(getCommonJson, payload)
      yield put({
        type: 'getData',
        payload: {
          common: response
        }
      })
    },
    *GetSchoolList({ payload }, { call, put }) {
      const response = yield call(getSchoolJson, payload)
      yield put({
        type: 'getData',
        payload: {
          school: response
        }
      })
    },
    *GetSocietyList({ payload }, { call, put }) {
      const response = yield call(getSocietyJson, payload)
      yield put({
        type: 'getData',
        payload: {
          society: response
        }
      })
    },
    *GetHrefList({ payload }, { call, put }) {
      const response = yield call(getHrefJson, payload)
      yield put({
        type: 'getData',
        payload: {
          hrefList: response
        }
      })
    }
  },
  reducers: {
    getData(state, { payload }) {
      return {
        ...state,
        ...payload
      }
    }
  }
}