<script setup>
import iconSearchSm from "@/assets/search-sm.png";
</script>
<template>
    <div class="flex lg:flex-nowrap flex-wrap items-center gap-3 md:gap-4">
        <span class="font-bold text-[15px] md:text-[18px]">Khoảng giá</span>
        <div class="flex gap-2 flex-wrap items-center">
            <input
                type="text"
                placeholder="Từ"
                class="bg-[#F3F3F3] px-3 md:py-[10px] py-[7px] rounded-lg outline-none input-price-filter"
            />
            <span class="line-distance">-</span>
            <input
                type="text"
                placeholder="Đến"
                class="bg-[#F3F3F3] px-3 md:py-[10px] py-[7px] rounded-lg outline-none input-price-filter"
            />
        </div>
        <div class="flex mr-0 lg:ml-4 items-center gap-4 box-mobile-search">
            <div
                class="flex items-center border-[1px] border-solid border-[#F47621] rounded-[128px] pl-[16px] overflow-hidden"
            >
                <input
                    type="text"
                    class="w-[246px] outline-none pr-2"
                    placeholder="Tìm kiếm theo tên sản phẩm"
                />
                <button
                    class="w-fit h-full bg-[#F47621] cursor-pointer py-3 px-4"
                >
                    <img :src="iconSearchSm" class="w-[16px]" />
                </button>
            </div>
            <button
                class="bg-[#FA5A00] py-[9px] px-[22px] rounded-[63px] text-white font-semibold cursor-pointer"
            >
                Áp dụng
            </button>
        </div>
    </div>
</template>
<style scoped>
@media (max-width: 500px) {
    .box-mobile-search {
        flex-wrap: wrap;
        width: 100%;
        justify-content: center;
    }
    .box-mobile-search div {
        width: 100%;
    }
    .box-mobile-search input {
        width: 100%;
    }
    .line-distance {
        display: none;
    }
    .input-price-filter {
        width: 100%;
    }
}
</style>
