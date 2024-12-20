<script setup>
import arrowRight from "@/assets/arrow-right.png";
import Category from "@/components/Category.vue";
import Filter from "@/components/Filter.vue";
import ItemProduuct from "@/components/ItemProduct.vue";
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
    <p
        class="text-[24px] md:text-[28px] lg:text-[36px] font-normal mb-3 md:mb-4"
    >
        Có thể bạn cũng thích
    </p>
    <Category />
    <Filter />
    <div class="w-full border-b-2 border-dotted border-[#929292] my-6"></div>
    <ItemProduuct />
</template>
