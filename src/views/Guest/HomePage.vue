<template>
    <div class="card" style="width: 78rem">
      <h5 class="card-title" style="padding: 10px">Home Page</h5>
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
                  src="../../assets/phamnhatvuong.jpg"
                  alt="test"
                  class="card-img-top"
                />
                <div class="card-body">
                  <h5 class="card-title">Pham Nhat Vuong</h5>
                  <p class="card-text">
                    Mr. Pham Nhat Vuong is one of the richest billionaires in Vietnam and is the Chairman of Vingroup, one of Vietnam's leading multi-industry corporations with fields of real estate, services, retail and tourism. calendar.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-12 col-md-6 col-lg-4">
              <div class="card">
                <img
                  src="../../assets/phuongthao.jpg"
                  alt="test"
                  class="card-img-top"
                />
                <div class="card-body">
                  <h5 class="card-title">Nguyen Thi Phuong Thao</h5>
                  <p class="card-text">
                    Ms. Nguyen Thi Phuong Thao is the CEO of VietJet Air Group, one of the largest airlines in Vietnam and one of the richest female billionaires in Vietnam.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-12 col-md-6 col-lg-4">
              <div class="card">
                <img
                  src="../../assets/trandinhlong.jpg"
                  alt="test"
                  class="card-img-top"
                />
                <div class="card-body">
                  <h5 class="card-title">Tran Dinh Long</h5>
                  <p class="card-text">
                    Mr. Tran Dinh Long is Chairman of Hoa Phat Group, one of the leading steel manufacturing corporations in Vietnam.
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