<script setup>
import { onMounted } from "vue";
import { useBannerStore } from "@/stores/home/banner.ts";
import {Swiper, SwiperSlide} from "swiper/vue";
import "swiper/swiper-bundle.css";

const bannerStore = useBannerStore();

onMounted(() => {
    bannerStore.fetchBanners();
});

</script>

<template>
    <Swiper
        class="bannerSwiper"
        :slides-per-view="1"
        :loop="true"
    >
        <SwiperSlide v-for="item in bannerStore.getBanner" :key="item.id">
            <img :src="`${item.src}`" alt="Banner Image" class="w-full h-auto">
        </SwiperSlide>
    </Swiper>
</template>
