// 工具栏 icon 引入
import icon_case from '@/assets/single/icon_society/case.png'
import icon_return from '@/assets/single/icon_society/return.png'
import icon_top from '@/assets/single/icon_society/top.png'
import icon_share from '@/assets/single/icon_society/share.png'

// 页面工具栏配置
export const societyTooBar = [
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
    src: icon_return,
  },
  {
    key: 'top',
    src: icon_top,
  }
]