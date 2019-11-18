import { getCommonJson, getSchoolJson, getSocietyJson } from '@/services'

export default {
  namespace: 'singledata',
  state: {
    common: {},
    school: {},
    society: {}
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