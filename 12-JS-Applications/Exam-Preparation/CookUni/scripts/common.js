export function getSessionInfo(ctx) {
  ctx.userId = sessionStorage.getItem("userId");
  ctx.loggedIn = sessionStorage.getItem("authtoken") !== null;
  ctx.username = sessionStorage.getItem("username");
  ctx.fullName = sessionStorage.getItem("fullName");
}

export const partials = {
  header: "./templates/common/header.hbs",
  footer: "./templates/common/footer.hbs"
};

export const categoryImagesMap = {
  "Vegetables and legumes/beans": "https://cdn.pixabay.com/photo/2017/10/09/19/29/eat-2834549__340.jpg",
  "Fruits": "https://cdn.pixabay.com/photo/2017/06/02/18/24/fruit-2367029__340.jpg",
  "Grain Food": "https://cdn.pixabay.com/photo/2014/12/11/02/55/corn-syrup-563796__340.jpg",
  "Milk, cheese, eggs and alternatives": "https://image.shutterstock.com/image-photo/assorted-dairy-products-milk-yogurt-260nw-530162824.jpg",
  "Lean meats and poultry, fish and alternatives": "https://t3.ftcdn.net/jpg/01/18/84/52/240_F_118845283_n9uWnb81tg8cG7Rf9y3McWT1DT1ZKTDx.jpg"
}
