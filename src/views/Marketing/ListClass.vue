<template>
  <div class="card" style="width: 79rem">
    <div class="card-body">
      <h5 class="card-title">List class</h5>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Class Name</th>
            <th scope="col">Faculty Name</th>
            <th scope="col">Delete Class</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>
              <button type="button" class="btn btn-danger">Delete</button>
            </td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>
              <button type="button" class="btn btn-danger">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
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