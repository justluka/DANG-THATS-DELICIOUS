const mongoose = require('mongoose');
const Store = mongoose.model('Store');


exports.homePage = (req,res) => {
	console.log(req.name);
	res.render('index');
};

exports.addStore = (req,res) => {
	res.render('editStore',{title:'Add Store'});

};

exports.createStore = async (req,res) => {
        const store = await (new Store(req.body)).save();
        req.flash('success', `Successfully Created ${store.name} . Care to leave a review?`);
        res.redirect(`/store/${store.slug}`);        
};

exports.getStores= async (req, res) => {
    // 1. query the database for a list of all stores
    const stores = await Stores.find();
    console.log(stores);
    res.render('stores', { title: 'Stores'});
}