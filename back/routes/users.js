const express = require('express')
const router = express.Router()
const userController = require('../controllers/user')
const auth = require('../middleware/auth')

router.get('/:userId', userController.findAnUser)
router.get('/', userController.findAll)
router.delete('/:userId', auth.isAuth, userController.deleteUser)
router.put('/:userId', auth.isAuth, userController.editUser)
router.post('/favorite/:userId', userController.addFavorite)
router.get('/favorite/:userId', userController.getFavorite)










/* router.get('mispropiedades/:userId', (req, res) => {
  Users.findOne({ _id: req.params.userId }, function (err, user) {
    Propiedades.populate(user, { path: "user" }, function (err, propiedades) {
      console.log(propiedades)
      res.status(200).send(propiedades)
    });
  }) */
//asignar propiedades a users

/* 
// Route for creating a new Review and updating Product "review" field with it
app.post("/product/:id", function(req, res) {
  // Create a new note and pass the req.body to the entry
  db.Review.create(req.body)
    .then(function(dbReview) {
      // If a Review was created successfully, find one Product with an `_id` equal to `req.params.id`. Update the Product to be associated with the new Review
      // { new: true } tells the query that we want it to return the updated Product -- it returns the original by default
      // Since our mongoose query returns a promise, we can chain another `.then` which receives the result of the query
      return db.Product.findOneAndUpdate({ _id: req.params.id }, {$push: {reviews: dbReview._id}}, { new: true });
    })
    .then(function(dbProduct) {
      // If we were able to successfully update a Product, send it back to the client
      res.json(dbProduct);
    })
    .catch(function(err) {
      // If an error occurred, send it to the client
      res.json(err);
    });
});
Lastly, here’s our route to create get a single Product, the related Review including all the Review fields. Here we use the populate() function to populate the review field of the Product with all the Review fields.
 
// Route for retrieving a Product by id and populating it's Review.
app.get("/products/:id", function(req, res) {
  // Using the id passed in the id parameter, prepare a query that finds the matching one in our db...
  db.Product.findOne({ _id: req.params.id })
    // ..and populate all of the notes associated with it
    .populate("reviews")
    .then(function(dbProduct) {
      // If we were able to successfully find an Product with the given id, send it back to the client
      res.json(dbProduct);
    })
    .catch(function(err) {
      // If an error occurred, send it to the client
      res.json(err);
    });
});*/


module.exports = router