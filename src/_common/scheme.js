// 表头分割线
import line from '@/assets/scheme/line.png'

// 返回首页
import icon_return from '@/assets/single/icon_society/return.png'

export const common = {
  type: ['common', 'society', 'school'],
  lineSrc: line,
  toolConf: {
    List: [
      {
        key: 'return_home',
        router: '/',
        src: icon_return,
        common: true
      }
    ],
    style: {
      right: '0'
    }
  }
}
