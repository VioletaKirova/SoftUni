import { getHome } from "./controllers/homeController.js";
import { getAbout } from "./controllers/aboutController.js";
import { getLogin, postLogin, getRegister, postRegister, getLogout } from "./controllers/userController.js";
import { getCatalog } from "./controllers/catalogController.js";
import { getDetails, getCreate, postCreate, putJoin, getEdit, postEdit, putLeave } from "./controllers/teamController.js";

const app = Sammy("#main", function() {
  this.use("Handlebars", "hbs");

  this.get("#/", getHome);

  this.get("#/home", getHome);

  this.get("#/about", getAbout);

  this.get("#/register", getRegister);
  this.post("#/register", postRegister);

  this.get("#/login", getLogin);
  this.post("#/login", postLogin);

  this.get("#/logout", getLogout);

  this.get("#/catalog", getCatalog);

  this.get("#/catalog/:id", getDetails);

  this.get("#/create", getCreate);
  this.post("#/create", postCreate);

  this.get("#/edit/:teamId", getEdit);
  this.post("#/edit/:teamId", postEdit);
  
  this.get("#/join/:teamId", putJoin);
  this.get("#/leave/:teamId", putLeave);
});

app.run("#/");
