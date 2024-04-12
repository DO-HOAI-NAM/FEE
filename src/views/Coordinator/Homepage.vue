<template>
  <div class="card" style="width: 78rem">
    <h5 class="card-title" style="padding: 10px">Welcome Coordinator!</h5>
    <div class="card-body" style="margin: 110px">
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-6 col-lg-4">
            <div class="card">
              <img
                src="../../assets/projectcoor.jpg"
                alt="test"
                class="card-img-top"
              />
              <div class="card-body">
                <h5 class="card-title">Project Coordinator</h5>
                <p class="card-text">
                  Coordinate daily project activities, plan, track progress, and
                  ensure that everyone on the team understands and executes
                  their tasks.
                </p>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6 col-lg-4">
            <div class="card">
              <img
                src="../../assets/EventCoordinator.jpg"
                alt="test"
                class="card-img-top"
              />
              <div class="card-body">
                <h5 class="card-title">Event Coordinator</h5>
                <p class="card-text">
                  Organize and manage events or programs, from planning to
                  implementation, and ensure that everything runs smoothly.
                </p>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6 col-lg-4">
            <div class="card">
              <img
                src="../../assets/LogisticsCoordinator.jpg"
                alt="test"
                class="card-img-top"
              />
              <div class="card-body">
                <h5 class="card-title">Logistics Coordinator</h5>
                <p class="card-text">
                  Resource and transportation management, including planning and
                  tracking activities related to freight transportation,
                  storage, and warehouse management.
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
</style>