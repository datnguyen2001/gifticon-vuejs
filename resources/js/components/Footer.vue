<script>
import bgFooter from "@/assets/bg-footer.png";
import iconPhone from "@/assets/icon-phone.png";

export default {
    data() {
        return {
            bgFooter,
            iconPhone,
        };
    },
};
</script>

<template>
    <footer
        class="w-full bg-no-repeat pt-8 mt-10"
        :style="{ backgroundImage: `url(${bgFooter})` }"
    >
        <div class="w-[1400px] m-auto">
            <div class="text-logo font-semibold text-[#F1641E] text-[40px]">
                Gifticon
            </div>
            <div class="text-[#9A9EA6] pb-5">
                Giftycon Ứng dụng thẻ quà tặng giúp người dùng dễ dàng lựa chọn,
                gửi và sử dụng thẻ quà tặng cho nhiều mục tiêu như mua sắm, ăn
                uống, hay làm đẹp. Chỉ cần thao tác trên điện thoại hoặc trang
                web, bạn có thể nhận được quà nhanh chóng và tiện lợi, phù hợp
                mọi dịp
            </div>
            <div class="flex justify-between items-start pt-5">
                <div class="w-1/3 flex gap-2">
                    <img :src="iconPhone" alt="" class="w-[32px] h-[32px]" />
                    <div class="flex flex-col gap-1">
                        <span class="text-[#9A9EA6] text-[14px]"
                            >Điện thoại</span
                        >
                        <span class="text-[#F1641E] text-[16px] font-medium"
                            >0123456789</span
                        >
                    </div>
                </div>
                <div class="w-1/3 flex gap-2">
                    <img :src="iconPhone" alt="" class="w-[32px] h-[32px]" />
                    <div class="flex flex-col gap-1">
                        <span class="text-[#9A9EA6] text-[14px]"
                            >Điện thoại</span
                        >
                        <span class="text-[#F1641E] text-[16px] font-medium"
                            >0123456789</span
                        >
                    </div>
                </div>
                <div class="w-1/3 flex gap-2">
                    <img :src="iconPhone" alt="" class="w-[32px] h-[32px]" />
                    <div class="flex flex-col gap-1">
                        <span class="text-[#9A9EA6] text-[14px]"
                            >Điện thoại</span
                        >
                        <span class="text-[#F1641E] text-[16px] font-medium"
                            >0123456789</span
                        >
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>
<style>
.footer-bg {
    background-image: bgFooter;
}
</style>
