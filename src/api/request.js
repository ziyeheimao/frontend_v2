import axios from 'axios';
import { message } from 'antd';
const baseUrl = 'http://127.0.0.1:8000';

const METHOD = {
	POST: 'post',
	GET: 'get',
	PUT: 'put',
	DELETE: 'delete',
};

const axiosInstance = axios.create({
	timeout: 30000,
});

axiosInstance.defaults.baseURL = baseUrl;

// response拦截器
axiosInstance.interceptors.response.use((response) => {
	// 鉴权
	// const res = response.data;
	/* if (res && !res.code) {
		return response
	} else if (res && res.code === 330) {
	} else {
		message.error(res.msg || '请求失败')
		return Promise.reject('error')
	} */

	return response;
});

// 过滤掉请求参数为 null | undefined 的属性；去除字符串两端的特殊字符
const filterParams = (params) => {	
	const newPrams = {};
	for (const [key, value] of Object.entries(params)) {
	  if (typeof value === 'string') {
		// 不是空字符串切除 字符串开头结尾处空格 空串直接忽略
		if (value !== '') {
		  newPrams[key] = value.trim();
		}
	  } else if (Object.prototype.toString.call(value) === '[object Object]') {
		// 对象向下递归
		newPrams[key] = filterParams(value);
	  } else if (value !== null && typeof value !== 'undefined') {
		newPrams[key] = value;
	  }
	}
	return newPrams;
};

const request = ({ method, url, params, restConfig = {} }) => {
	method = method.toLowerCase();
	params = typeof params === 'undefined' ? null : filterParams(params);

	return new Promise((resolve, reject) => {
		const config = {
			method,
			url,
			data: method === METHOD.POST || method === METHOD.PUT ? params : null,
			params: method === METHOD.GET || method === METHOD.DELETE ? params : null,
			...restConfig,
		};
		axiosInstance(config).then(
			(res) => {
                if (res?.data?.code === 0) {
                    resolve(res.data)
                } else {
					message.error(res.data.errMsg);
                    reject(res.data.errMsg);
                }
			},
			(err) => {
                message.error(err.message);
				reject(err.message);
			},
		);
	});
};

export default request;
