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
        <div class="max-w-[1300px] w-full m-auto px-3 lg:px-5 2xl:px-0">
            <div
                class="text-logo font-semibold text-[#F1641E] lg:text-[40px] md:text-[34px] text-[28px]"
            >
                Gifticon
            </div>
            <div class="text-[#9A9EA6] pb-5">
                Giftycon Ứng dụng thẻ quà tặng giúp người dùng dễ dàng lựa chọn,
                gửi và sử dụng thẻ quà tặng cho nhiều mục tiêu như mua sắm, ăn
                uống, hay làm đẹp. Chỉ cần thao tác trên điện thoại hoặc trang
                web, bạn có thể nhận được quà nhanh chóng và tiện lợi, phù hợp
                mọi dịp
            </div>
            <div
                class="flex justify-between items-start flex-wrap md:pt-5 pt-3"
            >
                <div class="md:w-1/3 w-1/2 flex gap-2">
                    <img :src="iconPhone" alt="" class="w-[32px] h-[32px]" />
                    <div class="flex flex-col md:gap-1">
                        <span class="text-[#9A9EA6] text-[14px]"
                            >Điện thoại</span
                        >
                        <span
                            class="text-[#F1641E] md:text-[16px] text-[14px] font-medium"
                            >0123456789</span
                        >
                    </div>
                </div>
                <div class="md:w-1/3 w-1/2 flex gap-2">
                    <img :src="iconMail" alt="" class="w-[32px] h-[32px]" />
                    <div class="flex flex-col md:gap-1">
                        <span class="text-[#9A9EA6] text-[14px]">Email</span>
                        <span
                            class="text-[#F1641E] md:text-[16px] text-[14px] font-medium"
                            >ILvietnam@gmail.com</span
                        >
                    </div>
                </div>
                <div class="md:w-1/3 w-full flex gap-2 mt-3 md:mt-0">
                    <img :src="iconMap" alt="" class="w-[32px] h-[32px]" />
                    <div class="flex flex-col md:gap-1">
                        <span class="text-[#9A9EA6] text-[14px]">Địa chỉ</span>
                        <span
                            class="text-[#F1641E] md:text-[16px] text-[14px] font-medium"
                            >V7-B7 The Terra An Hưng La Khe, Hà Đông, Hà
                            Nội</span
                        >
                    </div>
                </div>
            </div>

            <div
                class="flex justify-between items-start flex-wrap md:mt-16 mt-8"
            >
                <div class="w-1/2 md:w-1/3 flex flex-col lg-gap-2 gap-1 mb-4">
                    <p
                        class="lg:pb-3 pb-2 lg:text-[20px] text-[16px] font-semibold"
                    >
                        Kết nối với chúng tôi
                    </p>
                    <div
                        v-for="item in items"
                        :key="item.id"
                        class="text-[14px] lg:text-[16px]"
                    >
                        Các câu hỏi thường gặp
                    </div>
                </div>
                <div class="w-1/2 md:w-1/3 flex flex-col lg-gap-2 gap-1 mb-4">
                    <p
                        class="lg:pb-3 pb-2 lg:text-[20px] text-[16px] font-semibold"
                    >
                        Kết nối với chúng tôi
                    </p>
                    <div
                        v-for="item in items"
                        :key="item.id"
                        class="text-[14px] lg:text-[16px]"
                    >
                        Các câu hỏi thường gặp
                    </div>
                </div>
                <div class="w-full md:w-1/3 flex flex-col lg-gap-2 gap-1 mb-4">
                    <p
                        class="lg:pb-3 pb-2 lg:text-[20px] text-[16px] font-semibold"
                    >
                        Kết nối với chúng tôi
                    </p>
                    <div
                        v-for="item in items"
                        :key="item.id"
                        class="text-[14px] lg:text-[16px]"
                    >
                        Các câu hỏi thường gặp
                    </div>
                </div>
            </div>
        </div>
        <div class="relative mt-4">
            <img :src="bgFooterBottom" alt="" class="w-full" />
            <div
                class="absolute top-[60%] left-[50%] translate-y-[-50%] translate-x-[-50%] max-w-[1300px] text-[12px] md:text-[16px] px-5 2xl:px-0 w-full m-auto text-[#FFFFFF]"
            >
                © 2023. All Rights Reserved..
            </div>
        </div>
    </footer>
</template>
