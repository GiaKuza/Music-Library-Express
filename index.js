const express = require('express');
const repoContext = require('./repository/repository-wrapper');
const cors = require('cors');
const {validateSongs} = require('./middleware/songs-validation');




const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.listen(3000, function () {
    console.log("Server started. Listening on port 3000");
});
