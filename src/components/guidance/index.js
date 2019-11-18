import React, { PureComponent } from 'react';
import { connect } from 'dva'
import styles from './index.less'

class Guidance extends PureComponent {
  guidanceClick = () => {
    const { dispatch } = this.props
    dispatch({
      type: 'commonSpace/handleGuidanceChange',
      payload: false
    })
  }

  render() {
    const { conf } = this.props
    const imgSrc = conf.guidanceSrc
    const { guidanceClick } = this

    return (
      conf.guidance ? <div
        className={styles.guidance}
        onClick={() => guidanceClick()}
      >
        <img src={imgSrc} alt="" />
      </div>
      : ''
    )
  }
}

export default connect(({commonSpace}) => ({
  commonSpace
}))(Guidance)
