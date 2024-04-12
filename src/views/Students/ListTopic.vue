<template>
  <div class="card" style="width: 79rem">
    <div class="card-body">
      <h5 class="card-title">List Topic</h5>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Topic Name</th>
            <th scope="col">Deadline StartDate</th>
            <th scope="col">Deadline EndDate</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(item, index) in listtopic"
            :value="item._id"
            :key="index"
            placeholder="Password"
          >
            <th scope="row">{{ item.name }}</th>
            <td>{{ item.start_date }}</td>
            <td>{{ item.end_date }}</td>
            <td>
              <button
                type="button"
                class="btn btn-info"
                v-on:click="handleClick(item._id)"
              >
                Submit
              </button>
            </td>
            <td>
              <button
                type="button"
                class="btn btn-danger"
                @click="deleteItem(item._id)"
              >
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
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
      student: {
        name: "",
        description: "",
        start_date: "",
        end_date: "",
      },
      listtopic: [],
    };
  },
  created() {},
  mounted() {
    console.log("mounted() called..........");
    this.getlistrole();
    this.userId = this.$route.params._id;
  },
  methods: {
    openEdit() {
      console.log("aaaaa");
      router.replace("/edit");
    },
    handleClick(name) {
      router.push({
        name: "studentmyassignmentsubmit",
        query: { id: name },
      });
    },

    getlistrole() {
      axios
        .get("http://localhost:8081/v1/topic/readAll", this.student)
        .then((data) => {
          console.log(data.data.DT, "data");
          this.listtopic = data.data.DT;
        });
    },

    deleteItem(id) {
      axios
        .delete(`http://localhost:8081/v1/topic/delete/${id}`)
        .then((response) => {
          console.log(response);
          console.log("Item deleted successfully");
          // Sau khi xóa thành công, bạn có thể cập nhật danh sách hoặc thực hiện các hành động khác
          // Ví dụ:
          this.getlistrole(); // Cập nhật lại danh sách sau khi xóa
        })
        .catch((error) => {
          console.error("Error deleting item:", error);
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
        
        <style>
</style>