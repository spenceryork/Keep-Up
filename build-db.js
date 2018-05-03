"use strict";

let models = require('./server/models');

models.sequelize.sync({force: true})
.then( () => {
    return models.User.create({
        first_name: "John",
        last_name: "Wayne",
        username: "J",
        email: "j@j.com",
        password: "$2a$08$Mt/H/Edy45mVzrKPWvf29.zD.tACz.ZqqVbBkfcKhjZpqRTlUfGSe"
    })
})
.then(()=>{
    return models.Occasion.create()
  })
.then( () => {
    process.exit();
})