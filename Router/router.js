const express = require('express');
const passport = require('passport');
const router = express.Router();

// Google OAuth authentication route
router.get('/auth/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);

// Callback route for Google to redirect to
router.get('/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/' }),
  (req, res) => {
    // Successful authentication, redirect home.
    res.redirect('/dashboard');
  }
);

module.exports = router;
