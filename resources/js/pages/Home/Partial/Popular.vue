<script setup>
import { onMounted } from "vue";
import { usePopular } from "@/stores/home/popular.ts";

const popularStore = usePopular();
onMounted(() => {
    popularStore.fetchPopular();
});
</script>

<template>
    <h3 class="text-2xl font-medium text-center mb-4">Những món quà phổ biến</h3>
    <ul class="flex gap-4 justify-center">
        <li v-for="item in popularStore.getPopular" :key="item.id" class="list-category">{{item.category.name}}</li>
    </ul>
    <div class="list-product-category">
        <div v-for="item in popularStore.getPopular" :key="item.id">
            <img :src="`https://gifticon.krmedi.vn${item.products.src}`" :alt="`${item.name}`" class="w-full h-auto">
        </div>
    </div>
</template>

<style scoped>
.list-category{
    background: #0E0E0E17 !important;
    color: #222222;
    display: inline-block;
    padding: 8px 20px;
    cursor: pointer;
    font-weight: 500;
    font-size: 16px;
    border-radius: 24px;
    border: 2px solid #0e0e0e03;
    min-width: fit-content;
    .active{
        background: white !important;
        color: #F1641E;
        border: 2px solid #F1641E;
    }
}
</style>
