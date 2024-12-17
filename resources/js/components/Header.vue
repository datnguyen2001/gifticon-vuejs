<script>
import iconSearch from "@/assets/icon-search.png";
import iconHeart from "@/assets/icon-heart.png";
import iconCart from "@/assets/icon-cart.png";

export default {
    data() {
        return {
            iconSearch,
            iconHeart,
            iconCart,
        };
    },
};
</script>
<template>
    <header class="w-full border-b border-[#0E0E0E2E] border-solid">
        <div class="max-w-[1400px] px-3 m-auto">
            <div class="flex items-center justify-between">
                <div class="text-logo font-semibold text-[#F1641E] text-[40px]">
                    Gifticon
                </div>
                <div class="box-search-header w-[50%] relative">
                    <input
                        type="text"
                        placeholder="Tìm kiếm bất cứ thứ gì"
                        class="input-search-header w-full h-[48px] pl-4 pr-12 border-black border border-solid rounded-[99px] text-black"
                    />
                    <button
                        class="absolute right-[5px] top-[50%] translate-y-[-50%] flex items-center justify-center w-[38px] h-[38px] rounded-[50%] bg-[#F1641E]"
                    >
                        <img :src="iconSearch" alt="" class="w-[22px]" />
                    </button>
                </div>
                <div class="right-cart-like flex items-center gap-6">
                    <a href="#" class="text-[15px] cursor-pointer font-semibold"
                        >Đăng nhập</a
                    >
                    <img
                        :src="iconHeart"
                        alt=""
                        class="w-[24px] cursor-pointer"
                    />
                    <img
                        :src="iconCart"
                        alt=""
                        class="w-[24px] cursor-pointer"
                    />
                </div>
            </div>
            <div class="flex w-full justify-center py-2 gap-6">
                <a href="" class="text-[15px] font-semibold"
                    >Tất cả thương hiệu</a
                >
                <a href="" class="text-[15px] font-semibold">Quà của tôi</a>
                <a href="" class="text-[15px] font-semibold">Đăng ký</a>
            </div>
        </div>
    </header>
</template>

<style></style>
