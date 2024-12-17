<template>
    <Header />
    <div class="max-w-[1400px] mx-auto w-full">
        <router-view />
    </div>
    <Footer />
</template>

<script>
import Footer from "./components/Footer.vue";
import Header from "./components/Header.vue";
export default {
    components: {
        Header,
        Footer,
    },
};
</script>
