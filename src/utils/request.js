import qs from 'qs';

const defalutHeaders = {
    'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8',
};

const parseJSONFilter = (res) => res.json();

const get = (uri) => {
    return fetch(uri)
        .then(parseJSONFilter)
        .catch(err => ({err}));
};


//qs.stringify()将对象 序列化成URL的形式
const post = (uri, body) => {
    return fetch(uri,{
        body: qs.stringify(body),
        headers: defalutHeaders,
        method:'POST'
    }).then(parseJSONFilter).catch(err =>({err}));

};

const asyncGet = (uri) => {
    return fetch(uri);
};

const asyncPost = (uri, body) => {
    return fetch(uri, {
        body: qs.stringify(body),
        headers: defaultHeaders,
        method: 'POST'
    });
};

export default {get, post, asyncGet, asyncPost};