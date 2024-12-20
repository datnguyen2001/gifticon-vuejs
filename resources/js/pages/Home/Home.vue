<script setup>
import Banner from "@/pages/Home/Partial/Banner.vue";
import FamousBrand from "@/pages/Home/Partial/FamousBrand.vue";
import MayLike from "@/pages/Home/Partial/MayLike.vue";
import Popular from "@/pages/Home/Partial/Popular.vue";
import SaleToday from "@/pages/Home/Partial/SaleToday.vue";
</script>

<template>
    <div class="grid gap-4 grid-cols-1 lg:grid-cols-2 lg:grid-rows-1">
        <div class="lg:order-1 order-2">
            <SaleToday />
        </div>
        <div class="lg:order-2 order-1">
            <Banner />
        </div>
    </div>
    <div class="mt-5">
        <Popular />
    </div>
    <FamousBrand />
    <MayLike />
</template>
