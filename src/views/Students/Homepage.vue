<template>
  <div class="card" style="width: 78rem">
    <h5 class="card-title" style="padding: 10px">Welcome Student</h5>
    <div class="card-body" style="margin: 110px">
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-6 col-lg-4">
            <div class="card">
              <img
                src="../../assets/JeffBezos.jpg"
                alt="test"
                class="card-img-top"
              />
              <div class="card-body">
                <h5 class="card-title">Jeff Bezos</h5>
                <p class="card-text">
                  He is the founder and chairman of Amazon, one of the world's
                  largest e-commerce and cloud companies. He also founded the
                  company Blue Origin with the goal of space exploration.
                </p>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6 col-lg-4">
            <div class="card">
              <img
                src="../../assets/BillGates.jpg"
                alt="test"
                class="card-img-top"
              />
              <div class="card-body">
                <h5 class="card-title">Bill Gates</h5>
                <p class="card-text">
                  He is one of the founders of Microsoft, one of the world's
                  leading technology companies. Gates is also famous for his
                  philanthropic work through the Bill & Melinda Gates
                  Foundation.
                </p>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6 col-lg-4">
            <div class="card">
              <img
                src="../../assets/MarkZuckerberg.jpg"
                alt="test"
                class="card-img-top"
              />
              <div class="card-body">
                <h5 class="card-title">Mark Zuckerberg</h5>
                <p class="card-text">
                  He is the founder and CEO of Facebook, one of the largest
                  social networks in the world. He also ran projects like
                  Instagram and WhatsApp after Facebook acquired them.
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