const fs = require('fs');

const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
    fs.readFile('chat_history.txt', (err, data) => {
        if (data === undefined) {
            data = "";
        }
        res.send(`<p>${data}<p><form action="/" method="POST" onsubmit="submitHandler(event)"><input type="text" name="message" placeholder="Message" id="message"><button type="submit">Send</button></form><script>const submitHandler = event => {document.getElementById("message").value = localStorage.getItem("username") + " : " + document.getElementById("message").value}</script>`);
    });
});

router.post('/', (req, res, next) => {
    const body = req.body;
    fs.appendFile('chat_history.txt', `${body.message}\n`, (err, data) => {
        res.redirect('/');
    });
});

module.exports = router;