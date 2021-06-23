const express = require('express');
const repoContext = require('./repository/repository-wrapper');
const cors = require('cors');
const {validateSongs} = require('./middleware/songs-validation');




const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.listen(3000, function () {
    console.log("Server started. Listening on port 3000");
});

app.get('/api/songs/', (req, res) => {
    const songs = repoContext.songs.findAllSongs();
    return res.send(songs);
})

app.get('/api/songs/:id', (req, res) => {
    const id = req.params.id;
    const songById = repoContext.songs.findSongById(id);
    return res.send(songById);
})

app.post('/api/songs/', [validateSongs], (req, res) => {
    const newSong = req.body;
    const createNewSong = repoContext.songs.createSong(newSong);
    return res.send(createNewSong);
})

app.put('/api/songs/:id/', [validateSongs], (req, res) => {
    const id = req.params.id;
    const songPropertiesToUpdate = req.body;
    const updatedSong = repoContext.songs.updateSong(id, songPropertiesToUpdate);
    return res.send(updatedSong);
})

app.delete('/api/songs/:id/', (req,res) => {
    const id = req.params.id;
    const deletedSong = repoContext.songs.deleteSong(id);
    return res.send(deletedSong)
})