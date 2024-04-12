<template>
  <div class="wrapper">
    <aside id="sidebar">
      <div class="h-100">
        <div class="fs-4 d-none d-sm-inline">
          <a
            class="d-flex text-decoration-none mt-1 align-items-center text-white"
            style="margin: 10px"
            >Side Menu</a
          >
        </div>
        <ul class="sidebar-nav nav nav-bills flex-column mt-4">
          <li class="sidebar-item">
            <a
              href="http://localhost:5173/guest/homepage"
              class="sidebar-link d-flex text-decoration-none align-items-center text-white"
              style="width: 20px"
            >
              <img
                src="../../assets/home.png"
                alt="Hình minh họa"
                style="height: 20px; margin: 10px"
              />
              <span class="text-large">Home Page</span>
            </a>
          </li>
          <li class="sidebar-item">
            <a
              href="http://localhost:5173/guest/GuestFaculies"
              class="sidebar-link d-flex text-decoration-none align-items-center text-white"
              style="width: 20px"
            >
              <img
                src="../../assets/listAccount.png"
                alt="Hình minh họa"
                style="height: 20px; margin: 10px"
              />
              <span class="text-large">Guest's Faculties</span>
            </a>
          </li>

          <li class="sidebar-item">
            <a
              href="#"
              class="sidebar-link d-flex text-decoration-none align-items-center text-white"
              style="width: 20px"
              @click="logout"
            >
              <img
                src="../../assets/logout.png"
                alt="Hình minh họa"
                style="height: 20px; margin: 10px"
              />
              <span class="text-large" style="display: block" @click="logout()"
                >Log out</span
              >
            </a>
          </li>
        </ul>
      </div>
    </aside>
    <div class="main">
      <slot></slot>
    </div>
  </div>
</template>
  
  <script>
import Cookies from "js-cookie";
export default {
  methods: {
    logout() {
      // Xóa token khỏi localStorage
      localStorage.removeItem("jwtToken");
      Cookies.remove("jwt");
      // Chuyển hướng người dùng đến trang đăng nhập
      this.$router.push({ path: "/login" });
    },
  },
};

// import axios from "axios";
// export default {
//   data() {
//     return {
//       upload: {
//         comment: "",
//         contribution_id: "",
//         days: "",
//         hours: "",
//         minutes: "",
//         seconds: "",
//       },
//       listremainingTime: [],
//     };
//   },
//   mounted() {
//     // nếu muốn sử dụng jQuery -> chỉ truy xuất Dom dduojc trong mounted -> có thể sử dụng jQuery
//     this.userId = this.$route.params.id;
//     this.getdatetime();
//   },
//   methods: {
//     //method là function tự tạo
//     logout() {
//       axios
//         .post("http://localhost:8081/v1/logout", {
//           withCredentials: true,
//         }) //formData
//         .then((data) => {
//           console.log(data);
//         })
//         .catch((error) => {
//           console.error("Error:", error);
//           // Xử lý lỗi ở đây
//         });
//     },
//   },
// };
</script>

  
  
  <style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
*,
::after,
::before {
  box-sizing: border-box;
}

body {
  font-family: "Poppins", sans-serif;
  font-size: 0.875rem;
  opacity: 1;
  overflow-y: scroll;
  margin: 0;
}
a {
  cursor: pointer;
  text-decoration: none;
  font-family: "Poppins" sans-serif;
}
li {
  list-style: none;
}
.wrapper {
  align-items: stretch;
  display: flex;
  width: 100%;
}
#sidebar {
  max-width: 400px;
  background-color: #61677a;
  transition: all 0.35 ease-in-out;
  width: 20%;
}
.main {
  display: flex;
  flex-direction: columns;
  min-height: 100vh;
  min-width: 0;
  overflow: hidden;
  transition: all 0.35 ease-in-out;
  width: 100%;
}

/* Sidebar Element Style */
.sidebar-logo {
  padding: 1.15rem;
}
.sidebar-logo a {
  color: #e9ecef;
  font-size: 1.15rem;
  font-weight: 600;
}
.sidebar-nav {
  flex-grow: 1;
  list-style: none;
  margin-bottom: 0;
  padding-left: 0;
  margin-left: 0;
}

.sidebar-header {
  color: #e9ecef;
  font-size: 0.75rem;
  padding: 1.5rem 1.5rem 0.375rem;
}

a.sidebar-link {
  padding: 0.625rem 1.625rem;
  color: #e9ecef;
  position: relative;
  display: block;
  font-size: 0.875rem;
}
.sidebar-link[data-bs-toggle="collapse"]::after {
  border: solid;
  border-width: 0 0.075rem 0.075rem 0;
  content: "";
  display: inline-block;
  padding: 2px;
  position: absolute;
  right: 1rem;
  top: 1.3rem;
  transform: rotate(-135deg);
  transition: all 0.2s ease-out;
}
.sidebar-link[data-bs-toggle="collapse"].collapsed::after {
  transform: rotate(45deg);
  transition: all 0.2s ease-out;
}
.text-large {
  font-size: 16px; /* Thay đổi kích thước văn bản tùy theo nhu cầu của bạn */
}
</style>