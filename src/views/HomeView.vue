<template>
  <div class="background-image">
    <!-- <div class="position-absolute text1 fs-2 text-primary">
      University Of Greenwich
    </div>
    <div class="position-absolute text2 fs-5">Content Management System</div> -->
  </div>
</template>
<script>
import axios from "axios";
export default {};
</script>
<style scoped>
.text1 {
  position: fixed;
  left: 250px;
  bottom: 350px;
}

.text2 {
  position: fixed;
  bottom: 330px;
  left: 250px;
}
.d-inline-flex {
  line-height: 500px;
  text-align: right;
  width: 300px;
}
.nav-link {
  color: rgba(255, 255, 255, 0.85);
}
.bt {
  text-align: left;
}
.background-image {
  background-image: url("../assets/backgroundhome2.png");
  height: calc(100vh - 80px);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
