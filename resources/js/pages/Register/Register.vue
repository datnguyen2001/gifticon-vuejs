<script setup>
import iconZalo from "@/assets/icon-zalo.png";
import iconFacebook from "@/assets/icon-fb.png";
import iconEmail from "@/assets/icon-email.png";
</script>
<template>
    <div class="w-full h-full flex items-center justify-center flex-col gap-4">
        <div class="w-[48px] h-[48px] rounded-[50%] bg-[#C4C4C4]"></div>
        <p
            class="text-[#333333] font-medium lg:text-[38px] md:text-[30px] text-[22px]"
        >
            Đăng nhập
        </p>
        <div
            class="w-full flex-col flex lg:flex-row justify-center items-center lg:gap-7 gap-4"
        >
            <div class="w-full md:max-w-[400px] flex flex-col gap-5">
                <p
                    class="text-center text-[#111111] font-medium md:text-[24px] text-[18px] lg:inline-block hidden"
                >
                    Đăng nhập
                </p>
                <div class="flex flex-col gap-1">
                    <span
                        class="text-[#666666] font-normal md:text-[16px] text-[14px]"
                        >Số điện thoại</span
                    >
                    <input
                        type="text"
                        class="w-full border border-gray-300 rounded-[8px] p-3 outline-none md:text-[16px] text-[14px]"
                    />
                </div>
                <div class="flex flex-col gap-1">
                    <span
                        class="text-[#666666] font-normal md:text-[16px] text-[14px]"
                        >Mật khẩu</span
                    >
                    <input
                        type="text"
                        class="w-full border border-gray-300 rounded-[8px] p-3 outline-none md:text-[16px] text-[14px]"
                    />
                </div>
                <button
                    class="outline-none bg-[#c3c3c3] text-[white] rounded-[32px] p-3 lg:text-[22px] md:text-[18px] text-[16px] font-medium"
                >
                    Đăng nhập
                </button>
            </div>
            <div
                class="w-full lg:w-auto flex lg:flex-col flex-row lg:gap-4 gap-5 items-center justify-center lg:my-0 my-5"
            >
                <div
                    class="lg:h-[180px] lg:w-[2px] h-[2px] w-[50%] md:max-w-[190px] max-w-[150px] border-[1px] border-solid border-[#66666640]"
                ></div>
                <span>Hoặc</span>
                <div
                    class="lg:h-[180px] lg:w-[2px] h-[2px] w-[50%] md:max-w-[190px] max-w-[150px] border-[1px] border-solid border-[#66666640]"
                ></div>
            </div>
            <div
                class="flex flex-col items-center justify-center md:gap-5 gap-4"
            >
                <button
                    class="outline-none text-[#333333] rounded-[32px] p-3 lg:text-[22px] md:text-[18px] text-[16px] font-medium border border-[#333333] w-[400px] max-w-[96%] flex items-center justify-center gap-2"
                >
                    <img :src="iconZalo" class="w-[24px] h-[24px]" />
                    Đăng nhập bằng Zalo
                </button>
                <button
                    class="outline-none text-[#333333] rounded-[32px] p-3 lg:text-[22px] md:text-[18px] text-[16px] font-medium border border-[#333333] w-[400px] max-w-[96%] flex items-center justify-center gap-2"
                >
                    <img :src="iconFacebook" class="w-[24px] h-[24px]" />
                    Đăng nhập bằng Facebook
                </button>
                <button
                    class="outline-none text-[#333333] rounded-[32px] p-3 lg:text-[22px] md:text-[18px] text-[16px] font-medium border border-[#333333] w-[400px] max-w-[96%] flex items-center justify-center gap-2"
                >
                    <img :src="iconEmail" class="w-[24px] h-[24px]" />
                    Đăng nhập bằng Email
                </button>
            </div>
        </div>
        <div
            class="w-full flex items-center justify-center gap-2 md:text-[18px] text-[16px] font-medium text-[#111111] md:my-[24px] my-[16px]"
        >
            <p>Bạn chưa có tài khoản?</p>
            <router-link to="/dang-ky">Đăng ký</router-link>
        </div>
        <div class="text-[#666666] font-normal md:text-[16px] text-[14px] mb-6">
            <p class="text-center">
                Đăng nhập an toàn bằng reCAPTCHA tuân theo
            </p>
            <p class="text-center">Google Điều khoản & Quyền riêng tư</p>
        </div>
    </div>
</template>
