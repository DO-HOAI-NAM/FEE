<template>
  <div class="card" style="width: 79rem">
    <div class="card-body">
      <h5 class="card-title">Create Comment</h5>
      <from method="post" class="form-group" @submit="uploadFaculties">
        <div style="">Days {{ dayOfWeek }}</div>
        <div>Hours: {{ formattedDate }}</div>
        <div>Minutes: {{ formattedTime }}</div>
        <div>Seconds: {{ formattedTime }}</div>
        <div class="mb-3 bg p-5 rounded">
          <label
            for="exampleFormControlInput1"
            class="form-label mt-4 fw-semibold"
            >Description</label
          >
          <input
            type="email"
            class="form-control"
            id="exampleFormControlInput1"
            v-model="upload.comment"
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
        comment: "",
        contribution_id: "",
        days: "",
        hours: "",
        minutes: "",
        seconds: "",
      },
      listremainingTime: [],
    };
  },
  mounted() {
    // nếu muốn sử dụng jQuery -> chỉ truy xuất Dom dduojc trong mounted -> có thể sử dụng jQuery
    this.userId = this.$route.params.id;
    this.getdatetime();
    this.uploadFaculties();

  },
  methods: {
    //method là function tự tạo
    uploadFaculties() {
      let formData = new FormData();
      formData.append("comment", this.upload.comment);
      formData.append("contribution_id", this.userId);
      // alert("Create success");
      console.log(this.upload.comment);
      axios
        .post("http://localhost:8081/v1/comment/create", formData, {
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
    getdatetime() {
      console.log(this.userId);
      axios
        .get("http://localhost:8081/v1/commentforC/read", {
          withCredentials: true,
        })
        .then((data) => {
          console.log(data);
          // Xử lý dữ liệu nhận được từ API
          const remainingTime = data.data.remainingTime;
          console.log(remainingTime); // In ra dữ liệu remainingTime
        })
        .catch((error) => {
          // Xử lý lỗi nếu có
          console.error("Error fetching data:", error);
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