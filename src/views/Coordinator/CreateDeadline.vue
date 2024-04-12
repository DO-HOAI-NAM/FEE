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
            v-model="upload.name"
          />

          <label
            for="exampleFormControlInput1"
            class="form-label mt-4 fw-semibold"
            >Description</label
          >
          <input
            type="email"
            class="form-control"
            id="exampleFormControlInput1"
            v-model="upload.description"
          />
          <div class="demo-datetime-picker">
            <div class="block">
              <span class="demonstration">Start Date</span>
              <el-date-picker
                v-model="upload.start_date"
                type="datetime"
                placeholder="Pick a Date"
                format="YYYY/MM/DD HH:mm:ss"
              />
            </div>
            <div class="block">
              <span class="demonstration">End Date</span>
              <el-date-picker
                v-model="upload.end_date"
                type="datetime"
                placeholder="Pick a Date"
                format="YYYY/MM/DD hh:mm:ss"
                value-format="YYYY-MM-DD h:m:s a"
              />
            </div>
          </div>
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
        start_date: "",
        end_date: "",
        name: "",
        description: "",
      },
    };
  },
  methods: {
    //method là function tự tạo
    uploadFaculties() {
      let formData = new FormData();
      formData.append("start_date", this.upload.start_date);
      formData.append("end_date", this.upload.end_date);
      formData.append("name", this.upload.name);
      formData.append("description", this.upload.description);
      console.log(this.faculty_name);
      axios
        .post("http://localhost:8081/v1/topic/create", formData, {
          withCredentials: true,
        }) //formData
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