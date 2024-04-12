<template>
  <div class="card" style="width: 79rem">
    <div class="card-body">
      <h5 class="card-title">List Account</h5>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">User Name</th>
            <th scope="col">Email</th>
            <th scope="col">Role</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete Account</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(item, index) in listuser"
            :value="item._id"
            :key="index"
            placeholder="Password"
          >
            <th scope="row">{{ item.username }}</th>
            <td>{{ item.email }}</td>
            <td>{{ item.role }}</td>
            <td>
              <button
                type="button"
                class="btn btn-info"
                v-on:click="handleClick(item._id)"
              >
                Edit name
              </button>
            </td>
            <td>
              <button
                type="button"
                class="btn btn-danger"
                @click="openDeleteModal(item._id)"
              >
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div v-if="isDeleteModalOpen" class="modal">
      <div class="modal-content">
        <h4>Confirm Password</h4>
        <p>
          Please enter the user's password to confirm deletion of the user
          account:
        </p>
        <p v-if="error" class="error-message">{{ error }}</p>
        <input
          name="password"
          type="password"
          v-model="enteredPassword"
          class="form-control"
          placeholder="Enter user's password"
        />
        <button class="btn btn-danger" @click="deleteUserWithPassword">
          Delete
        </button>
        <button class="btn btn-secondary" @click="cancelDelete">Cancel</button>
      </div>
    </div>
  </div>
</template>
  
  <script>
import router from "../../router/index";
import axios from "axios";
export default {
  data() {
    return {
      results: {},
      user: {
        username: "",
        email: "",
        role: "",
      },
      listuser: [],
      isDeleteModalOpen: false,
      isInitialOpen: true,
      enteredPassword: "",
      userIdToDelete: "",
      enteredPassword: "",
      error: "",
    };
  },
  created() {},
  mounted() {
    console.log("mounted() called..........");
    this.getlistrole();
    this.userId = this.$route.params._id;
  },
  methods: {
    // openEdit() {
    //   console.log("aaaaa");
    //   router.replace("/edit");
    // },
    handleClick(name) {
      router.push({
        name: "adminuseredit",
        params: { id: name },
      });
    },

    getlistrole() {
      axios
        .get("http://localhost:8081/v1/user/read", this.user)
        .then((data) => {
          console.log(data.data.DT);
          this.listuser = data.data.DT;
        });
    },
    cancelDelete() {
      this.isInitialOpen = true;
      this.isDeleteModalOpen = false;
      this.error = "";
      this.enteredPassword = "";
    },
    openDeleteModal(id) {
      this.userIdToDelete = id;
      this.isDeleteModalOpen = true;
    },
    deleteUserWithPassword() {
      if (!this.userIdToDelete || !this.enteredPassword) {
        this.error = "Please enter user password!";
        return;
      }
      axios
        .delete("http://localhost:8081/v1/user/delete", {
          data: {
            user_id: this.userIdToDelete,
            password: this.enteredPassword,
          },
        })
        .then((response) => {
          console.log(response);
          console.log("user deleted successfully");
          this.getlistrole();
          this.isDeleteModalOpen = false;
          this.enteredPassword = "";
          alert("User deleted successfully");
        })
        .catch((error) => {
          console.error("Error deleting item:", error);
          if (error.response && error.response.data && error.response.data.EM) {
            this.error = error.response.data.EM;
          } else {
            this.error = "Failed to delete user.";
          }
        });
    },

    // saveData() {
    //   if (this.student.password != this.student.confirmPassword) {
    //     alert("chưa trùng mk");
    //     return;
    //   }
    //   axios
    //     .post("http://localhost:8081/v1/register", this.student)
    //     .then(({ data }) => {
    //       alert("aaaa Em nhận được rồi a zai");
    //       this.$router.push("/login");
    //     });
    // },
  },
};
</script>
  
  <style scoped>
.error-message {
  color: red;
}

.modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.7);
}

.modal-content {
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  max-width: 500px;
  width: 90%;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  animation-name: modal-open;
  animation-duration: 0.5s;
  color: black;
  /* Đặt màu chữ thành màu đen */
}

.modal-content > * {
  margin-bottom: 5px;
}

.modal-content button {
  margin-top: 1px;
}

@keyframes modal-open {
  from {
    opacity: 0;
    transform: scale(0.7);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
}
</style>