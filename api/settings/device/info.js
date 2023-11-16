
export default {
    feed_weight: () => [{
        url: '/device/feed_weight/',
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json:charset=UTF-8'
        },
    },null],
    last_resquest: () => [{
        url: '/device/last_resquest/',
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json:charset=UTF-8'
        }
    }, null]
};



