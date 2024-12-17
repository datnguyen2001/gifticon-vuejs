<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper-bundle.css';

const items = ref([]);

const fetchItems = async () => {
    const response = await axios.get('https://gifticon.krmedi.vn/api/banner');
    items.value = response.data.data;
};

onMounted(() => {
    fetchItems();
});
</script>

<template>
    <Swiper
        class="bannerSwiper"
        :slides-per-view="1"
        :loop="true"
    >
        <SwiperSlide v-for="item in items" :key="item.id">
            <img :src="`https://gifticon.krmedi.vn${item.src}`" alt="Banner Image" class="w-full h-auto">
        </SwiperSlide>
    </Swiper>
</template>
