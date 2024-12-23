<template>
    <Header v-if="!$route.meta.hideHeaderFooter" />
    <div
        class="max-w-[1400px] mx-auto w-full px-3 lg:mt-[125px] md:mt-[115px] mt-[100px]"
    >
        <router-view />
    </div>
    <Footer v-if="!$route.meta.hideHeaderFooter" />
</template>

<script setup>
import { useRoute } from "vue-router";
import Footer from "./components/Footer.vue";
import Header from "./components/Header.vue";
const route = useRoute();
</script>
