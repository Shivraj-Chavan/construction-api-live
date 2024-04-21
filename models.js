const mongoose = require('mongoose');

const SliderSchema = new mongoose.Schema({
    heading: String,
    description: String,
    url: String,
});

const ProjectSchema = new mongoose.Schema({
    heading: String,
    description: String,
    url: String,
});

const ClientSchema = new mongoose.Schema({
    heading: String,
    description: String,
    url: String,
});

const ContactHRSchema = new mongoose.Schema({
    heading: String,
    description: String,
    url: String,
});

const BlogSchema = new mongoose.Schema({
    heading: String,
    description: String,
    url: String,
    title: String,
    keywords: String,
});

const ContactFormSchema = new mongoose.Schema({
    heading: String,
    description: String,
});

const HeadingSchema = new mongoose.Schema({
    heading: String,
});

const Slider = mongoose.model("Slider", SliderSchema);
const Project = mongoose.model("Project", ProjectSchema);
const Client = mongoose.model("Client", ClientSchema);
const ContactHR = mongoose.model("ContactHR", ContactHRSchema);
const Blog = mongoose.model("Blog", BlogSchema);
const ContactForm = mongoose.model("ContactForm", ContactFormSchema);
const Heading = mongoose.model("Heading", HeadingSchema);

module.exports = { Slider, Project, Client, ContactHR, Blog, ContactForm, Heading };
