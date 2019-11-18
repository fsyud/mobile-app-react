import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { List } from 'antd-mobile'
import router from 'umi/router'
import styles from './index.less'
const Item = List.Item

class LineCard extends PureComponent {
  handleClick = (pam) => {
    const { conf } = this.props
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
