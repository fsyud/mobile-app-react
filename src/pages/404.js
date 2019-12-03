import React, { PureComponent } from 'react';

import { Result, WhiteSpace, Icon } from 'antd-mobile';


class ErrorPage extends PureComponent {
  render() {
    return (
      <div>
        <Result
            img={<Icon type="cross-circle-o" className="spe" style={{ fill: '#F13642' }} />}
            title="加载失败"
            message="页面加载失败，是否返回首页"
        />
        <WhiteSpace />
        
      </div>
    )  
  }
}

export default ErrorPage;



