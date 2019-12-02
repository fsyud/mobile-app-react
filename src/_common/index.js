// home photo-router
import figure_one from '@/assets/home/figure_one.png'
import figure_two from '@/assets/home/figure_two.png'
import figure_three from '@/assets/home/figure_three.png'

// icon-common
import terrace from '@/assets/_common/terrace.png'
import pc_terrace from '@/assets/_common/pc_terrace.png'

// icon-society
import small_terrace from '@/assets/society/icon/small_terrace.png'
import u_custom from '@/assets/society/icon/u_custom.png'
import push_plus from '@/assets/society/icon/push_plus.png'
import interface_png from '@/assets/society/icon/interface.png'

// icon-school
import sign_in from '@/assets/school/icon/sign_in.png'
import interview from '@/assets/school/icon/interview.png'
import query from '@/assets/school/icon/query.png'
import c_one from '@/assets/school/icon/c_one.png'

import head_left from '@/assets/home/icon_one.png'
import head_right from '@/assets/home/icon_two.png'

// 引导
import guidanceSrc from '@/assets/_common/guidance.png'

export const navList = [
  {
    name: 'head_left',
    router: '/society',
    src: head_left,
    desc: '社会招聘产品'
  },
  {
    name: 'head_right',
    router: '/school',
    src: head_right,
    desc: '校园招聘产品'
  }
]

export const confPath = {
  single: '/single'
}

export const commonConf = {
  guidanceSrc
}

export const buryingPoint = {
  defaultBase: 'https://hm.baidu.com/hm.js?',
  defaultId: 'ead4cae09156dc28f81cfd2c35a81715'
}

export const pageInfo = {
  homeInfo: {
    mid_title: '解决方案',
    list: [
      {
        key: '1',
        title: '提高雇主品牌形象',
        annotaion: 'IMPRESS ENTERRPRPISE BRAND IMAGE',
        src: figure_one
      },
      {
        key: '2',
        title: '整合简历收集来源',
        annotaion: 'GATHER RESUME RESOURCE',
        src: figure_two
      },
      {
        key: '3',
        title: '提升招聘工作效率',
        annotaion: 'BOOST RECRUITMENT EFFICIENCY',
        src: figure_three
      }
    ],
    footerText: '如有兴趣，请联系您的销售顾问，提供企业专属招聘方案'
  },
  societyInfo: {
    List: {
      one: {
        conf: {
          key: 'one',
          title: '设计类产品'
        },
        list: [
          {
            key: '1',
            info: '手机平台',
            icon: terrace,
            routers: '/single',
            listName: 'cellphone_conf',
            href: 'cellphone_conf'
          },
          {
            key: '2',
            info: 'PC平台',
            icon: pc_terrace,
            routers: '/single',
            listName: 'pc_conf',
            href: 'pc_conf'
          },
          {
            key: '3',
            info: '小平台',
            icon: small_terrace,
            routers: '/single',
            listName: 'smalberm_conf'
          }
        ]
      },
      two: {
        conf: {
          key: 'two',
          title: '应用类产品'
        },
        list: [
          {
            key: '4',
            info: '网才U定制',
            icon: u_custom,
            routers: '/single',
            listName: 'u_conf'
          },
          {
            key: '5',
            info: '无忧内推PLUS',
            icon: push_plus,
            routers: '/single',
            listName: 'interplus_conf'
          },
          {
            key: '6',
            info: '接口',
            icon: interface_png,
            routers: '/single',
            listName: 'interface_conf'
          }
        ]
      }
    }
  },
  schoolInfo: {
    List: {
      one: {
        conf: {
          key: 'one',
          title: '设计类产品'
        },
        list: [
          {
            key: '1',
            info: '手机平台',
            icon: terrace,
            routers: '/single',
            listName: 'cellphone_conf',
            href: 'cellphone_conf'
          },
          {
            key: '2',
            info: 'PC平台',
            icon: pc_terrace,
            routers: '/single',
            listName: 'pc_conf',
            href: 'pc_conf'
          }
        ]
      },
      two: {
        conf: {
          key: 'two',
          title: '应用类产品'
        },
        list: [
          {
            key: '4',
            info: '无忧签到',
            icon: sign_in,
            routers: '/single',
            listName: 'sign_conf'
          },
          {
            key: '5',
            info: '无忧面试宝',
            icon: interview,
            routers: '/single',
            listName: 'interview_conf'
          },
          {
            key: '6',
            info: '网申状态查询',
            icon: query,
            routers: '/single',
            listName: 'applysearch_conf'
          },
          {
            key: '7',
            info: 'C1A数据人才测评',
            icon: c_one,
            routers: '/single',
            listName: 'c1a_conf'
          },
          {
            key: '8',
            info: '接口',
            icon: interface_png,
            routers: '/single',
            listName: 'interface_conf'
          }
        ]
      }
    }
  }
}
