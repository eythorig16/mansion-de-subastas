const EventEmitter = require('events');
const { Customer } = require('../data/db');

class CustomerService extends EventEmitter {
    constructor() {
        super();
        this.events = {
            GET_ALL_CUSTOMERS: 'GET_ALL_CUSTOMERS',
            GET_CUSTOMER_BY_ID: 'GET_CUSTOMER_BY_ID',
            GET_CUSTOMER_AUCTION_BIDS: 'GET_CUSTOMER_AUCTION_BIDS',
            CREATE_CUSTOMER: 'CREATE_CUSTOMER',
            ERROR: 'ERROR'
        };
    }
    getAllCustomers() {
        // Your implementation goes here
        // Should emit a GET_ALL_CUSTOMERS event when the data is available
        Customer.find({}, (err, customers) => {
            if (err) { this.emit(this.events.ERROR, err) }
            else { this.emit(this.events.GET_ALL_CUSTOMERS, customers)}
        });
    };

    getCustomerById(id) {
        // Your implementation goes here
        // Should emit a GET_CUSTOMER_BY_ID event when the data is available
        Customer.findById(id, (err, customer) => {
            if (err) { this.emit(this.events.ERROR, err) }
            else { this.emit(this.events.GET_CUSTOMER_BY_ID, customer)}
        });
    };

    getCustomerAuctionBids(customerId) {
        // Your implementation goes here
        // Should emit a GET_CUSTOMER_AUCTION_BIDS event when the data is available
    };

    createCustomer(customer) {
        // Your implementation goes here
        // Should emit a CREATE_CUSTOMER event when the data is available
        Customer.create(customer, err => {
            if (err) { this.emit(this.events.ERROR, err) }
            else { this.emit(this.events.CREATE_ART, customer)}
        });
    };
};

module.exports = CustomerService;
