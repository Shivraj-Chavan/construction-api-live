const express = require('express');
const router = express.Router();
const { Slider, Project, Client, ContactHR, Blog, ContactForm, Heading } = require('./models');


// Routes for Slider model
router.get('/sliders', async (req, res) => {
    try {
        const sliders = await Slider.find();
        res.json(sliders);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.post('/sliders', async (req, res) => {
    try {
        const { heading, description, url } = req.body;
        if (!heading || !description || !url) {
            return res.status(400).json({ message: "Please provide heading, description, and URL for the slider." });
        }
        const slider = new Slider({ heading, description, url });
        const newSlider = await slider.save();
        res.status(201).json(newSlider);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

router.patch('/sliders/:id', async (req, res) => {
    try {
        const updatedSlider = await Slider.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (updatedSlider) {
            res.json(updatedSlider);
        } else {
            res.status(404).json({ message: "Slider not found" });
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

router.delete('/sliders/:id', async (req, res) => {
    try {
        const deletedSlider = await Slider.findByIdAndDelete(req.params.id);
        if (deletedSlider) {
            res.json({ message: "Slider deleted successfully" });
        } else {
            res.status(404).json({ message: "Slider not found" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Routes for Project model
router.get('/projects', async (req, res) => {
    try {
        const projects = await Project.find();
        res.json(projects);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.post('/projects', async (req, res) => {
    try {
        const {category, heading, description, url } = req.body;
        if (!category || !heading || !description || !url) {
            return res.status(400).json({ message: "Please provide category, heading, description, and URL for the project." });
        }
        const project = new Project({ category,heading, description, url });
        const newProject = await project.save();
        res.status(201).json(newProject);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

router.patch('/projects/:id', async (req, res) => {
    try {
        const updatedProject = await Project.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (updatedProject) {
            res.json(updatedProject);
        } else {
            res.status(404).json({ message: "Project not found" });
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

router.delete('/projects/:id', async (req, res) => {
    try {
        const deletedProject = await Project.findByIdAndDelete(req.params.id);
        if (deletedProject) {
            res.json({ message: "Project deleted successfully" });
        } else {
            res.status(404).json({ message: "Project not found" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Routes for Client model
router.get('/clients', async (req, res) => {
    try {
        const clients = await Client.find();
        res.json(clients);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.post('/clients', async (req, res) => {
    try {
        const { heading, description, name } = req.body;
        if (!heading || !description || !name) {
            return res.status(400).json({ message: "Please provide heading, description, and name for the client." });
        }
        const client = new Client({ heading, description, name });
        const newClient = await client.save();
        res.status(201).json(newClient);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

router.patch('/clients/:id', async (req, res) => {
    try {
        const updatedClient = await Client.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (updatedClient) {
            res.json(updatedClient);
        } else {
            res.status(404).json({ message: "Client not found" });
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

router.delete('/clients/:id', async (req, res) => {
    try {
        const deletedClient = await Client.findByIdAndDelete(req.params.id);
        if (deletedClient) {
            res.json({ message: "Client deleted successfully" });
        } else {
            res.status(404).json({ message: "Client not found" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Routes for ContactHR model
router.get('/contact-hrs', async (req, res) => {
    try {
        const contactHRs = await ContactHR.find();
        res.json(contactHRs);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.post('/contact-hrs', async (req, res) => {
    try {
        const { heading, name, mail } = req.body;
        if (!heading || !name || !mail) {
            return res.status(400).json({ message: "Please provide heading, name, and mail for the contact HR." });
        }
        const contactHR = new ContactHR({ heading, name, mail });
        const newContactHR = await contactHR.save();
        res.status(201).json(newContactHR);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

router.patch('/contact-hrs/:id', async (req, res) => {
    try {
        const updatedContactHR = await ContactHR.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (updatedContactHR) {
            res.json(updatedContactHR);
        } else {
            res.status(404).json({ message: "Contact HR not found" });
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

router.delete('/contact-hrs/:id', async (req, res) => {
    try {
        const deletedContactHR = await ContactHR.findByIdAndDelete(req.params.id);
        if (deletedContactHR) {
            res.json({ message: "Contact HR deleted successfully" });
        } else {
            res.status(404).json({ message: "Contact HR not found" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});
// Routes for Blog model
router.get('/blogs', async (req, res) => {
    try {
        const blogs = await Blog.find();
        res.json(blogs);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.post('/blogs', async (req, res) => {
    try {
        const { heading, description, url, date, keywords, metaDescription } = req.body;
        if (!heading || !description || !url || !date || !keywords || !metaDescription) {
            return res.status(400).json({ message: "Please provide all required fields for the blog." });
        }
        const blog = new Blog({ heading, description, url, date, keywords, metaDescription });
        const newBlog = await blog.save();
        res.status(201).json(newBlog);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

router.patch('/blogs/:id', async (req, res) => {
    try {
        const updatedBlog = await Blog.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (updatedBlog) {
            res.json(updatedBlog);
        } else {
            res.status(404).json({ message: "Blog not found" });
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

router.delete('/blogs/:id', async (req, res) => {
    try {
        const deletedBlog = await Blog.findByIdAndDelete(req.params.id);
        if (deletedBlog) {
            res.json({ message: "Blog deleted successfully" });
        } else {
            res.status(404).json({ message: "Blog not found" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Routes for ContactForm model
router.get('/contact-forms', async (req, res) => {
    try {
        const contactForms = await ContactForm.find();
        res.json(contactForms);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.post('/contact-forms', async (req, res) => {
    try {
        const { name,email,phone,message } = req.body;
        if (!name || !email || !phone || message) {
            return res.status(400).json({ message: "Please provide name, email,phone and message for the contact form." });
        }
        const contactForm = new ContactForm({ name,email,phone, message });
        const newContactForm = await contactForm.save();
        res.status(201).json(newContactForm);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

router.patch('/contact-forms/:id', async (req, res) => {
    try {
        const updatedContactForm = await ContactForm.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (updatedContactForm) {
            res.json(updatedContactForm);
        } else {
            res.status(404).json({ message: "Contact form not found" });
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

router.delete('/contact-forms/:id', async (req, res) => {
    try {
        const deletedContactForm = await ContactForm.findByIdAndDelete(req.params.id);
        if (deletedContactForm) {
            res.json({ message: "Contact form deleted successfully" });
        } else {
            res.status(404).json({ message: "Contact form not found" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Routes for Heading model
router.get('/headings', async (req, res) => {
    try {
        const headings = await Heading.find();
        res.json(headings);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.post('/headings', async (req, res) => {
    try {
        const { heading } = req.body;
        if (!heading) {
            return res.status(400).json({ message: "Please provide a heading for the heading." });
        }
        const newHeading = new Heading({ heading });
        const savedHeading = await newHeading.save();
        res.status(201).json(savedHeading);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

router.patch('/headings/:id', async (req, res) => {
    try {
        const updatedHeading = await Heading.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (updatedHeading) {
            res.json(updatedHeading);
        } else {
            res.status(404).json({ message: "Heading not found" });
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

router.delete('/headings/:id', async (req, res) => {
    try {
        const deletedHeading = await Heading.findByIdAndDelete(req.params.id);
        if (deletedHeading) {
            res.json({ message: "Heading deleted successfully" });
        } else {
            res.status(404).json({ message: "Heading not found" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
