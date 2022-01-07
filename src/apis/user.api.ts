import request from 'umi-request';

export function getData(){
    return request.get('/v1/user');
}