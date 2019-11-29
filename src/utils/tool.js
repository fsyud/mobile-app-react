import { buryingPoint } from 'common'

// 百度统计借口方法封装
export function scriptsHtml (param = {}) {
  let hm = document.createElement('script')

  const [baiDuStr, curId] = [
    buryingPoint.defaultBase,
    param.id ? param.id : buryingPoint.defaultId
  ]

  hm.src = baiDuStr + curId
  let s = document.getElementsByTagName('script')[0]
  s.parentNode.insertBefore(hm, s)

}


export function Burying () {
  /* eslint-disable */
  let _hmt = _hmt || []

  scriptsHtml()
}

