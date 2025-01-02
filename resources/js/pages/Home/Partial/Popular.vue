<script setup>
import { ref, computed, onMounted } from "vue";
import { usePopular } from "@/stores/home/popular.ts";

const popularStore = usePopular();
const activeCategory = ref(1);

onMounted(() => {
    popularStore.fetchPopular();
});

const setActiveCategory = async (category) => {
    activeCategory.value = null;
    activeCategory.value = category;
};

const filteredProducts = computed(() => {
    if (!activeCategory.value) return [];
    const category = popularStore.getPopular.find(item => item.category.id === activeCategory.value);
    return category ? category.products.slice(0, 8) : [];
});
</script>

<template>
    <h3 class="text-2xl font-medium text-center mb-4">Những món quà phổ biến</h3>
    <ul class="flex gap-4 justify-center">
        <li
            v-for="item in popularStore.getPopular"
            :key="item.id"
            :class="['list-category', { active: item.category.id === activeCategory }]"
            @click="setActiveCategory(item.category.id)"
        >
            {{ item.category.name }}
        </li>
    </ul>
    <div class="list-product-category flex flex-col flex-wrap items-center mt-5">
        <div v-for="(product, index) in filteredProducts" :key="product.product_id" :class="(index === 1 || index === 2 || index === 5 || index === 6) ? 'item-2' : 'item-1'" class="relative product-item">
            <img :src="`${product.product_src}`" :alt="`${product.product_name}`" class="w-full h-full object-cover">
            <span class="absolute bottom-0">{{ product.product_id }}</span>
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
}

.list-category.active {
    background: white !important;
    color: #F1641E;
    border: 2px solid #F1641E;
}
.product-item{
    overflow: hidden;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    width: calc((100% / 4) - 16px);
}
.list-product-category{
    gap: 16px;
    width: 100%;
    height: 521px;
    .item-1{
        height: 200px;
    }
    .item-2{
        height: 300px;
    }
}
</style>
