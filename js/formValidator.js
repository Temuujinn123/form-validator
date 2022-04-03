const btn = document.querySelector("#signUpBtn");
const firstname = document.querySelector("#firstname");
const lastname = document.querySelector("#lastname");
const number = document.querySelector("#number");
const password = document.querySelector("#password");
const rePassword = document.querySelector("#rePassword");
const email = document.querySelector("#email");
const loginEmail = document.querySelector("#loginEmail");
const loginPassword = document.querySelector("#loginPassword");
const loginBtn = document.querySelector("#loginBtn");
const logoutBtn = document.querySelector("#logout");

let users;
init();
class User {
  constructor(firstname, lastname, number, password, email) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.number = number;
    this.password = password;
    this.email = email;
    this.profileImg =
      "https://static.wikia.nocookie.net/villains/images/4/4c/Eren_meets_Yeagerists.png/revision/latest/scale-to-width-down/809?cb=20210302172340";
    this.id = Math.random().toString().split(".")[1];
  }
}

function loginHandler() {
  if (
    users.find((el) => el.email === loginEmail.value) &&
    users.find((el) => el.password === loginPassword.value)
  ) {
    alert("You loged in...");
    localStorage.setItem(
      "loggedUser",
      JSON.stringify(users.find((el) => el.email === loginEmail.value))
    );
    location.pathname = "/1.22/profile.html";
  } else {
    alert("Please check your email or password...");
  }
}

function logout() {
  localStorage.removeItem("loggedUser");
}

function init() {
  if (localStorage.users) {
    users = JSON.parse(localStorage.users);
  } else {
    users = [];
  }
}

btn?.addEventListener("click", function (event) {
  event.preventDefault();
  if (
    firstname.value.trim() !== "" &&
    lastname.value.trim() !== "" &&
    number.value.trim() !== "" &&
    password.value.trim() !== "" &&
    email.value.trim() !== ""
  ) {
    const user = new User(
      firstname.value,
      lastname.value,
      number.value,
      password.value,
      email.value
      // (profileImg =
      //   "https://i.pinimg.com/564x/7f/23/68/7f2368c7b394249497cc8dccad986105.jpg")
    );
    users.push(user);
    clearForm();
    localStorage.setItem("users", JSON.stringify(users));
    alert("burtgegdlee!");
  } else {
    alert("invalid input");
  }
});

function clearForm() {
  firstname.value = "";
  lastname.value = "";
  number.value = "";
  password.value = "";
  rePassword.value = "";
  email.value = "";
}

// Profile page [s]

const module = document.querySelector("#module");
const articles3 = document.querySelector("#articles-pro");
const articleTitle = document.querySelector("#module-input");
const articleContent = document.querySelector("#module-text");

let articlesArr;

init1();

function init1() {
  if (localStorage.Articles) {
    articlesArr = JSON.parse(localStorage.Articles);
  } else {
    articlesArr = [];
  }
}

function closeModule() {
  module.style.visibility = "0";
  module.style.display = "none";
}

function openModule() {
  module.style.visibility = "1";
  module.style.display = "flex";
}

function resetModule() {
  articleTitle.value = "";
  articleContent.value = "";
  console.log(articleContent.value);
}

function createNewArticle() {
  const article = {
    title: articleTitle.value,
    content: articleContent.value,
    createrName: JSON.parse(localStorage.getItem("loggedUser")).firstname,
    createrId: JSON.parse(localStorage.getItem("loggedUser")).id,
    articleId: Math.random().toString().split(".")[1],
  };
  articlesArr.push(article);
  articles3.insertAdjacentHTML(
    "afterbegin",
    `
    <div class="px-16 py-4 my-2 bg-blue-200">
      <div class="w-full pb-2">
        <h1 class="text-2xl text-[#333]">Title: ${articleTitle.value}</h1>
      </div>
      <div class="w-full pb-2">
        <p class="text-md text-[#333] font-[500]">Content: ${
          articleContent.value
        }</p>
      </div>
      <div class="w-full">
        <h3 class="text-md text-red-700 font-[500]">Creater user name: ${
          JSON.parse(localStorage.getItem("loggedUser")).firstname
        }
        </h3>
        <h3 class="text-md text-red-700 font-[500]">Creater id: ${
          JSON.parse(localStorage.getItem("loggedUser")).id
        }
        </h3>
      </div>
      </div>
      `
  );
  localStorage.setItem("Articles", JSON.stringify(articlesArr));
  closeModule();
  resetModule();
}

