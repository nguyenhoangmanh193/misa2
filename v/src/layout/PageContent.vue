<template>
   <div class="main">
        <Sidebar />
        <router-view />
    </div>
</template>

<script setup>
import Sidebar from "@/layout/Sidebar.vue";

</script>


<style scoped>
.main {
  flex: 1;
  background-color: #EBECEF;
  display: flex;
}
</style>