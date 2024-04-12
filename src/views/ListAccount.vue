  <template>
  <div class="card" style="width: 79rem">
    <div class="card-body">
      <h5 class="card-title">Marketing Manager</h5>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">User Name</th>
            <th scope="col">Email</th>
            <th scope="col">Role</th>
            <th scope="col">Delete Account</th>
            <th scope="col">Edit Name</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>
              <button type="button" class="btn btn-danger">Delete</button>
            </td>
            <td>
              <router-link class="btn btn-warning" to="/edit">Edit</router-link>
            </td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>
              <button type="button" class="btn btn-danger">Delete</button>
            </td>
            <td>
              <router-link class="btn btn-warning" to="/edit">Edit</router-link>
            </td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>
              <button type="button" class="btn btn-danger">Delete</button>
            </td>
            <td>
              <router-link class="btn btn-warning" to="/edit">Edit</router-link>
            </td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>
              <button type="button" class="btn btn-danger">Delete</button>
            </td>
            <td>
              <router-link class="btn btn-btn btn-warning" to="/edit"
                >Edit</router-link
              >
            </td>
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