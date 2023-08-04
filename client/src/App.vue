<template>
<div>
    <div v-if="!isLoading">
      <TheHeader @showNav="showNavBar = !showNavBar" />
      <router-view v-slot="{ Component }">
        <AppNavbar v-if="isLogged" :showNav="showNavBar" class="absolute" />
      <transition>
        <component :class="isLogged ? 'lg:ml-60' :''" :is="Component" />
      </transition>
    </router-view>
    </div>
    <Loading v-else></Loading>
  </div>
</template>

<script setup>
import TheHeader from "./components/TheHeader.vue";
import AppNavbar from "./components/AppNavbar.vue";
import { computed, ref } from "vue";
import { useStore } from "vuex";
const store = useStore();
const showNavBar = ref(false);
const isLogged = localStorage.getItem('token');
let isLoading = computed(() => {
  if (store.getters._getCurrentUser) return false;
  else return true;
});
const token = localStorage.getItem("token");
(async () => {
  if (token) {
    await store.dispatch("getUser")
    isLoading = true;
} else isLoading = false;
})();
</script>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>