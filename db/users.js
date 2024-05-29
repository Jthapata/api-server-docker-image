let records =[
    {id: 1, username: 'jack', password: '$2a$10$G5i64C69MqxnW.pwneA4c.0I/3TmQgd5kkbd.30K0yH3KdV1fhdTm', firstName:'Jack', lastName:'Johnson', displayName:'Jack Johnson', email:'jj@applebee.org' },
    {id:2, username: 'tim', password: 'lemonade'},
    {id:3, username: 'zack', password: 'asdf'}
]

exports.findById = function(id, cb){
    process.nextTick(() => {
        for (let i = 0, len = records.length; i < len; i++) {
            let record = records[i]
            if (record.id === id) {
                return cb(null, record)
            }
        }
        return cb(null, null)
    })
}
exports.findByUsername = function(username, cb){
    process.nextTick(() => {
        for (let i = 0, len = records.length; i < len; i++) {
            let record = records[i]
            if (record.username === username) {
                return cb(null, record)
            }
        }
        return cb(null, null)
    })
}