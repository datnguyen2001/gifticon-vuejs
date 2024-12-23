<script setup>
import SaleToday from "@/components/SaleToday.vue";
import logoShop from "@/assets/logo-shop.png";
import arrowRight from "@/assets/arrow-right.png";
import Filter from "@/components/Filter.vue";
import ItemProduct from "@/components/ItemProduct.vue";
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

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-3">
        <div class="flex gap-3">
            <img
                :src="logoShop"
                class="w-[100px] h-[100px] md:w-[250px] md:h-[250px] object-contain"
            />
            <div class="flex flex-col md:gap-2 gap-1">
                <p
                    class="text-[17px] md:text-[24px] lg:text-[28px] text-[#F1641E] font-bold"
                >
                    Mcdonal
                </p>
                <div class="text-[14px] md:text-[18px] font-medium">
                    Mcdonal’s phấn đấu trở thành địa điểm yêu thích của khách
                    hàng và là cách tốt nhấn để thưởng thức đồ ăn bắng cách mang
                    đến cho khách hàng trải nghiệm tốt hơn.
                </div>
            </div>
        </div>
        <div><SaleToday /></div>
    </div>
    <div class="w-full border-b-2 border-dotted border-[#929292] my-6"></div>
    <Filter />
    <ItemProduct />
</template>
