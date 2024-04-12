import "./assets/main.css";

import { createApp } from "vue";
import * as ElementPlusIconsVue from "@element-plus/icons-vue"; // add icon
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

import App from "./App.vue";
import router from "./router";

// const express = require('express');
// const cors = require('cors');

// const app = express();

// // Enable CORS for all origins
// app.use(cors());

// const PORT = process.env.PORT || 8081;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
// const express = require('express');
// const cors = require('cors');
// const app = express();


// app.use(cors({
//   origin: 'http://localhost:8081', // Địa chỉ của ứng dụng Vue.js
//   credentials: true // Cho phép sử dụng cookie trong yêu cầu
// }));

// Cấu hình các tuyến đường và middleware khác ở đây

// app.listen(8081, () => {
//   console.log('Server is running on port 8081');
// });



const app = createApp(App);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  //add thư viện icon
  app.component(key, component);
} // add icon



router.beforeEach((to, from, next) => {
  const logged =
    localStorage.getItem("jwtToken") &&
    localStorage.getItem("jwtToken") !== "null" &&
    localStorage.getItem("jwtToken") !== "undefined";
  // console.log(typeof(localStorage.getItem('jwtToken')), 'login');
  if (logged && to.path === "/login") {
    return next({ path: "/" });
  }
  if (!logged && !to.path.includes("/login")) {
    return next({ path: "/login" });
  }
  next();
});

router.beforeEach((to, from, next) => {
  const logged = localStorage.getItem("jwtToken") && localStorage.getItem("jwtToken") !== "null" && localStorage.getItem("jwtToken") !== "undefined";
  
  if (!logged && !to.path.includes("/login")) {
    // Người dùng chưa đăng nhập và đang cố gắng truy cập trang không phải trang đăng nhập
    next({ path: "/login" });
  } else if (logged && to.path === "/login") {
    // Người dùng đã đăng nhập và đang cố gắng truy cập trang đăng nhập
    next({ path: "/" });
  } else {
    // Các trường hợp khác, không cần xử lý
    next();
  }
});
// app.use(cors());
app.use(ElementPlus);
app.use(router);
app.mount("#app");
