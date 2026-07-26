const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
  title: {
    type: String,
    required: true,
  },

  description: String,

  image: {
    filename: {
      type: String,
      default: "listingimage",
    },

    url: {
      type: String,
      default:
        "https://static.vecteezy.com/system/resources/previews/002/008/271/large_2x/beautiful-tropical-beach-at-sunrise-free-photo.jpg",
      set: (v) =>
        v === ""
          ? "https://static.vecteezy.com/system/resources/previews/002/008/271/large_2x/beautiful-tropical-beach-at-sunrise-free-photo.jpg"
          : v,
    },
  },

  price: Number,
  location: String,
  country: String,
});

const Listing = mongoose.model("Listing", listingSchema);

module.exports = Listing;