function goOtherUserProfile(createrId) {
  console.log(createrId);
  const users = JSON.parse(localStorage.users);
  const p = users.find((el) => +el.id === createrId);
  console.log(p);
  localStorage.setItem("otherUser", JSON.stringify(p));
  location.pathname = "/1.22/form-validator/ohterusersprofile.html";
  // prepareOtherPoeplePage(p);
}

// function updateArticleList(list) {
//   list?.forEach((el) => {});
// }

// Profile page [e]

// menu = document.querySelector("#menu");
// firstName = document.querySelector("#first-name");
// lastName = document.querySelector("#lastName");
// email = document.querySelector("#email");
// password = document.querySelector("#password");
// rePassword = document.querySelector("#rePassword");
// number = document.querySelector("#number");
// signUpBtn = document.querySelector("#signUpBtn");
// login = document.querySelectorAll("#login");
// loginEmail = document.querySelector("#loginEmail");
// loginPassword = document.querySelector("#loginPassword");
// logedIn = document.querySelectorAll("#home");
// loginBtn = document.querySelector("#loginBtn");

// class User {
//   constructor(firstUserName, lastUserName, email, passsword, number) {
//     this.firstName = firstUserName;
//     this.lastName = lastUserName;
//     this.email = email;
//     this.passsword = passsword;
//     this.number = number;
//     this.id = Math.random().toString().split(".")[1];
//   }
// }
// let users = [];

// loader = (e) => {
//   if (e === true) {
//     btn.style.cursor = "wait";
//     document.body.style.cursor = "wait";
//   } else {
//     btn.style.cursor = "";
//     document.body.style.cursor = "";
//   }
// };

// disabled = (e) => {
//   if (e === true) {
//     btn.disabled = true;
//     btn.style.backgroundColor = "#c7cffc";
//   } else {
//     btn.disabled = false;
//     btn.style.backgroundColor = "#1877f2";
//   }
// };

// check = () => {
//   disabled(true);
//   loader(true);
//   checkFirstName();
//   checkLastName();
//   checkEmail();
//   checkPassword();
//   checkRePassword();
//   checkNumber();
//   if (
//     checkFirstName() === true &&
//     checkLastName() === true &&
//     checkEmail() === true &&
//     checkPassword() === true &&
//     checkRePassword() === true &&
//     checkNumber() === true
//   ) {
//     const user = new User(
//       firstName.value,
//       lastname.value,
//       number.value,
//       password.value,
//       email.value
//     );
//     users.push(user);
//     localStorage.setItem("users", JSON.stringify(users));
//     alert("burtgegdlee!");
//     console.log(
//       JSON.parse(
//         localStorage.getItem((el) => {
//           el === 0;
//         })
//       )
//     );
//     console.log(localStorage);
//   }
//   loader(false);
//   disabled(false);
// };

// logout = () => {
//   localStorage.removeItem("user");
// };

// loginHandler = () => {
//   if (loginEmail.value === "") {
//     loginEmail.style.borderColor = "red";
//   } else {
//     loginEmail.style.borderColor = "#dddfe2";
//   }
//   if (loginPassword.value === "") {
//     loginPassword.style.borderColor = "red";
//   } else {
//     loginPassword.style.borderColor = "#dddfe2";
//   }
//   for (let i = 1; i <= localStorage.length; i++) {
//     if (
//       loginEmail.value === JSON.parse(localStorage.getItem(`user:`))[0].email &&
//       loginPassword.value ===
//         JSON.parse(localStorage.getItem(`user:`))[0].passsword
//     ) {
//       localStorage.setItem("loggedUser", JSON.stringify(users));
//       alert("You succesfully loged in.");
//       // window.location.replace("http://127.0.0.1:5500/home.html");
//     }
//   }
//   alert("Please check email or password and try again.");
// };

