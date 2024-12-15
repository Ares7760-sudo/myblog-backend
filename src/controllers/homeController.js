const connection = require('../config/database')

const getHomepage = (req, res) => {
    /*
    let users = []
    // A simple SELECT query
    connection.query(
    'select * from Users',
    function (err, results, fields) {
        console.log("results >>>", results); // results contains rows returned by server
        users = results
        res.send(JSON.stringify(users))
    }
  );
    */

  return res.render('home.ejs')
}

const getAbc = (req, res) => {
    res.send('<h1>abc</h1>')
}

const getDemo = (req, res) => {
    res.render('sample.ejs')
}

const postCreateUser = (req, res) => {
    let { email, name, city } = req.body

    connection.query(
        `insert into users (email, name, city) 
        values (?, ?, ?)`,
        [email,name,city],
        function (err, results) {
            res.send("Đã tạo người dùng mới")
        }
    )
}

module.exports = {
    getHomepage, getAbc, getDemo, postCreateUser
}