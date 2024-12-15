const connection = require('../config/database')

const getAllBlog = (req, res) => {
    let blogs = []

    connection.query(
    'select * from blogs',
    function (err, results, fields) {
        blogs = results
        res.send(JSON.stringify(blogs))
    }
  );
}

const createNewBlog = (req, res) => {
    let { title, author, content } = req.body

    connection.query(
        `insert into blogs (title, author, content) 
        values (?, ?, ?)`,
        [title, author, content],
        function (err, results) {
            res.send(results)
        }
    )
}

module.exports = { createNewBlog, getAllBlog }