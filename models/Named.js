///////////////////////////////
// DEPENDENCIES
////////////////////////////////
// mongoose defineds our Named schema and model instance
const mongoose = require("mongoose");

///////////////////////////////
// MODELS
////////////////////////////////
const NamedSchema = new mongoose.Schema(
  {
    name: String,
    image: String,
    title: String,
  },
  { timestamps: true }
);

const Named = mongoose.model("Named", NamedSchema);

module.exports = Named;
