const ensureAuth = (req, res, next) => {
    //passport attches isAuthenticated function 
  if (req.isAuthenticated()) {
    res.locals.user = req.user;
    return next();
  }
  res.redirect("/");
};

const ensureGuest = (req, res, next) => {
  if (req.isAuthenticated()) {
    return res.redirect("/dashboard");
  }
  next();
};

module.exports = {
  ensureAuth,
  ensureGuest,
};


