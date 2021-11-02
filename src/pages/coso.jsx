import React from 'react';


function login (email, password, callback) {
  var user = getUserFromDB(email);
  var profile = {
    user_id: 'MyConnection1|' + user.id,
    email: user.email,
    [...]
  };
  callback(null, profile);
}