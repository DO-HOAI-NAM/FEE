<template>
  <div class="card" style="width: 78rem">
    <h5 class="card-title" style="padding: 10px">Welcome Admin!</h5>
    <div class="card-body" style="margin: 110px">
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-6 col-lg-4">
            <div class="card">
              <img src="../../assets/IT.jpg" alt="test" class="card-img-top" />
              <div class="card-body">
                <h5 class="card-title">IT</h5>
                <p class="card-text custom-right-align ml-10">
                  <button type="button" class="btn btn-danger">Delete</button>
                </p>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6 col-lg-4">
            <div class="card">
              <img src="../../assets/IT.jpg" alt="test" class="card-img-top" />
              <div class="card-body">
                <h5 class="card-title">Business</h5>
                <p class="card-text custom-right-align ml-10">
                  <button type="button" class="btn btn-danger">Delete</button>
                </p>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6 col-lg-4">
            <div class="card">
              <img src="../../assets/IT.jpg" alt="test" class="card-img-top" />
              <div class="card-body">
                <h5 class="card-title">Graphic</h5>
                <p class="card-text custom-right-align ml-10">
                  <button type="button" class="btn btn-danger">Delete</button>
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
import router from "../../router/index";
export default {
  methods: {
    openEdit() {
      console.log("aaaaa");
      router.replace("/edit");
    },
  },
};
</script>
          
<style>
.custom-right-align {
  text-align: center;
}
</style>