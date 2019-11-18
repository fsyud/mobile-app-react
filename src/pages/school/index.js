import React, { PureComponent } from 'react'
import { pageInfo, confPath} from '@/_common'
import styles from './index.less'
import LineCard from '@/components/LineCard'

const schoolList = pageInfo.schoolInfo.List
const oruterLink = confPath.single

const curConfig = {
  router: oruterLink,
  anchor: '2'
}

class School extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      curPage: '1'
    }
  }
  render() {
    return(
      <div className={styles.school}>
        <div className={styles.head_card}>
        </div>
        <div className={styles.contnet_list}>
          <LineCard
            listInfo={schoolList}
            conf={curConfig}
          />
        </div>
      </div>
    )
  }
}

export default School;
