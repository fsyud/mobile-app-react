import React, { PureComponent } from 'react'
import { common } from '@/_common/scheme'
import { confPath } from '@/_common'
import router from 'umi/router'
import { connect } from 'dva'
import LazyLoad from 'react-lazy-load'
import styles from './index.less'

const oruterLink = confPath.single

// 路由配置项
const paramConf = {
  router: oruterLink,
  anchor: '1'
}

class Scheme extends PureComponent {
  componentDidMount() {
    const { dispatch } = this.props;
    if(dispatch) {
      dispatch({
        type: 'schemedata/GetSchemeList',
      });
    }
  }

  // 跳转函数 配置跳转路由
  goParticul = pam => {
    const { type } = common
    // 判断当前路由跳转type
    let curHash = pam.type === type[0] ? '3' 
      : pam.type === type[1] ? '1' 
      : '2'
    
    router.push({
      pathname: paramConf.router,
      query: {
        curAnchor: curHash,
        name: pam.listName,
        href: pam.href
      }
    })
  }

  render() {
    // query 路由跳转参数 schemedata dva接口请求数据
    const { location, schemedata } = this.props
    const { query } = location
    
    const shceConf = schemedata.detailList

    // 定义当前页面循环列表
    const [keysConf, curDetail] = [
      Object.keys(shceConf), parseInt(query.detail)
    ]

    if(keysConf.length === 0) return (<div>loading....</div>)

    // parseInt(query.detail)
    const Static = curDetail === 1 ? shceConf[keysConf[0]]
      : curDetail === 2 ? shceConf[keysConf[1]]
      : shceConf[keysConf[2]]
    
    // 定义懒加载图片组件
    const lazyImg = list => {
      const ele = list.map(pam => {
        return (
          
          <div
            key={pam.key}
            className={styles.sche_card}
            onClick={() => this.goParticul(pam)}
          >
            <div className={styles.sche_particul} >
              {pam.desc}
            </div>
            <LazyLoad offsetVertical={80}>
              <img className={styles.sche_img} src={pam.img} alt="" />
            </LazyLoad>
          </div>
        )
      })
      return ele
    }

    // 定义默认元素
    const DefaultEle = () => (
      Object.keys(Static).map(item => {
        const singleItem = Static[item]
        const ELE =
          <div
            className={styles.sche_item}
            key={singleItem.conf.key}
          >
            <div className={styles.sche_title}>
              {singleItem.conf.title ? singleItem.conf.title : ''}
            </div>
            <img src={common.lineSrc} alt="" />
            {lazyImg(singleItem.list)}
          </div>
        return ELE
      })
    )

    // 返回元素
    return(
      <div className={styles.scheme}>
        {/* <div>{curList}</div> */}
        <div className={styles.head_card}>
        </div>
        <div className={styles.sche_main}>
          <div className={styles.sche_container}>
            {DefaultEle()}
          </div>
        </div>
        <div className={styles.sche_bacground}></div>
      </div>
    )
  }
}

export default connect(({schemedata}) => ({
  schemedata
}))(Scheme)
