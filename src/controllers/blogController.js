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

const updateBlog = async (req, res) => {
    const blogId = await req.params.id
    let { title, author, content } = req.body

    connection.query(
        `update blogs set title = ?, author = ?, content = ? where id = ?`, 
        [title, author, content, blogId]),
        function (err, results) {
            res.send(results)
        }
}

const getBlogById = (req, res) => {
    const blogId = req.params.id
    
    connection.query(`select * from blogs where id = ?`, 
        [blogId],
        function (err, results) {
            let blog = results && results.length > 0 ? results[0] : {}
            res.send(JSON.stringify(blog))
        }
    );
}

const deleteBlogById = async (req, res) => {
    const blogId = await req.params.id

    connection.query(
        `delete from blogs where id = ?`,
        [blogId],
        function (err, results) {
            res.send(results)
        }
    )
}

module.exports = { createNewBlog, getAllBlog, getBlogById, deleteBlogById, updateBlog }