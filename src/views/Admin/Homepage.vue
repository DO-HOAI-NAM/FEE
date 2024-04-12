<template>
  <div class="card" style="width: 78rem">
    <h5 class="card-title" style="padding: 10px">Admin</h5>
    <div class="d-flex justify-content-evenly">
      <div style="">Today is {{ dayOfWeek }}</div>
      <div>Date: {{ formattedDate }}</div>
      <div>Time: {{ formattedTime }}</div>
    </div>

    <div class="card-body" style="margin: 110px">
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-6 col-lg-4">
            <div class="card">
              <img
                src="../../assets/whitehathacker.jpg"
                alt="test"
                class="card-img-top"
              />
              <div class="card-body">
                <h5 class="card-title">White Hat Hackers</h5>
                <p class="card-text">
                  Also known as "ethical hackers", they are people who use hacking skills to find and fix security drives to protect systems and data.
                </p>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6 col-lg-4">
            <div class="card">
              <img
                src="../../assets/blackhat.png"
                alt="test"
                class="card-img-top"
              />
              <div class="card-body">
                <h5 class="card-title">Black Hat Hackers</h5>
                <p class="card-text">
                  These are cyberattackers with malicious intent, usually to obtain personal information, money or harm organizations and individuals.
                </p>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6 col-lg-4">
            <div class="card">
              <img
                src="../../assets/Greyhat.png"
                alt="test"
                class="card-img-top"
              />
              <div class="card-body">
                <h5 class="card-title">Grey Hat Hackers</h5>
                <p class="card-text">
                  Gray hat hackers are a combination of both types above. They may perform actions without permission but not with the intention of causing harm or personal gain.
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
  data() {
    return {
      currentDate: new Date(),
    };
  },
  methods: {
    openEdit() {
      console.log("aaaaa");
      router.replace("/edit");
    },
    handleClick() {
      window.location.href =
        "http://localhost:5173/student/myassignment/submit";
    },
    getDayOfWeek(date) {
      const days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];
      return days[date.getDay()];
    },
    getFormattedDate(date) {
      return date.toLocaleDateString();
    },
    getFormattedTime(date) {
      return date.toLocaleTimeString();
    },
  },
  computed: {
    dayOfWeek() {
      return this.getDayOfWeek(this.currentDate);
    },
    formattedDate() {
      return this.getFormattedDate(this.currentDate);
    },
    formattedTime() {
      return this.getFormattedTime(this.currentDate);
    },
  },
};
</script>
      
      <style>
</style>