import {main} from './uploads/app.js';
// import {require} from 'https://requirejs.org/docs/release/2.3.5/minified/require.js';
const express = require('express')
const upload = require('express-fileupload')
const app = express()

app.use(upload())
// app.get() : using the get method, user sends a request (req) to the server 
// and accordingly the server send its response (res)

// here user requests the server using the get() method and 
// server sends the html file (index.html) as a response
app.get('/', (req,res) => {
    res.sendFile(__dirname + '/index.html')
})

console.log("Server Started on 5500!")
app.post('/', (req,res) => {
    if (req.files) {
        console.log(req.files)
        var file = req.files.file
        var filename = file.name
        console.log("Name of the file being uploaded:" + filename)

        // path where file is to be uploaded
        file.mv('./uploads/'+filename, function (err) {
            if (err) {
                res.send(err)
            }
            else {
                res.send("File Uploaded")
                main();
            }
        })
    }
})

app.listen(5500)
