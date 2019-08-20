// Imports
const path = require('path')
const mysql = require('mysql')
const express = require('express')
const app = express()
const port = 3000

// Database connection
var con = mysql.createConnection({
    host: "localhost",
    user: "root"
})

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected to database!");
});

// Uses
app.use(express.static('public'))

// Statics
app.use('/assets', express.static(path.join(__dirname, 'views', 'assets')))
app.use('/_fonts', express.static(path.join(__dirname, 'views', '_fonts')))


// ------------------ STATIC FILES ---------------------

// Root
app.get('/',(_, res) => {
    res.sendFile(path.join(__dirname, 'views', 'home', 'index.html'))
})
app.get('/style.css',(_, res) => {
    res.sendFile(path.join(__dirname, 'views', 'home', 'style.css'))
})
app.get('/script.js',(_, res) => {
    res.sendFile(path.join(__dirname, 'views', 'home', 'script.js'))
})

// Login
app.get('/login/',(_, res) => {
    res.sendFile(path.join(__dirname, 'views', 'login', 'index.html'))
})
app.get('/login/style.css',(_, res) => {
    res.sendFile(path.join(__dirname, 'views', 'login', 'style.css'))
})
app.get('/login/script.js',(_, res) => {
    res.sendFile(path.join(__dirname, 'views', 'login', 'script.js'))
})

// Team
app.get('/team/',(_, res) => {
    res.sendFile(path.join(__dirname, 'views', 'team', 'index.html'))
})
app.get('/team/style.css',(_, res) => {
    res.sendFile(path.join(__dirname, 'views', 'team', 'style.css'))
})
app.get('/team/script.js',(_, res) => {
    res.sendFile(path.join(__dirname, 'views', 'team', 'script.js'))
})

// Admin
app.get('/admin/',(_, res) => {
    res.sendFile(path.join(__dirname, 'views', 'admin', 'index.html'))
})
app.get('/admin/style.css',(_, res) => {
    res.sendFile(path.join(__dirname, 'views', 'admin', 'style.css'))
})
app.get('/admin/script.js',(_, res) => {
    res.sendFile(path.join(__dirname, 'views', 'admin', 'script.js'))
})

// Signup
app.get('/signup/',(_, res) => {
    res.sendFile(path.join(__dirname, 'views', 'signup', 'index.html'))
})
app.get('/signup/style.css',(_, res) => {
    res.sendFile(path.join(__dirname, 'views', 'signup', 'style.css'))
})
app.get('/signup/script.js',(_, res) => {
    res.sendFile(path.join(__dirname, 'views', 'signup', 'script.js'))
})

// ------------------------- DYNAMIC ------------------------

// -------------------------   APIs  ------------------------
app.post('/registermember', (req, res) => {
    
});


// Starting server
app.listen(port, ()=>console.log("Server Live!"))