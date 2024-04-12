<template>
  <div class="card" style="width: 78rem">
    <h5 class="card-title" style="padding: 10px">Welcome Marketing!</h5>
    <div class="card-body" style="margin: 110px">
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-6 col-lg-4">
            <div class="card">
              <img
                src="../../assets/marketing.jpg"
                alt="test"
                class="card-img-top"
              />
              <div class="card-body">
                <h5 class="card-title">Develop marketing strategy</h5>
                <p class="card-text">
                  Develop marketing plans and strategies based on market
                  research and competitor analysis.
                </p>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6 col-lg-4">
            <div class="card">
              <img src="../../assets/ad.jpg" alt="test" class="card-img-top" />
              <div class="card-body">
                <h5 class="card-title">Manage advertising campaigns</h5>
                <p class="card-text">
                  Build and deploy online and offline advertising campaigns such
                  as social network advertising, Google Ads, or television
                  media.
                </p>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6 col-lg-4">
            <div class="card">
              <img
                src="../../assets/brand.jpg"
                alt="test"
                class="card-img-top"
              />
              <div class="card-body">
                <h5 class="card-title">Brand management</h5>
                <p class="card-text">
                  Ensure that the company's brand image is maintained and developed through advertising and communication activities.
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