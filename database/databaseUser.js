function databaseUser(connection) {
    this.userConnection = connection
}

databaseUser.prototype.createUser = function (data, callback) {
    this.userConnection.query('INSERT INTO yourfuture_users SET ?', data, callback)
}

databaseUser.prototype.searchAll = function (callback) {
    this.userConnection.query('SELECT * FROM yourfuture_users', callback)
}

databaseUser.prototype.verifyLogin = function (data,callback) {
    this.userConnection.query('SELECT * FROM yourfuture_users WHERE email = ? AND password =?',[data.email, data.password], callback)
}
module.exports = function() {
    return databaseUser
}