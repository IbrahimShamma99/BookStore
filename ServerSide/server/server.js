const app = require("./intialize");
const mongoose = require("mongoose");
const LocalDB = require('../config/config').LocalDB;
var isProduction = process.env.NODE_ENV === 'production';

//SECTION Import schemas
const User = require('../User/schema');

//SECTION ADMINBRO
const AdminBro = require('admin-bro')
const AdminBroExpressjs = require('admin-bro-expressjs')
const AdminBroMongoose = require('admin-bro-mongoose')
AdminBro.registerAdapter(AdminBroMongoose)

//SECTION Importing components
var userComponent = require("../User/index");

//SECTION Using API Components
app.use(userComponent);

var DB = null;
//SECTION Connecting to MongoDB
if (isProduction) {
    mongoose.connect(process.env.MONGODB_URI, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useCreateIndex: true,
    });
} else {
    DB = mongoose.connect(LocalDB, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useCreateIndex: true,
    });
    mongoose.set('debug', true);
}

const adminBro = new AdminBro({
    resources: [
        {resource: User}
        ],
      database:DB,
      branding: {
        companyName: 'Learn-Web-Community',
      },
          rootPath: '/admin',
  })
const router = AdminBroExpressjs.buildRouter(adminBro)
app.use(adminBro.options.rootPath, router)

//NOTE exporting app to avoid singleton violation
module.exports = app;