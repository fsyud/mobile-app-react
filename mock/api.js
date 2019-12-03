import { delay } from 'roadhog-api-doc'


const proxy = {
    'GET /api/project/notice': {a:1}
}

// 调用 delay 函数，统一处理
export default delay(proxy, 1000);