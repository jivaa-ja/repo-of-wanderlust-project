const mongoose  = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
 title : {
    type :String,
    required: true,
 },
 description : String,
 image : {
   filename : String,
   url:String,
   // default : "https://www.istockphoto.com/essential/photo/freedom-chains-that-transform-into-birds-charge-concept-gm1322104312-408167035?utm_campaign=srp_photos_top&utm_content=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Ffree-images&utm_medium=affiliate&utm_source=unsplash&utm_term=free+images%3A%3A%3A",

   
   // set: (v)  => 
   // v === ""
   // ? "https://www.istockphoto.com/essential/photo/freedom-chains-that-transform-into-birds-charge-concept-gm1322104312-408167035?utm_campaign=srp_photos_top&utm_content=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Ffree-images&utm_medium=affiliate&utm_source=unsplash&utm_term=free+images%3A%3A%3A"
   // : v,

},
 price : Number,
 country : String,
 location : String,
});

const Listing = mongoose.model ("Listing", listingSchema);
 module.exports = Listing;