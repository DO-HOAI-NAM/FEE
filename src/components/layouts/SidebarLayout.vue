<template>
  <div class="container-fluid">
    <div class="row flex-nowrap">
      <div
        class="bg-secondary col-auto col-md-2 col-lg-2 min-vh-100 d-flex flex-column justify-content-between"
      >
        <div class="bg-secondary p-2">
          <a
            class="d-flex text-decoration-none mt-1 align-items-center text-white"
          >
            <span class="fs-4 d-none d-sm-inline">SideMenu</span>
          </a>
          <ul class="nav nav-bills flex-column mt-4">
            <li
              class="nav-item py-2 py-sm-0"
              v-for="(nav, index) of navigations"
              :key="index"
            >
              <a :href="nav.link" class="text-white link-item">
                <img
                  :src="`${env}/src/assets/${nav.icons}`"
                  style="height: 20px; margin: 10px"
                />
                <span class="fs-4 d-none d-sm-inline"></span>{{ nav.name }}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="col-1">
        <slot></slot>
      </div>
    </div>
  </div>
</template>
  <script setup >
import { navigations } from "@/data";
const env = import.meta.env.VITE_BASE_URL;
</script>
  <style >
.link-item {
  display: flex !important;
  justify-content: start !important;
  align-items: center !important;
  gap: 5px !important;
}
</style>
  