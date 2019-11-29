import React, { PureComponent } from 'react'
import LazyLoad from 'react-lazy-load';
import styles from './index.less'
import { connect } from 'dva' 
import forIn from 'lodash/forIn'
import ToolBar from '@/components/ToolBar'
import { societyTooBar } from '@/_common/single/society'
import { schoolTooBar } from '@/_common/single/school'
import Redirect from 'umi/redirect';


class Single extends PureComponent {
  componentDidMount() {
    const { dispatch } = this.props
    if(dispatch) {
      dispatch({
        type: 'singledata/GetCommonList',
      })
      dispatch({
        type: 'singledata/GetSchoolList',
      })
      dispatch({
        type: 'singledata/GetSocietyList',
      })
    }
  }

  render() {
    const { location, singledata} = this.props
    const { query } = location
    const { common, school, society } = singledata
    
    const midObj = Object.assign({}, common, school, society)

    let endArr = []

    forIn(midObj, (v, k) => {
      if(k !== 'version') endArr.push(midObj[k])
    })

    if(endArr.length !== 3) return ( <div>loading...</div> )

    // 合并配置项
    const commonConf = Object.assign(
      {}, endArr[0], endArr[1], endArr[2]
    )
    const curList = commonConf[query.name]

    // 判断当前页面配置项是否完整
    if(!curList) {
      return ( <Redirect to="/devpage" /> )
    }

    // 判断toolbar列表配置项索引
    let currHref;

    // 判断toolbar列表配置项索引
    if(query.href && query.href.length > 0) currHref = query.href

    // toolbar 索引
    let toolBarList = query.curAnchor === '2' ? schoolTooBar : societyTooBar
    
    toolBarList[0].href = currHref

    // 公共表头判断
    const headPhoto = pam => {
      const Ele = pam === '1' ? <div className={styles.society}></div>
        : pam === '2' ? <div className={styles.school}></div>
        : <div className={styles.common}></div>
      return Ele;
    }

    // 定义图片循环列表
    const ImgLazy = list =>(
      list.map(ele => (
        <div key={ele.key} className={styles.single_photo}>
          <LazyLoad offsetVertical={50}>
            <img src={ele.src} alt=""/>
          </LazyLoad>
        </div>
      ))
    )

    return(
      <div className={styles.single}>
        <div className={styles.head_card}>
          {headPhoto(query.curAnchor)}
        </div>
        <div className={styles.single_main}>
          <div className={styles.single_contain}>
            <div className={styles.single_card}>
              <div className={styles.single_title}>
                {curList.title}
              </div>
              <div className={styles.single_photo_contain}>
                {ImgLazy(curList.List)}
              </div>
            </div>
          </div>
        </div>
        <ToolBar List={toolBarList}/>
      </div>
    )
  }
}

export default connect(({singledata}) => ({
  singledata
}))(Single)
