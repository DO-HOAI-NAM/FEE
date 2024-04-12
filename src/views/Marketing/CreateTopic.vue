<template>
  <div class="card" style="width: 79rem">
    <div class="card-body">
      <h5 class="card-title">Create Topic</h5>
      <from @submit.prevent="saveCreate" method="post" class="form-group">
        <div class="mb-3 bg p-5 rounded">
          <label
            for="exampleFormControlInput1"
            class="form-label mt-4 fw-semibold"
            >Name Topic</label
          >
          <input
            type="name"
            v-model="faculty.name"
            class="form-control"
            id="exampleFormControlInput1"
          />
          <span class="text-danger">{{ faculty.error }}</span>
          <div class="d-flex justify-content-around">
            <div class="datepicker1">
              <el-date-picker
                v-model="faculty.start_date"
                type="date"
                placeholder="Start Date"
                :size="size"
              />
            </div>
            <div class="datepicker2">
              <el-date-picker
                v-model="faculty.end_date"
                type="date"
                placeholder="End date"
                :size="size"
              />
            </div>

           
          </div>

          <label
            for="exampleFormControlInput1"
            class="form-label mt-4 fw-semibold"
            >Faculty Name</label
          >

          <select
            v-model="faculty.faculty_name"
            class="form-select"
            aria-label="Default select example"
          >
            <option disabled value="">Choose role</option>
            <option
              v-for="(item, index) in listfaculty"
              :value="item._id"
              :key="index"
              placeholder="Password"
            >
              {{ item.faculty_name }}
            </option>
          </select>

          <p class="card-text custom-right-align ml-10 position">
            <button type="button" class="btn btn-primary" @click="saveCreate()">
              Create
            </button>
          </p>
        </div>
      </from>
    </div>
  </div>
</template>
            
<script >
import axios from "axios";
export default {
  data() {
    return {
      results: {},
      faculty: {
        name: "",
        start_date: "",
        end_date: "",
        faculty_name: "",
        start_date: "", // Định dạng ngày tháng sẽ được lưu
        end_date: "",
        error: "",
      },
      entered: {
        confirmPassword: false,
      },
      listfaculty: [],
    };
  },
  created() {},
  mounted() {
    console.log("mounted() called..........");
    this.getlistrole();
  },
  methods: {
    getlistrole() {
      axios
        .get("http://localhost:8081/v1/faculty/readAll", this.faculty)
        .then((data) => {
          console.log(data);
          this.listfaculty = data.data;
        });
    },
    saveCreate() {
      axios
        .post("http://localhost:8081/v1/topic/create", this.faculty)

        .then((response) => {
          // Kiểm tra xem có lỗi từ API không
          if (response.data.EM === "Error") {
            // Lấy thông tin về lỗi từ phản hồi API
            var errorMessage = JSON.parse(response.data.DT)._message;
            var validationError = JSON.parse(response.data.DT).errors.name
              .message;
            // Gán thông báo lỗi vào thuộc tính faculty.error để hiển thị trên giao diện người dùng
            this.faculty.error = validationError;
          } else {
            // Nếu không có lỗi, xử lý dữ liệu khác từ API ở đây
            console.log(response.data);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
            
  <style>
/* .datepicker1 {
  position: fixed;
  bottom: 350px;
  left: 600px;
}
.datepicker2 {
  position: fixed;
  bottom: 350px;
  left: 975px;
}
.timepicker {
  position: fixed;
  bottom: 300px;
  left: 700px;
}
.position {
  position: fixed;
  bottom: 200px;
  left: 860px;
} */
.custom-right-align {
  text-align: center;
  margin-top: 15px;
}
</style>