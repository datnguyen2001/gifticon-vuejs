<script setup>
import { computed, onMounted } from 'vue';
import {useStore} from 'vuex';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper-bundle.css';

const store = useStore();
const items = computed(() => store.getters['saleToday/saleToday']);

const fetchItems = async () => {
    await store.dispatch('saleToday/getSaleToday');
};

onMounted(() => {
    fetchItems();
});
</script>

<template>
    <div class="flex justify-between">
        <h3 class="font-bold text-xl">Khuyến mãi mới hôm nay</h3>
        <router-link to="/sale-today" class="font-normal text-sm">Xem tất cả</router-link>
    </div>
    <Swiper
        class="mySwiperPromotion"
        :slides-per-view="3"
        :space-between="30"
        :autoplay="{ delay: 3000 }"
        :loop="true"
    >
        <SwiperSlide v-for="item in items" :key="item.id">
            <div class="flex flex-col justify-between gap-2">
                <div class="box-img-product">
                    <img :src="`https://gifticon.krmedi.vn/${item.src}`" class="h-[218px] object-contain m-auto">
                    <i :class="['fa-solid fa-heart fa-heart-sp']" :data-product-id="item.id"></i>
                </div>
                <router-link :to="`/product/${item.slug}`" class="font-medium text-sm text-center line-clamp-2 h-[42px]">{{ item.name ?? 'N/A' }}</router-link>
                <span class="font-bold text-sm text-center">{{ new Intl.NumberFormat('de-DE').format(item.price ?? 0) }}đ</span>
            </div>
        </SwiperSlide>
    </Swiper>
</template>
