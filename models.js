const mongoose = require('mongoose');

const SliderSchema = new mongoose.Schema({
    heading: {
        type: String,
        required: [true, 'Heading is required'],
        trim: true,
    },
    description: {
        type: String,
        required: [true, 'Description is required'],
        trim: true,
    },
    url: {
        type: String,
        required: [true, 'URL is required'],
        trim: true,
        validate: {
            validator: function(v) {
                return /^https?:\/\/.+\..+$/.test(v);
            },
            message: 'Invalid URL format',
        },
    },
});

const ProjectSchema = new mongoose.Schema({
    heading: {
        type: String,
        required: [true, 'Heading is required'],
        trim: true,
    },
    description: {
        type: String,
        required: [true, 'Description is required'],
        trim: true,
    },
    url: {
        type: String,
        required: [true, 'URL is required'],
        trim: true,
        validate: {
            validator: function(v) {
                return /^https?:\/\/.+\..+$/.test(v);
            },
            message: 'Invalid URL format',
        },
    },
});

const ClientSchema = new mongoose.Schema({
    heading: {
        type: String,
        required: [true, 'Heading is required'],
        trim: true,
    },
    description: {
        type: String,
        required: [true, 'Description is required'],
        trim: true,
    },
    url: {
        type: String,
        required: [true, 'URL is required'],
        trim: true,
        validate: {
            validator: function(v) {
                return /^https?:\/\/.+\..+$/.test(v);
            },
            message: 'Invalid URL format',
        },
    },
});

const ContactHRSchema = new mongoose.Schema({
    heading: {
        type: String,
        required: [true, 'Heading is required'],
        trim: true,
    },
    description: {
        type: String,
        required: [true, 'Description is required'],
        trim: true,
    },
    url: {
        type: String,
        required: [true, 'URL is required'],
        trim: true,
        validate: {
            validator: function(v) {
                return /^https?:\/\/.+\..+$/.test(v);
            },
            message: 'Invalid URL format',
        },
    },
});

const BlogSchema = new mongoose.Schema({
    heading: {
        type: String,
        required: [true, 'Heading is required'],
        trim: true,
    },
    description: {
        type: String,
        required: [true, 'Description is required'],
        trim: true,
    },
    url: {
        type: String,
        required: [true, 'URL is required'],
        trim: true,
        validate: {
            validator: function(v) {
                return /^https?:\/\/.+\..+$/.test(v);
            },
            message: 'Invalid URL format',
        },
    },
    title: {
        type: String,
        required: [true, 'Title is required'],
        trim: true,
    },
    keywords: {
        type: [String],
        required: [true, 'Keywords are required'],
        trim: true,
    },
    metaDescription: {
        type: String,
        trim: true,
    },
});

const ContactFormSchema = new mongoose.Schema({
    heading: {
        type: String,
        required: [true, 'Heading is required'],
        trim: true,
    },
    description: {
        type: String,
        required: [true, 'Description is required'],
        trim: true,
    },
    message: {
        type: String,
        required: [true, 'Message is required'],
        trim: true,
    },
});

const HeadingSchema = new mongoose.Schema({
    heading: {
        type: String,
        required: [true, 'Heading is required'],
        trim: true,
    },
});

const Slider = mongoose.model('Slider', SliderSchema);
const Project = mongoose.model('Project', ProjectSchema);
const Client = mongoose.model('Client', ClientSchema);
const ContactHR = mongoose.model('ContactHR', ContactHRSchema);
const Blog = mongoose.model('Blog', BlogSchema);
const ContactForm = mongoose.model('ContactForm', ContactFormSchema);
const Heading = mongoose.model('Heading', HeadingSchema);

module.exports = { Slider, Project, Client, ContactHR, Blog, ContactForm, Heading };
