import e from "cors";
import Contact from "../models/Contact.js";
// Create a new contact message
export const createContact = async (req, res) => {
    try {        
        const { name, email, message } = req.body;
        const newContact = await Contact.create({ 
            name,
            email,
            message,
        });
        res.status(201).json({ success: true, 
        data: newContact, });
    } catch (error) {
        res.status(500).json({ success: false,
        message: error.message, });
    }
};