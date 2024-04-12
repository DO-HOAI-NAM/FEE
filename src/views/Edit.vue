<template>
  <div class="card" style="width: 78rem">
    <div class="card-body">
      <h5 class="card-title">Edit account</h5>
      <div class="row col-12" style="height: 89vh">
        <div class="col-4">
          <img
            src="../assets/backgroundhome3.avif"
            class="rounded-circle"
            alt="avatar"
            style="width: 400px; height: 400px"
          />
        </div>
        <div
          class="col-6 d-flex justify-content-center"
          style="align-items: center"
        >
          <from class="form-group" style="bottom: 100px">
            <div class="mb-3 bg p-5 rounded">
              <label
                for="exampleFormControlInput1"
                class="form-label mt-4 fw-semibold"
                >Name</label
              >
              <input
                type="text"
                class="form-control"
                placeholder="Username"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />

              <label
                for="exampleFormControlInput1"
                class="form-label mt-4 fw-semibold"
                >Email</label
              >

              <input
                type="text"
                class="form-control"
                placeholder="Email"
                aria-label="Email"
                aria-describedby="basic-addon1"
              />
              <button
                type="button"
                class="btn btn-outline-dark"
                style="margin: 160px"
              >
                Update
              </button>
            </div>
          </from>
        </div>
      </div>
    </div>
  </div>
</template>
  
  <script>
import router from "../router/index";
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
.container {
  position: fixed;
  width: 50%;
  top: 0;
  bottom: 50%;
  left: 10%;
}
</style>