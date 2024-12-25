<script setup>
import { useMayLike } from "@/stores/home/may-like.ts";
import { onMounted, computed } from "vue";

const mayLikeStore = useMayLike();
onMounted(() => {
    mayLikeStore.fetchMayLike();
});

const formatPrice = (price) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};
</script>

<template>
    <div class="grid grid-cols-2 gap-2 md:grid-cols-4 lg:grid-cols-6 mt-8">
        <div
            v-for="(product, index) in mayLikeStore.getMayLike.slice(0, 24)"
            :key="index"
            class="cursor-pointer item-product"
        >
            <img :src="`${product.src}`" :alt="product.name" class="w-full object-contain h-[218px]" />
            <div class="text-center py-2 font-medium flex flex-col gap-2">
                <p class="text-[14px] truncate-text">
                    {{ product.name }}
                </p>
                <p class="text-[14px]">{{ formatPrice(product.price) }}đ</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
.truncate-text {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
}
.item-product {
    position: relative;
}
.item-product:hover {
    color: #F1641E;
    box-shadow: 0px 8px 8px 0px #F1641D1A;
}
.item-product:hover:before, .item-product:hover:after {
    transform: scale3d(1, 1, 1);
    transition: transform 0.5s;
}
.item-product::before{
    border-top: 2px solid #F1641E;
    border-bottom: 2px solid #F1641E;
    transform: scale3d(0, 1, 1);
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    transform-origin: center;
    content: '';
    position: absolute;
    box-sizing: inherit;
}
.item-product::after {
    border-left: 2px solid #F1641E;
    border-right: 2px solid #F1641E;
    transform: scale3d(1, 0, 1);
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    transform-origin: center;
    content: '';
    position: absolute;
    box-sizing: inherit;
}
</style>
