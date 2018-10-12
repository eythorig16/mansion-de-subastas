// Here the web service should be setup and routes declared
const { Artist, Art, Auction, AuctionBid, Customer } = require('./data/db');
const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const app = express();
const port = 3000;
const artistService = require('./services/artistService');
const artService = require('./services/artService');
const customerService = require('./services/customerService');
const auctionService = require('./services/auctionService');

router.get('/arts', (req, res) => {
    return res.json(artService.getAllArts());
});


app.use(bodyParser.json());
app.use('/api', router);

app.listen(port || process.env.PORT, () => {
    console.log(`Listening on port ${port}`);
});