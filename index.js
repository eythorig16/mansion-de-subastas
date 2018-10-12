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

router.get('/arts/:id', (req, res) => {
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
    const artService = new ArtService();
    artService.on(artService.events.ERROR, err => {
        return res.status(500).send(err);
    });

    artService.on(artService.events.CREATE_ART, art => {
        return res.status(201).send(art);
    });
    artService.createArt(body);

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

router.get('/artists/:id', (req, res) => {
    const artistService = new ArtistService();
    const { id } = req.params;
    artistService.on(artistService.events.ERROR, err => {
        return res.status(500).send(err);
    });

    artistService.on(artistService.events.GET_ARTIST_BY_ID, art => {
        return res.status(200).send(art);
    });
    artistService.getArtistById(id);
});

router.post('/artists', (req, res) => {
    const { body } = req;
    const artistService = new ArtistService();
    artistService.on(artistService.events.ERROR, err => {
        return res.status(500).send(err);
    });

    artistService.on(artistService.events.CREATE_ARTIST, artist => {
        return res.status(201).send(artist);
    });
    artistService.createArtist(body);
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

router.get('/customers/:id', (req, res) => {
    const customerService = new CustomerService();
    const { id } = req.params;
    customerService.on(customerService.events.ERROR, err => {
        return res.status(500).send(err);
    });

    customerService.on(customerService.events.GET_CUSTOMER_BY_ID, customer => {
        return res.status(200).send(customer);
    });
    customerService.getCustomerById(id);
});

router.post('/customers', (req, res) => {
    const { body } = req;
    const customerService = new CustomerService();
    customerService.on(customerService.events.ERROR, err => {
        return res.status(500).send(err);
    });

    customerService.on(customerService.events.CREATE_CUSTOMER, customer => {
        return res.status(201).send(customer);
    });
    customerService.createCustomer(body);
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

router.get('/auctions/:id', (req, res) => {
    const auctionService = new AuctionService();
    const { id } = req.params;
    auctionService.on(auctionService.events.ERROR, err => {
        return res.status(500).send(err);
    });

    auctionService.on(auctionService.events.GET_AUCTION_BY_ID, auction => {
        return res.status(200).send(auction);
    });
    auctionService.getAuctionById(id);
});

router.post('/auctions', (req, res) => {
    const { body } = req;
    const auctionService = new AuctionService();
    auctionService.on(auctionService.events.ERROR, err => {
        return res.status(500).send(err);
    });

    auctionService.on(auctionService.events.CREATE_CUSTOMER, auction => {
        return res.status(201).send(auction);
    });
    auctionService.createAuction(body);
});

app.use(bodyParser.json());
app.use('/api', router);

app.listen(port || process.env.PORT, () => {
    console.log(`Listening on port ${port}`);
});