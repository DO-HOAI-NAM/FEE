<template>
  <div class="card" style="width: 79rem">
    <div class="card-body">
      <h5 class="card-title">Craete Faculties</h5>
      <from method="post" class="form-group" @submit="uploadFaculties">
        <div class="mb-3 bg p-5 rounded">
          <label
            for="exampleFormControlInput1"
            class="form-label mt-4 fw-semibold"
            >Name</label
          >
          <input
            type="email"
            class="form-control"
            id="exampleFormControlInput1"
            v-model="upload.faculty_name"
          />
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
        faculty_name: "",
      },
    };
  },
  methods: {
    //method là function tự tạo
    uploadFaculties() {
      let formData = new FormData();
      formData.append("faculty_name", this.upload.faculty_name);
      console.log(this.faculty_name);
      axios
        .post("http://localhost:8081/v1/faculty/create", formData) //formData
        .then((data) => {
          console.log(data);
        })
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