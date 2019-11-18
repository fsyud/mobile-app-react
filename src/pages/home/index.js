import React, { PureComponent } from 'react'
import router from 'umi/router';
import styles from './index.less'
import { List, WingBlank, WhiteSpace } from 'antd-mobile';
import { navList, pageInfo } from '@/_common'
const Item = List.Item;
const Brief = Item.Brief;

class Home extends PureComponent {
  linkDetail = cur => {
    router.push({
      pathname: '/scheme',
      query: {detail: cur}
    })
  }

  navClick = ele => {
    router.push({
      pathname: ele
    })
  }
  
  render() {
    // 定义页面头部组件
    const navBar = list => (
      list.map(pam => (
        <div
          key={pam.name}
          className={styles[pam.name]}
          onClick={() => this.navClick(pam.router)}
        >
          <div className={styles.nav_img}>
            <img src={pam.src} alt="" />
          </div>
          <div className={styles.nav_desc}>
            {pam.desc}
          </div>
        </div>
      ))
    )

    return(
      <div className={styles.home}>
        <div className={styles.head_card}></div>
        <div className={styles.head_navbar}>
          {navBar(navList)}
        </div>
        <WingBlank size="lg">
          <div className={styles.mid_title}>
            {pageInfo.homeInfo.mid_title}
          </div>
        </WingBlank>
        {
          pageInfo.homeInfo.list.map(ele => (
            <List renderHeader={() => ''}
              className={styles.my_list}
              key={ele.key}
            >
              <Item
                arrow="horizontal"
                thumb={ele.src}
                multipleLine
                onClick={() => this.linkDetail(ele.key)}
              >
                {ele.title}
                <Brief>{ele.annotaion}</Brief>
              </Item>
            </List>
          ))
        }
        <WhiteSpace />
        <WingBlank size="lg">
          <div className={styles.spaceConf}>
            {pageInfo.homeInfo.footerText}
          </div>
        </WingBlank>
      </div>
    )
  }
}

export default Home;