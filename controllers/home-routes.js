const router = require('express').Router();

// Handlebar homepage 
router.get('/', (req, res) => {
      const data = { 
        id: req.session.id,
        loggedIn: req.session.loggedIn,
        username: req.session.username, 
        display_name: req.session.display_name,
      }
      console.log(data)
      res.render("homepage", data)
    });
  

module.exports = router;

