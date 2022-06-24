const mongoose = require('mongoose');

const accessorySchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true,
        validate: {
            validator: /^https?/g,
            message: 'Image Url should be a link'
        },
        message: 'Image Url should be a link'
    },
    description: {
            type: String,
            maxlength: 120,
            required: true
        }
    }
);

const Accessory = mongoose.model('Accessory', accessorySchema);

module.exports = Accessory;