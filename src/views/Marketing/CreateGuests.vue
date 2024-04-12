<template>
  <div class="card" style="width: 79rem">
    <div class="card-body">
      <h5 class="card-title">Craete Topic</h5>
      <from action="/login" method="post" class="form-group">
        <div class="mb-3 bg p-5 rounded">
          <label
            for="exampleFormControlInput1"
            class="form-label mt-4 fw-semibold"
            >Name</label
          >
          <input
            type="email"
            class="form-control"
            id="exampleFormControlInput1"
          />

          <label
            for="exampleFormControlInput1"
            class="form-label mt-4 fw-semibold"
            >GuesId</label
          >
          <select class="form-select" id="inputGroupSelect01">
            <option selected>Select Guest</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>

          <label
            for="exampleFormControlInput1"
            class="form-label mt-4 fw-semibold"
            >FacultyID</label
          >

          <select class="form-select" id="inputGroupSelect01">
            <option selected>Select Faculty</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>

          <p class="card-text custom-right-align ml-10">
            <button type="button" class="btn btn-primary">Create</button>
          </p>
        </div>
      </from>
    </div>
  </div>
</template>
              
    <script>
export default {};
</script>
              
    <style>
.custom-right-align {
  text-align: center;
  margin-top: 15px;
}
</style>