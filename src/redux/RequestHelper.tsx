import axios from 'axios';
import cookie from 'react-cookies';

let csrfToken = cookie.load('XSRF-TOKEN');
let instance = axios.create({ headers: { 'X-XSRF-TOKEN': csrfToken }});

const del = (url: string): Promise<any> => { // eslint-disable-line @typescript-eslint/no-explicit-any
    return instance.delete(url).catch(err => err.request);
};

const get = (url: string): Promise<any> => { // eslint-disable-line @typescript-eslint/no-explicit-any
    return instance.get(url).catch(err => err.request);
};

type ValidPostOperations = { message: string }  ;

const post = (url: string, params?: any): Promise<any> => { // eslint-disable-line @typescript-eslint/no-explicit-any
    return instance.post(url, params).catch(err => err.request);
};

export default {
    del,
    get,
    post,
};