// checkFirstName = () => {
//   if (!/[a-z]/.test(firstUserName.value)) {
//     firstUserName.style.borderColor = "red";
//     return false;
//   } else {
//     firstUserName.style.borderColor = "#dddfe2";
//     return true;
//   }
// };

// checkLastName = () => {
//   if (!/[a-z]/.test(lastUserName.value)) {
//     lastUserName.style.borderColor = "red";
//     return false;
//   } else {
//     lastUserName.style.borderColor = "#dddfe2";
//     return true;
//   }
// };

// checkEmail = () => {
//   const enteredEmail = email.value;
//   if (
//     /@/.test(enteredEmail) &&
//     /\./.test(enteredEmail) &&
//     /[a-z]/.test(enteredEmail)
//   ) {
//     email.style.borderColor = "#dddfe2";
//     return true;
//   } else {
//     email.style.borderColor = "red";
//     return false;
//   }
// };

openMenu = () => {
  menu.style.opacity = "1";
  menu.style.right = "0%";
};

closeMenu = () => {
  menu.style.opacity = "0";
  menu.style.right = "-100%";
};

// checkPassword = () => {
//   const enteredPassword = password.value;
//   if (
//     /.{12,}/.test(enteredPassword) &&
//     /[0-9]/.test(enteredPassword) &&
//     /[a-z]/.test(enteredPassword) &&
//     /[A-Z]/.test(enteredPassword)
//   ) {
//     password.style.borderColor = "#dddfe2";
//     return true;
//   } else {
//     password.style.borderColor = "red";
//     return false;
//   }
// };

// checkRePassword = () => {
//   const enteredPassword = password.value;
//   const enteredRePassword = rePassword.value;

//   if (enteredPassword === enteredRePassword) {
//     rePassword.style.borderColor = "#dddfe2";
//     return true;
//   } else {
//     rePassword.style.borderColor = "red";
//     return false;
//   }
// };

// checkNumber = () => {
//   const enteredNumber = number.value;

//   if (/.{8}/.test(enteredNumber)) {
//     number.style.borderColor = "#dddfe2";
//     return true;
//   } else {
//     number.style.borderColor = "red";
//     return false;
//   }
// };

// class User {

//   burger = document.querySelector(".burger");
//   close = document.querySelector(".close-icon");

//   constructor() {
//     this.firstName;
//     this.lastName;
//     this.password;
//     this.email;
//     this.number;
//     this.id = Math.random().toString().split(".")[1];

//     this.listenEvents();
//   }

//   users = [];

//   init() {
//     if (localStorage.users) {
//       users = JSON.parse(localStorage.users);
//     } else {
//       users = [];
//     }
//   }

//   check() {
//     if (
//       this.firstName.value.trim() !== "" &&
//       this.lastName.value.trim() !== "" &&
//       this.number.value.trim() !== "" &&
//       this.password.value.trim() !== "" &&
//       this.email.value.trim() !== ""
//     ) {
//       const users = {
//         firstName: this.firstName.value,
//         lastName: this.lastName.value,
//         number: this.number.value,
//         password: this.password.value,
//         email: this.email.value,
//         id: this.id,
//       };
//       this.users.push(users);
//       localStorage.setItem("users", JSON.stringify(users));
//       alert("burtgegdlee!");
//       this.clearForm();
//     } else {
//       alert("invalid input");
//     }
//   }

//   loginHandler() {
//     console.log(JSON.parse(localStorage.getItem("users")));
//   }

//   clearForm() {
//     this.firstName.value = "";
//     this.lastName.value = "";
//     this.number.value = "";
//     this.password.value = "";
//     this.rePassword.value = "";
//     this.email.value = "";
//   }
//   listenEvents() {
//     this.signUpBtn.addEventListener("click", this.check.bind(this));
//     this.loginBtn.addEventListener("click", this.loginHandler.bind(this));
//     this.burger.querySelector("click", this.openMenu.bind(this));
//     this.close.querySelector("click", this.closeMenu.bind(this));
//   }
// }

// const user = new User();
