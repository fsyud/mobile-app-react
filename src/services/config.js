import request from '@/utils/request';

// /pm/2019/  线上环境地址
// 生产环境 /api/

// 公共json配置
export async function getCommonJson() {
  return request('/pm/2019/product_data/common.json', {
    method: 'GET'
  });
}

// 产品详情页json
export async function getSchemeJson() {
  return request('/pm/2019/product_data/scheme.json', {
    method: 'GET'
  });
}

// 校园json
export async function getSchoolJson() {
  return request('/pm/2019/product_data/school.json', {
    method: 'GET'
  });
}

// 社会json
export async function getSocietyJson() {
  return request('/pm/2019/product_data/society.json', {
    method: 'GET'
  });
}

// 分享案例链接配置
export async function getHrefJson() {
  return request('/pm/2019/product_data/href.json', {
    method: 'GET'
  });
}

