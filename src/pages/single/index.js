import React, { PureComponent } from 'react'
import LazyLoad from 'react-lazy-load';
import { Toast } from 'antd-mobile';
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
      dispatch({
        type: 'singledata/GetHrefList'
      })
    }
  }

  loadingToast = () => {
    Toast.loading('Loading...', 3, () => {
      console.log('Load complete !!!')
    });
  }

  componentDidCatch(error, info) {
    console.log(error, info)
  }
  

  render() {
    const { location, singledata } = this.props
    const { query } = location
    const { common, school, society, hrefList} = singledata
    
    const midObj = Object.assign({}, common, school, society)

    // 定义总列表数组
    let endArr = []

    // 合并所需数组对象
    forIn(midObj, (v, k) => {
      if(k !== 'version') endArr.push(midObj[k])
    })

    // 返回 loading 虚拟 dom
    const Loading = () => {
      return <div>loading...</div>
    }

    // 判断接口请求是否完全
    if(endArr.length !== 3) return (Loading())

    // 合并配置项
    const commonConf = Object.assign(
      {}, endArr[0], endArr[1], endArr[2]
    )
    const curList = commonConf[query.name]

    // 判断当前页面配置项是否完整
    if(!curList) {
      return ( <Redirect to="/devpage" /> )
    }

    // 定义当前 href 全局 value
    let currHref;

    // 判断toolbar列表配置项索引
    if (query.name && query.name.length > 0) {
      if (hrefList && hrefList.data && hrefList.data.length > 0) {
        const curLineData = hrefList.data.filter(s => s.hanger === query.name)
        currHref = curLineData && curLineData.length > 0 
          ? curLineData[0].href : ''
      } else return (Loading())
    }

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
