import { buryingPoint } from 'common'
import isArray from 'lodash/isArray'

// 百度统计借口方法封装
export function Burying (param = {}) {
  /* eslint-disable */
  let _hmt = _hmt || []

  let hm = document.createElement('script')
  
  hm.className = param.name ? param.name : 'home'

  const [baiDuStr, curId] = [
    buryingPoint.defaultBase,
    param.id ? param.id : buryingPoint.defaultId
  ]

  hm.src = baiDuStr + curId
  let s = document.getElementsByTagName('script')[0]
  s.parentNode.insertBefore(hm, s)

  _hmt.push(['_trackPageview', param.path])
}

/**
 * @param {*} array 
 * 百度统计点击事件封装
 * category 要监控的目标的类型名称
 * action 用户跟目标交互的行为
 * opt_label 事件的一些额外信息 该项可选 事件的一些数值信息
 * 比如权重、时长、价格等等，在报表中可以看到其平均值等数据。该项可选
 * opt_value 数值信息
 */
export function trackEvent (array) {
  if (!isArray(array)) return
  const GlobalHmt = window._hmt ? window._hmt : null
  GlobalHmt.push(['_trackEvent', ...array])
}
