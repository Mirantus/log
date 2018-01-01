// @flow

import Cookie from 'js-cookie';

import { LOGOUT } from 'auth/constants';
import store from 'store/configure-store';

export const apiFetch = (apiUrl:string, apiMethod:string = 'GET', apiData:Object = {}, apiOptions:Object = {}) => {
    // $FlowFixMe
    let url = `${APP_ENV.apiUrl}/${apiUrl}`;
    const options = {
        method: apiMethod,
        ...apiOptions
    };

    if (Object.keys(apiData).length) {
        if (apiMethod === 'GET') {
            // $FlowFixMe
            url += `?${Object.entries(apiData).map(([key, val]) => `${key}=${val}`).join('&')}`;
        } else {
            options.body = JSON.stringify(apiData);
        }
    }

    return fetch(url, options);
};

export const apiFetchWithAuth = (apiUrl:string, apiMethod:string = 'GET', apiData:Object = {}, apiOptions:Object = {}):Promise<*> => {
    const token = Cookie.get('token');

    if (token) {
        apiOptions.headers = apiOptions.headers || {};
        apiOptions.headers.Authorization = `Bearer ${token}`;
    }

    return new Promise(async (resolve:Function, reject:Function) => {
        try {
            const response = await apiFetch(apiUrl, apiMethod, apiData, apiOptions);

            if (response.status === 401) {
                store.dispatch({
                    type: LOGOUT
                });
            }

            resolve(response);
        } catch (error) {
            reject(error);
        }
    });
};
