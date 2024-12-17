<script>
import Banner from "@/pages/Home/Partial/Banner.vue";
import FamousBrand from "@/pages/Home/Partial/FamousBrand.vue";
import MayLike from "@/pages/Home/Partial/MayLike.vue";
import Popular from "@/pages/Home/Partial/Popular.vue";
import SaleToday from "@/pages/Home/Partial/SaleToday.vue";
export default {
    components: {
        SaleToday,
        Banner,
        Popular,
        FamousBrand,
        MayLike,
    }
};
</script>

<template>
    <div>
        <div class="flex space-x-4">
            <div class="w-1/2">
                <SaleToday />
            </div>
            <div class="w-1/2">
                <Banner />
            </div>
        </div>

        <Popular />
        <FamousBrand />
        <MayLike />
    </div>
</template>
