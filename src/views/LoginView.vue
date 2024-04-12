<script setup>
import axios from "axios";
</script>
<template>
  <div class="row col-12" style="height: 100vh">
    <div
      class="col-6 d-flex justify-content-center"
      style="align-items: center"
    >
      <from
        @submit.prevent="LoginData"
        action="/login"
        method="post"
        class="form-group"
      >
        <div class="mb-3 bg p-5 rounded">
          <h2 class="text-center">Sign in your account</h2>
          <label
            for="exampleFormControlInput1"
            class="form-label mt-4 fw-semibold"
            >Email address</label
          >
          <input
            type="email"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="Gmail"
            v-model="login.email"
          />

          <!-- <span v-if="emailError" style="color: red; height: 10px">{{
            emailError
          }}</span> -->

          <label
            for="exampleFormControlInput1"
            class="form-label mt-3 fw-semibold"
            >Password</label
          >
          <!-- <span v-if="passwordError" style="color: red">{{
            passwordError
          }}</span> -->
          <input
            type="password"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="Password"
            v-model="login.password"
          />
          <span v-if="loginError" style="color: red">{{ loginError }}</span>
          <button
            type="submit"
            class="form-control btn-color mt-3 text-white"
            id="exampleFormControlInput1"
            placeholder="Password"
            @click="LoginData()"
          >
            Sign in
          </button>
        </div>
      </from>
    </div>
    <div class="col-6">
      <div class="background-image"></div>
    </div>
  </div>
</template>

<style scoped>
@media screen and (max-width: 1320px) {
  body {
    background-color: blue;
  }
}

.background-image {
  background-image: url("../assets/backgroundlogin.jpg");
  height: calc(111vh - 80px);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
}
.container {
  width: 24%;
  margin-top: 150px;
}
.bg {
  background-color: #fff;
  width: 400px;
}
.btn-color {
  background-color: #000;
  border: none;
}
</style>
<script >
import axios from "axios";
// non
import { Collection } from "mongoose";
// import { response } from "express";
export default {
  data() {
    return {
      results: {},
      login: {
        password: "",
        email: "",
      },
      loginError: "",
    };
  },
  created() {},
  mounted() {
    console.log("mounted() called..........");
  },
  methods: {
    LoginData() {
      axios
        .post("http://localhost:8081/v1/login", this.login)
        .then((response) => {
          console.log(response);
          const data = response.data;
          if (data.EC === 1) {
            // Display login error message
            this.loginError = data.EM;
            // Clear any previous password error
            this.passwordError = "";
            // Clear previous successful login message
            this.successMessage = ""; // Đảm bảo không có thông báo lỗi mật khẩu
          } else {
            this.loginError = "";
            // Xử lý thành công
            localStorage.setItem("jwtToken", data.DT.access_token);
            document.cookie = `jwt=${data.DT.access_token}`;
            const userRoles = data.DT.data.groupWithRole.group.group_name;
            console.log(userRoles);
            if (userRoles.includes("Maketing Manager")) {
              alert("Login Successfully");
              // Chuyển hướng người dùng đến trang quản trị viên nếu có quyền admin
              this.$router.push({ name: "marketinghomepage" });
              // await Collection.updateOne({_id:id}, {$set:{access_token: access_token}})
            } else if (userRoles.includes("Admin")) {
              console.log("admin page");
              alert("Login Successfully");
              // Chuyển hướng người dùng đến trang quản lý nếu có quyền manager
              this.$router.push({ name: "admin" });
            } else if (userRoles.includes("Manager Coordinator")) {
              alert("Login Successfully");
              // Chuyển hướng người dùng đến trang quản lý nếu có quyền manager
              this.$router.push({ name: "coordinator" });
            } else if (userRoles.includes("Student")) {
              alert("Login Successfully");
              // Chuyển hướng người dùng đến trang quản lý nếu có quyền manager
              this.$router.push({ name: "studentHomepage" });
            } else if (userRoles.includes("Guest")) {
              alert("Login Successfully");
              // Chuyển hướng người dùng đến trang quản lý nếu có quyền manager
              this.$router.push({ name: "guesthomepage" });
            } else {
              // Nếu không có quyền truy cập, hiển thị thông báo và không chuyển hướng
              alert("You do not have permission to access this page");
            }
          }
        })
        .catch((error) => {
          console.error("Error:", error);
          // Xử lý lỗi nếu có
        });
    },
  },
};
</script>