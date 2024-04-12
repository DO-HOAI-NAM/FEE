<template>
  <div class="card" style="width: 78rem">
    <h5 class="card-title" style="padding: 10px">View Comment</h5>
    <div class="card-body" style="margin: 110px">
      <div class="container">
        <table class="table">
          <tbody>
            <tr
              v-for="(item, index) in listcomment"
              :value="item._id"
              :key="index"
              placeholder="Password"
            >
              <th scope="row">{{ item.comment }}</th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
      
      <script>
import axios from "axios";

export default {
  data() {
    return {
      view: {
        comment: " ",
      },
      listcomment: [],
      userId: null,
    };
  },
  created() {},
  mounted() {
    // nếu muốn sử dụng jQuery -> chỉ truy xuất Dom dduojc trong mounted -> có thể sử dụng jQuery
    // this.getlistcomment(this.$route.params.id);
    this.getlistrole();
    // this.userId = this.$route.params.id;
  },

  methods: {
    // handleClick(name) {
    //   router.push({
    //     name: "studentmanagemypostviewcomment",
    //   });
    // },
    getlistrole() {
      axios
        .get("http://localhost:8081/v1/comment/readAll", this.view)
        .then((data) => {
          console.log(data, "data");
          this.listcomment = data.data;
        });
    },
    // getlistcomment(id) {
    //   //cái này cần xem lại
    //   const config = {
    //     headers: {
    //       "Content-Type": "application/x-www-form-urlencoded",
    //     },
    //   };
    //   const params = new URLSearchParams();
    //   //params.append("contribution_id", "660cbef74882b9dcbd8f9997");
    //   axios
    //     .get(
    //       `http://localhost:8081/v1/comment/readAll`,
    //       params.toString(),
    //     )
    //     .then((data) => {
    //       console.log(data);
    //     });
    // },
  },
};
</script>
  