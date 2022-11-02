import request from './request';

export const analyzeCommit = (params) => request({ url: `/analyze/commit`, params, method: 'post' }) // 分析提交
export const feedbackCommit = (params) => request({ url: `/feedback/commit`, params, method: 'post' }) // 问题反馈
export const task = (params) => request({ url: `/task`, params, method: 'get' }) // 检测任务是否存在
export const overview = (params) => request({ url: `/product/overview`, params, method: 'post' }) // 获取 Overview (列表)
export const details = (params) => request({ url: `/product/details`, params, method: 'post' }) // 详情
export const sentobject = (params) => request({ url: `/analysis/sentobject`, params, method: 'post' }) // 获取 Review analysis -> product selling point / defects
export const sentreason = (params) => request({ url: `/analysis/sentreason`, params, method: 'post' }) // 获取 Review analysis -> product sellingpoint/defects -> sentreason
export const buyintent = (params) => request({ url: `/analysis/buyintent`, params, method: 'post' }) // 获取 Review analysis -> purchase intent
