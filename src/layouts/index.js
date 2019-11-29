import styles from './index.less'
import Redirect from 'umi/redirect'
import { Burying } from 'utils/tool'

const GetBaidu = props => {
  let children = props.children

  Burying()
  console.log('Burying')
  return children
}

function BasicLayout(props) {
  // props 路由对象
  const _path = props.location.pathname

  // 页面路由重定向
  if (_path === '/') {
    return (
      <Redirect to="/home" />
    )
  }

  // 不同的全局 layout 登录页
  if (_path === '/login') {
    return (
      <div>登录页！</div>
    )
  }

  return (
    <div className={styles.normal}>
      {/* {props.children} */}
      {GetBaidu(props)}
    </div>
  )
}

export default BasicLayout;
