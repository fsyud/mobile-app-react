import React, { PureComponent } from 'react';

import { Result } from 'antd-mobile';

const myImg = src => <img src={src} className="spe am-icon am-icon-md" alt="" />;

class devPage extends PureComponent {
  render() {
    return (
      <div>
        <Result
          img={myImg('https://gw.alipayobjects.com/zos/rmsportal/HWuSTipkjJRfTWekgTUG.svg')}
          title="正在开发"
          message="当前页面正在开发过程中..."
        />
      </div>
    )  
  }
}

export default devPage;
