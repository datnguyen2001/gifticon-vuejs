<script setup>
import iconSearch from "@/assets/icon-search.png";
import iconHeart from "@/assets/icon-heart.png";
import iconCart from "@/assets/icon-cart.png";
</script>
<template>
    <header
        class="w-full border-b border-[#0E0E0E2E] border-solid fixed z-10 bg-white top-0"
    >
        <div class="max-w-[1400px] w-full md:px-3 px-2 m-auto">
            <div class="flex items-center justify-between pt-2 md:mt-0">
                <div
                    class="text-logo font-semibold text-[#F1641E] lg:text-[40px] md:text-[34px] text-[28px]"
                >
                    Gifticon
                </div>
                <div class="md:w-[50%] w-[60%] relative">
                    <input
                        type="text"
                        placeholder="Tìm kiếm bất cứ thứ gì"
                        class="input-search-header w-full md:h-[48px] h-[40px] pl-4 md:pr-12 pr-11 border-black border border-solid rounded-[99px] text-black"
                    />
                    <button
                        class="absolute right-[5px] top-[50%] translate-y-[-50%] flex items-center justify-center md:w-[38px] md:h-[38px] w-[32px] h-[32px] rounded-[50%] bg-[#F1641E]"
                    >
                        <img
                            :src="iconSearch"
                            alt=""
                            class="md:w-[22px] w-[18px]"
                        />
                    </button>
                </div>
                <div class="right-cart-like md:flex hidden items-center gap-6">
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
