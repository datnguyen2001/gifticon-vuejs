<script setup>
import imgProduct from "@/assets/img-sp.png";
let products = [0, 2, 3, 4, 5, 6, 7, 5, 6, 7, 8, 9];
</script>
<template>
    <div class="grid grid-cols-2 gap-2 md:grid-cols-4 lg:grid-cols-6 mt-8">
        <div
            v-for="(product, index) in products"
            :key="index"
            class="cursor-pointer"
        >
            <img :src="imgProduct" class="w-full" />
            <div class="text-center py-2 font-medium">
                <p class="text-[14px] truncate-text">
                    Triple Coffee Frappuccino Triple Coffee Frappuccino Triple
                    Coffee Frappuccino
                </p>
                <p class="text-[14px]">100.000đ</p>
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
</style>
