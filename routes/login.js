const express = require('express');

const router = express.Router();

router.get('/login', (req, res, next) => {
    res.send('<form action="/login" method="POST" onsubmit="submitHandler(event)"><input type="text" name="username" id="username" placeholder="Username"><button type="submit">Login</button></form><script>const submitHandler = event => {const username = document.getElementById("username").value; localStorage.setItem("username", username);}</script>')
});

router.post('/login', (req, res, next) => {
    const body = req.body;
    res.redirect('/');
});

module.exports = router;