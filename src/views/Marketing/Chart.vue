<template>
  <div class="card" style="width: 100%">
    <div class="card-body" style="width: 100%">
      <h5 class="card-title">Admin Chart</h5>
      <table class="table">
        <div class="container text-center">
          <div class="row">
            <div class="col">
              <button
                type="button"
                class="btn btn-light"
                style="background-color: #d0acff"
                disabled
              >
                <div class="d-flex flex-column mb-3">
                  <div class="p-2">All POST</div>
                  <div class="p-2">Number : 50</div>
                </div>
              </button>
            </div>
            <div class="col">
              <button
                type="button"
                class="btn btn-light"
                style="background-color: #51258a; color: black"
                disabled
              >
                <div class="d-flex flex-column mb-3">
                  <div class="p-2">IT POSTS</div>
                  <div class="p-2">Number : 50</div>
                </div>
              </button>
            </div>
            <div class="col">
              <button
                type="button"
                class="btn btn-light"
                style="background-color: #ffe0e0; color: black"
                disabled
              >
                <div class="d-flex flex-column mb-3">
                  <div class="p-2">BUSINESS POSTS</div>
                  <div class="p-2">Number : 50</div>
                </div>
              </button>
            </div>
            <div class="col">
              <button
                type="button"
                class="btn btn-light"
                style="background-color: #fffce0; color: black; font-size: 16px"
                disabled
              >
                <div class="d-flex flex-column mb-3">
                  <div class="p-2">DESIGNER POSTS</div>
                  <div class="p-2">Number : 50</div>
                </div>
              </button>
            </div>
          </div>
          <br />
          <div class="h-8px mx-3 w-100 bg-secondary bg-opacity-50 rounded">
            <div
              class="rounded h-8px"
              role="progressbar"
              aria-valuenow="50"
              aria-valuemin="0"
              aria-valuemax="100"
              style="width: 72%; background-color: #d0acff"
            ></div>
          </div>
          <br />
          <div
            class="h-8px mx-3 w-100 bg-secondary bg-opacity-50 rounded"
            style="height: 10%"
          >
            <div
              class="rounded h-8px"
              role="progressbar"
              aria-valuenow="50"
              aria-valuemin="0"
              aria-valuemax="100"
              style="width: 72%; background-color: #51258a"
            ></div>
          </div>
          <br />
          <div class="h-8px mx-3 w-100 bg-secondary bg-opacity-50 rounded">
            <div
              class="rounded h-8px"
              role="progressbar"
              aria-valuenow="50"
              aria-valuemin="0"
              aria-valuemax="100"
              style="width: 72%; background-color: #ffe0e0"
            ></div>
          </div>
          <br />
          <div class="h-8px mx-3 w-100 bg-secondary bg-opacity-50 rounded">
            <div
              class="rounded h-8px"
              role="progressbar"
              aria-valuenow="50"
              aria-valuemin="0"
              aria-valuemax="100"
              style="width: 72%; background-color: #fffce0"
            ></div>
          </div>
        </div>
      </table>
    </div>
  </div>
</template>
    
    <script>
export default {};
</script>
    
    <style>
</style>