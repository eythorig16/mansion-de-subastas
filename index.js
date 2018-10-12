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

//arts
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
    const { id } = req.params;
    artService.on(artService.events.ERROR, err => {
        return res.status(500).send(err);
    });

    artService.on(artService.events.GET_ART_BY_ID, art => {
        return res.status(200).send(art);
    });
    artService.getArtById(id);
});

router.post('/arts', (req, res) => {
    const { body } = req;
});

//artists
router.get('/artists', (req, res) => {
    const artistService = new ArtistService();
    artistService.on(artistService.events.ERROR, err => {
        return res.status(500).send(err);
    });

    artistService.on(artistService.events.GET_ALL_ARTISTS, artists => {
        return res.status(200).send(artists);
    });
    artistService.getAllArtists();
});

//customers
router.get('/customers', (req, res) => {
    const customerService = new CustomerService();
    customerService.on(customerService.events.ERROR, err => {
        return res.status(500).send(err);
    });

    customerService.on(customerService.events.GET_ALL_CUSTOMERS, customers => {
        return res.status(200).send(customers);
    });
    customerService.getAllCustomers();
});

//auctions
router.get('/auctions', (req, res) => {
    const auctionService = new AuctionService();
    auctionService.on(auctionService.events.ERROR, err => {
        return res.status(500).send(err);
    });

    auctionService.on(auctionService.events.GET_ALL_AUCTIONS, auctions => {
        return res.status(200).send(auctions);
    });
    auctionService.getAllAuctions();
});

app.use(bodyParser.json());
app.use('/api', router);

app.listen(port || process.env.PORT, () => {
    console.log(`Listening on port ${port}`);
});