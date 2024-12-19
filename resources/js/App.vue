<template>
    <Header />
    <div
        class="max-w-[1400px] mx-auto w-full md:px-3 px-2 lg:mt-[125px] md:mt-[115px] mt-[100px]"
    >
        <router-view />
    </div>
    <Footer />
</template>

<script setup>
import Footer from "./components/Footer.vue";
import Header from "./components/Header.vue";
</script>
