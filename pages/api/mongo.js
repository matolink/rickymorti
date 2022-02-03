//import mongoose from 'mongoose';

const mongoose = require('mongoose');
(async() => {
    console.log(await mongoose.connect('mongodb://localhost/rickymorty'))
})()
