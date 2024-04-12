<template>
  <div class="card" style="width: 79rem">
    <div class="card-body">
      <h5 class="card-title">List download file</h5>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Post Name</th>
            <th scope="col">Student Name</th>
            <th scope="col">File Name</th>
            <th scope="col">Course Name</th>
            <th scope="col">Coordinator Name</th>
            <th scope="col">Faculty Name</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">
              <div class="">
                <input type="checkbox" />
              </div>
            </th>
            <td>Student 1</td>
            <td>.docx</td>
            <td>IT_course</td>
            <td>Coordinator1</td>
            <td>IT</td>
          </tr>
          <tr>
            <th scope="row">
              <div class="">
                <input type="checkbox" />
              </div>
            </th>
            <td>Student 2</td>
            <td>.docx</td>
            <td>Business</td>
            <td>Coordinator1</td>
            <td>IT</td>
          </tr>
        </tbody>
      </table>
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
</style>