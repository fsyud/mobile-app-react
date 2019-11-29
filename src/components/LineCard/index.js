import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { List } from 'antd-mobile'
import router from 'umi/router'
import styles from './index.less'
const Item = List.Item

class LineCard extends PureComponent {
  handleClick = (pam) => {
    const { conf } = this.props

    const GlobalHmt = window._hmt ? window._hmt : null
    
    // category 要监控的目标的类型名称
    // action 用户跟目标交互的行为
    // opt_label 事件的一些额外信息 该项可选 事件的一些数值信息
    // 比如权重、时长、价格等等，在报表中可以看到其平均值等数据。该项可选
    // opt_value
    const hmtConf = [
      `${conf.anchor === '1' ? '社会' : '校园'}${pam.info}`,
      '跳转',
      '导航栏' + pam.info
    ]

    GlobalHmt.push(['_trackEvent', ...hmtConf])

    console.log(GlobalHmt)

    router.push({
      pathname: conf.router,
      query: {
        page: pam.key,
        curAnchor: conf.anchor,
        name: pam.listName,
        href: pam.href
      }
    })
  } 

  render() {
    const { listInfo} = this.props
    return (
      <div className={styles.contnet_list}>
      {
        Object.keys(listInfo).map(item => {
          const singleEle = listInfo[item]
          const ELE = <List
            key={singleEle.conf.key}
            renderHeader={() => (
              singleEle.conf.title ? singleEle.conf.title : ''
            )}>
            {
              singleEle.list.map(pam => (
                <Item
                  key={pam.key}
                  thumb={pam.icon}
                  arrow="horizontal"
                  onClick={() => this.handleClick(pam)}
                >
                  {pam.info}
                </Item>
              ))
            }
          </List>
          return ELE;
        })
      }
      </div>
    )
  }
}

LineCard.defaultProps = {
  listInfo: null
}

LineCard.propTypes = {
  listInfo: PropTypes.object.isRequired,
  confRouter:  PropTypes.string
}

export default LineCard;
