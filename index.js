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
    const { GET_ALL_ARTS } = artService.events;
    artService.on(GET_ALL_ARTS, (arts) => {
        return res.json(arts.getAllArts());
    }); 
});


app.use(bodyParser.json());
app.use('/api', router);

app.listen(port || process.env.PORT, () => {
    console.log(`Listening on port ${port}`);
});