// 工具栏 icon 引入
import icon_case from '@/assets/single/icon_school/case.png'
import icon_return from '@/assets/single/icon_school/return.png'
import icon_top from '@/assets/single/icon_school/top.png'
import icon_share from '@/assets/single/icon_school/share.png'

// 页面工具栏配置
export const schoolTooBar = [
  {
    key: 'case',
    router: '/',
    src: icon_case,
    way: ''
  },
  {
    key: 'share',
    share: true,
    src: icon_share
  },
  {
    key: 'return_home',
    router: '/',
    src: icon_return
  },
  {
    key: 'top',
    src: icon_top
  }
]