<template>
    <div class="card" style="width: 79rem">
      <div class="card-body">
        <h5 class="card-title">Download</h5>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Post Name</th>
              <th scope="col">Topic Name</th>
              <th scope="col">Start Date</th>
              <th scope="col">End Date</th>
              <th scope="col">Description</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(item, index) in listpost"
              :value="item._id"
              :key="index"
              placeholder="Password"
            >
              <th>
                <p></p>
                {{ item.name }}
              </th>
              <th>
                <p></p>
                {{ item.topic_name }}
              </th>
              <td>
                <p></p>
                {{ item.submit_date }}
              </td>
              <td>
                <p></p>
                {{ item.updatedAt }}
              </td>
              <td>
                <p></p>
                {{ item.description }}
              </td>
              <td>
                <button
                  type="button"
                  class="btn btn-info"
                  style="margin: 5px"
                  v-on:click="deleteItem(item._id)"
                >
                  Delete
                </button>
                <button
                  type="button"
                  class="btn btn-info"
                  v-on:click="handleClick"
                  style="margin: 5px"
                  href="javascript:"
                  @click="getdownload(item._id)"
                >
                  Download File
                </button>
                <!-- <a href="javascript:" @click="getdownload(item._id)">
                  Download File
                </a> -->
                <button
                  type="button"
                  class="btn btn-info"
                  style="margin: 5px"
                  @click="viewComment(item._id)"
                >
                  View Comment
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </template>
            
            <script>
  import axios from "axios";
  export default {
    data() {
      return {
        results: {},
        post: {
          name: "",
          description: "",
          start_date: "",
          end_date: "",
        },
        listpost: [],
        // userId: null,
      };
    },
    created() {},
    mounted() {
      this.getlistrole();
      this.userId = this.$route.query._id;
    },
    methods: {
      // openEdit() {
      //   router.replace("/edit");
      // },
      // handleClick(name) {
      //   router.push({
      //     query: { id: name },
      //   });
      // },
  
      // handleClick() {
      //   window.location.href =
      //     "http://localhost:5173/student/myassignment/submit";
      // },
      getlistrole() {
        axios
          .get("http://localhost:8081/v1/contribution/read", this.post)
          .then((data) => {
            console.log(data);
            this.listpost = data.data;
          });
      },
      getdownload(id) {
        axios
          .get(`http://localhost:8081/v1/contribution/download/${id}`, {
            responseType: "blob",
          })
          .then((res) => {
            const blob = new Blob([res.data], {
              type: "application/octet-stream", //dùng mở file zip
            });
            const link = document.createElement("a");
            link.href = URL.createObjectURL(blob);
            link.download = `${id}.zip`;
            link.click();
          });
      },
      viewComment(id) {
        this.$router.push({
          name: "studentmanagemypostviewcomment",
          params: { id },
        });
      },
  
      deleteItem(id) {
         axios
           .delete(`http://localhost:8081/v1/contribution/delete/${id}`)
           .then((response) => {
            console.log(response);
             console.log("Item deleted successfully");
             // Sau khi xóa thành công, bạn có thể cập nhật danh sách hoặc thực hiện các hành động khác
             // Ví dụ:
             this.getListRole(); // Cập nhật lại danh sách sau khi xóa
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