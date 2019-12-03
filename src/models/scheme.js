import { getSchemeJson } from '@/services'

/**
 * yield表示同步调用，这个是generator提供的功能
 * 
 * type: 同时它也能触发同等级effects中其他方法。
 */

export default {
  namespace: 'schemedata',
  state: {
    detailList: {}
  },
  effects: {
    // payloads 是传来的参数，是个对象，如果没参数可以写成 _
    *GetSchemeList({ payloads }, { call, put }) {
      
      // yield call来调用我们的数据接口
      const response = yield call(getSchemeJson, payloads)
      
      // 触发action，发送 type:action类型 payload：发送的数据
      yield put({
        type: 'getSchemeData',
        payload: {
          detailList: response
        }
      })
    }
  },
  reducers: {
    // 这里state就是上面初始的state，这里理解是旧state
    // payload 接受一个 action
    getSchemeData(state, { payload }) {
      return {
        ...state,
        ...payload
      }
    }
  }
}
