<template>
  <div class="card" style="width: 79rem">
    <div class="card-body">
      <h5 class="card-title">Edit User Name</h5>
      <from method="post" class="form-group" @submit="uploadFaculties">
        <div class="mb-3 bg p-5 rounded">
          <input
            type="email"
            class="form-control"
            id="exampleFormControlInput1"
            v-model="upload.username"
          />
          <span v-if="message" class="message" style="color: red">{{ message }}</span>
          <p class="card-text custom-right-align">
            <button
              type="button"
              class="btn btn-primary"
              @click="uploadFaculties()"
            >
              Create
            </button>
          </p>
        </div>
      </from>
    </div>
  </div>
</template>
            
  <script>
import axios from "axios";
export default {
  data() {
    return {
      upload: {
        username: "",
        user_id: "",
      },
      userId: "",
    };
  },
  mounted() {
    this.userId = this.$route.params.id;
    console.log(this.userId);
    this.uploadFaculties();
  },
  methods: {
    //method là function tự tạo
    uploadFaculties() {
      let formData = new FormData();
      formData.append("username", this.upload.username); // Sử dụng this.student.username thay vì this.upload.username
      formData.append("user_id", this.userId); /// Sử dụng this.student.username thay vì this.upload.username
      // console.log(this.upload.username);
      // alert("Successful Change");
      axios
        .put("http://localhost:8081/v1/user/update", formData, {
          withCredentials: true,
        })
        .then((response) => {
          if (response.data.EC === 0) {
            window.alert("Tạo thành công!");
          } else {
            window.alert(response.data.EM);
          }
        }
      )
        .catch((error) => {
          console.error("Error:", error);
          // Xử lý lỗi ở đây
        });
    },
  },
};
</script>
            
  <style>
.custom-right-align {
  text-align: center;
  margin-top: 15px;
}
</style>