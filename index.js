// Here the web service should be setup and routes declared
const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const app = express();
const port = 3000;
const ArtistService = require('./services/artistService');
const ArtService = require('./services/artService');
const CustomerService = require('./services/customerService');
const AuctionService = require('./services/auctionService');

router.get('/arts', (req, res) => {
    const artService = new ArtService();
    artService.on(artService.events.ERROR, err => {
        return res.status(500).send(err);
    });

    artService.on(artService.events.GET_ALL_ARTS, arts => {
        return res.status(200).send(arts);
    });
    artService.getAllArts();
});

router.get('/arts:id', (req, res) => {
    const artService = new ArtService();
    artService.on(artService.events.ERROR, err => {
        return res.status(500).send(err);
    });

    artService.on(artService.events.GET_ART_BY_ID, art => {
        return res.status(200).send(art);
    });
    artService.getArtById(id);
});



app.use(bodyParser.json());
app.use('/api', router);

app.listen(port || process.env.PORT, () => {
    console.log(`Listening on port ${port}`);
});