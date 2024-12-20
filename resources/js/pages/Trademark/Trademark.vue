<script setup>
import arrowRight from "@/assets/arrow-right.png";
import imageShop from "@/assets/img-shop.png";
import Category from "@/components/Category.vue";
let category = [0, 1, 2, 3, 4, 5, 6, 7];
</script>

<template>
    <router-link
        to="/"
        class="flex items-center gap-1 cursor-pointer mb-3 md:mb-4 pt-4"
    >
        <img :src="arrowRight" class="w-[24px]" />
        <span class="font-bold text-[16px] md:text-[18px] lg:text-[20px]"
            >Trở lại</span
        >
    </router-link>
    <p class="text-[16px] font-bold md:mb-2">
        Chế độ quà tặng giúp việc tặng quà trở nên cực kỳ dễ dàng
    </p>
    <p class="lg:text-[38px] md:text-[28px] text-[24px] font-bold">
        nhấn để chọn thương hiệu mà bạn muốn tặng
    </p>
    <Category />
    <div class="w-full border-b-2 border-dotted border-[#929292] my-6"></div>
    <div class="grid lg:grid-cols-5 md:grid-cols-4 grid-cols-2 gap-1">
        <div
            v-for="(shop, index) in category"
            :key="index"
            class="cursor-pointer"
        >
            <img :src="imageShop" class="object-cover" />
        </div>
    </div>
</template>
