import request from '@/utils/request';

// /pm/2019/product_data  线上环境地址
// 生产环境 /api

export async function getCommonJson() {
  return request('/api/product_data/common.json', {
    method: 'GET'
  });
}

export async function getSchemeJson() {
  return request('/api/product_data/scheme.json', {
    method: 'GET'
  });
}

export async function getSchoolJson() {
  return request('/api/product_data/school.json', {
    method: 'GET'
  });
}

export async function getSocietyJson() {
  return request('/api/product_data/society.json', {
    method: 'GET'
  });
}