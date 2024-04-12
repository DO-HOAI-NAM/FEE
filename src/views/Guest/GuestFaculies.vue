<template>
  <div class="card" style="width: 78rem">
    <h5 class="card-title" style="padding: 10px">Welcome Guest!</h5>
    <div class="card-body" style="margin: 110px">
      <div class="container">
        <div class="row">
          <div
            class="col-12 col-md-6 col-lg-4"
            v-for="(topic, index) in listtopic"
            :key="index"
          >
            <div class="card">
              <img
                src="../../assets/imagebrain.jpg"
                alt="test"
                class="card-img-top"
              />
              <div class="card-body">
                <h5 class="card-title text-center">{{ topic.topic_name }}</h5>
                <!-- chỗ này lúc gọi được api lúc không gọi đc -->
     
                <p class="card-text custom-right-align ml-10">
                  <button
                    type="button"
                    class="btn btn-info"
                    v-on:click="handleClick"
                    style="margin: 5px"
                    href="javascript:"
                    @click="getdownload(item._id)"
                  >
                    Download
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

            
<script>
import axios from "axios";

export default {
  data() {
    return {
      listtopic: [],
    };
  },
  mounted() {
    this.getlistrole();
    this.userId = this.$route.params._id;
  },
  methods: {
    getlistrole() {
      axios
        .get("http://localhost:8081/v1/contribution/readforGuest", {
          withCredentials: true,
        })
        .then((response) => {
          console.log(response);
          if (response.data.EC === 0) {
            this.listtopic = response.data.DT;
          } else {
            console.error("Error:", response.data.EM);
          }
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    },
    getdownload(id) {
      consolog.log("Download file id=" + id);
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
  },
};
</script>
            
  <style>
.custom-right-align {
  text-align: center;
}
</style>