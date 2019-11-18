import React, { PureComponent } from 'react';
import styles from './index.less'
import { connect } from 'dva'
import router from 'umi/router';
import { commonConf } from '@/_common'
import Guidance from '@/components/guidance'

class ToolBar extends PureComponent {
  toolClick = (conf, guidanceSta) => {
    const { dispatch } = this.props
    if(conf.href) {
      window.location.href = conf.href
      return
    }
    if(conf.router) {
      router.push(conf.router)
      return
    }
    if(conf.share) {
      dispatch({
        type: 'commonSpace/handleGuidanceChange',
        payload: guidanceSta
      })
    }
    window.scrollTo(0, 0)
    return
  }

  render () {
    const { List, commonSpace} = this.props
    const { guidance } = commonSpace
    const { toolClick } = this

    let guidanceConf = Object.assign({}, { guidance }, commonConf)
    return (
      <div className={styles.single_toobal}>
        {
          List.map((pam, index) => {
            let ele =  <div
              className={styles.toobar_one}
              key={pam.key}
              onClick={() => toolClick(pam, !guidance)}
            >
              <img src={pam.src} alt=""/>
            </div>
            if(index === 0) {
              if(!(pam.href && pam.href.length > 0)) return ''
            }
            return ele
          })
        }
        <Guidance conf={guidanceConf}></Guidance>
      </div>
    )
  }
}

export default connect(({commonSpace}) => ({
  commonSpace
}))(ToolBar)
