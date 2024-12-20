<script setup>
import tea from "@/assets/tea.png";
let category = [0, 1, 2, 3, 4, 5, 6, 7];
</script>
<template>
    <div class="flex gap-3 md:gap-5 flex-wrap lg:mt-5 mt-4">
        <div
            v-for="(item, index) in category"
            :key="index"
            class="w-fit flex items-center gap-2 px-[18px] lg:py-[10px] py-[7px] bg-[#F3F3F3] hover:bg-white hover:border-[1px] border-[1px] border-[#F3F3F3] hover:border-[#A9A9A9] rounded-[24px] cursor-pointer"
        >
            <img :src="tea" class="md:w-[32px] md:h-[32px] w-[24px] h-[24px]" />
            <span class="md:text-[16px] text-[14px]">Cafe & bánh</span>
        </div>
    </div>
</template>
