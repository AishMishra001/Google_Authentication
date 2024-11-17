const passport = require("passport") ; 

passport.serializeUser(function(user , done ){
    done(null , user )
})

passport.deserializeUser(function(user , done){
  done(null , user )
})

module.exports = passport ; 


// serializeUser function:
// Purpose: It defines how the user's data should be stored in the session. Passport will invoke this function when a user is authenticated.
// Behavior: The function's job is to determine what user data should be stored in the session. Typically, it involves saving a unique identifier of the user, such as their user.id.


// deserializeUser function:
// Purpose: This function defines how to retrieve user information from the data stored in the session. Passport will call this function every time a request is made by an authenticated user to attach the user's data to the request object.
// Behavior: It typically involves fetching the full user object from the database using the unique identifier stored in the session (e.g., user.id).

