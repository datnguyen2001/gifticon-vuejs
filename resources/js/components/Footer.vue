<script setup>
import bgFooter from "@/assets/bg-footer.png";
import iconPhone from "@/assets/icon-phone.png";
import iconMap from "@/assets/icon-map.png";
import iconMail from "@/assets/icon-mail.png";
import bgFooterBottom from "@/assets/bg-footer-bottom.png";

let items = [2, 2];
</script>

<template>
    <footer
        class="w-full bg-no-repeat pt-8 mt-10 bg-contain"
        :style="{ backgroundImage: `url(${bgFooter})` }"
    >
        <div class="w-[1300px] m-auto">
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
                    <img :src="iconMail" alt="" class="w-[32px] h-[32px]" />
                    <div class="flex flex-col gap-1">
                        <span class="text-[#9A9EA6] text-[14px]">Email</span>
                        <span class="text-[#F1641E] text-[16px] font-medium"
                            >ILvietnam@gmail.com</span
                        >
                    </div>
                </div>
                <div class="w-1/3 flex gap-2">
                    <img :src="iconMap" alt="" class="w-[32px] h-[32px]" />
                    <div class="flex flex-col gap-1">
                        <span class="text-[#9A9EA6] text-[14px]">Địa chỉ</span>
                        <span class="text-[#F1641E] text-[16px] font-medium"
                            >V7-B7 The Terra An Hưng La Khe, Hà Đông, Hà
                            Nội</span
                        >
                    </div>
                </div>
            </div>

            <div class="flex justify-between items-start mt-16">
                <div class="w-1/3 flex flex-col gap-2">
                    <p class="pb-3 text-[20px] font-semibold">
                        Hỗ trợ khách hàng
                    </p>
                    <div v-for="item in items" :key="item.id">
                        Các câu hỏi thường gặp
                    </div>
                </div>
                <div class="w-1/3 flex flex-col gap-2">
                    <p class="pb-3 text-[20px] font-semibold">Về chúng tôi</p>
                    <div v-for="item in items" :key="item.id">
                        Các câu hỏi thường gặp
                    </div>
                </div>
                <div class="w-1/3 flex flex-col gap-2">
                    <p class="pb-3 text-[20px] font-semibold">
                        Kết nối với chúng tôi
                    </p>
                    <div v-for="item in items" :key="item.id">
                        Các câu hỏi thường gặp
                    </div>
                </div>
            </div>
        </div>
        <div class="relative mt-4">
            <img :src="bgFooterBottom" alt="" class="w-full" />
            <div
                class="absolute top-[60%] left-[50%] translate-y-[-50%] translate-x-[-50%] w-[1300px] m-auto text-[#FFFFFF]"
            >
                © 2023. All Rights Reserved..
            </div>
        </div>
    </footer>
</template>
<style>
.footer-bg {
    background-image: bgFooter;
}
</style>
