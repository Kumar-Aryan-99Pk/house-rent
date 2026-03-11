const Property = require("../models/Property");

const addProperty = async (req, res) => {
  try {

    const { title, description, location, price, type } = req.body;

    const property = await Property.create({
      title,
      description,
      location,
      price,
      type,
      owner: req.user.id
    });

    res.status(201).json({
      message: "Property added successfully",
      property
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getProperties = async (req, res) => {
  try {

    const properties = await Property.find().populate("owner", "name email");

    res.json(properties);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const searchProperties = async (req, res) => {
  try {

    const { location, maxPrice } = req.query;

    let filter = {};

    if (location) {
      filter.location = location;
    }

    if (maxPrice) {
      filter.price = { $lte: maxPrice };
    }

    const properties = await Property.find(filter);

    res.json(properties);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateProperty = async (req, res) => {
  try {

    const property = await Property.findById(req.params.id);

    if (!property) {
      return res.status(404).json({ message: "Property not found" });
    }

    const updated = await Property.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json(updated);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteProperty = async (req, res) => {
  try {

    const property = await Property.findById(req.params.id);

    if (!property) {
      return res.status(404).json({ message: "Property not found" });
    }

    await property.deleteOne();

    res.json({ message: "Property deleted successfully" });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { addProperty,getProperties, searchProperties, deleteProperty,updateProperty};