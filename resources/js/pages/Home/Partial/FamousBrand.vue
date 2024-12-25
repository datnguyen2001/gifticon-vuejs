<script setup>
import { onMounted } from 'vue';
import { useFamousBrandStore } from "@/stores/home/famous-brand.ts";
import { Swiper, SwiperSlide } from "swiper/vue";

const famousBrandStore = useFamousBrandStore();

onMounted(() => {
    famousBrandStore.fetchFamousBrand();
});
</script>

<template>
    <h3 class="text-2xl font-medium text-left mb-4">Những thương hiệu nổi tiếng</h3>
    <div class="flex justify-center">
        <Swiper
            class="famousBrandSwiper"
            :slides-per-view="3"
            :loop="true"
            :autoplay="{ delay: 3000 }"
            :space-between="16"
            :breakpoints="{
                768: {
                    slidesPerView: 5
                }
            }"
        >
            <SwiperSlide v-for="item in famousBrandStore.getFamousBrand" :key="item.id" class="swiper-slide-custom">
                <img :src="`${item.src}`" alt="Banner Image" class="w-full h-auto object-contain max-h-[280px]">
            </SwiperSlide>
        </Swiper>
    </div>
</template>

<style scoped>
.swiper-slide-custom {
    display: flex !important;
    align-items: center !important;
}
</style>
