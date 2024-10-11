const mongoose = require('mongoose');
const cities = require('./cities');
const Campground = require('../models/campground');
const { places, descriptors } = require('./seedHelpers');
mongoose.connect('mongodb://127.0.0.1:27017/camps');
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", () => {
    console.log("Database connected");
});

const sample = (array) => {
    return array[Math.floor(Math.random() * array.length)];
}



const seedDB = async () => {
    await Campground.deleteMany({});
    for (let i = 0; i < 200; i++) {
        const random500 = Math.floor(Math.random() * 500);
        const price = Math.floor(Math.random() * 20) + 10;
        const camp = new Campground({
            author: '670251d9bedf3814a8d9618e',
            location: `${cities[random500].city},${cities[random500].state}`,
            title: `${sample(descriptors)} ${sample(places)}`,
            description: 'Lorem ipsum dolor sit amet',
            price,
            geometry: {
                type: "Point",
                coordinates: [ 
                    cities[random500].longitude,
                    cities[random500].latitude,
                 ]
              },
          
            images: [
                {
                    url: 'https://res.cloudinary.com/dp8lkv3r8/image/upload/v1728289436/CampsApp/zplir9idueodpkw7okcl.jpg',
                    filename: 'CampsApp/zplir9idueodpkw7okcl',

                },
                {
                    url: 'https://res.cloudinary.com/dp8lkv3r8/image/upload/v1728289459/CampsApp/ktfcskosxzbnuzxmytha.jpg',
                    filename: 'CampsApp/ktfcskosxzbnuzxmytha',

                }
            ],
        })
        await camp.save();
    }
}

seedDB();