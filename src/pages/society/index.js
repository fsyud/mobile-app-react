import React, { PureComponent } from 'react'
import { pageInfo, confPath} from '@/_common'
import styles from './index.less'
import LineCard from '@/components/LineCard'

const societyList = pageInfo.societyInfo.List
const oruterLink = confPath.single

const curConfig = {
  router: oruterLink,
  anchor: '1'
}

class Society extends PureComponent {
  render() {
    return(
      <div className={styles.society}>
        <div className={styles.head_card}>
        </div>
        <div className={styles.contnet_list}>
          <LineCard
            listInfo={societyList}
            conf={curConfig}
          />
        </div>
      </div>
    )
  }
}

export default Society;
