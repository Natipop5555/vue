<script >
import Footer from "@/components/Footer.vue";
import Header from "@/components/Header.vue";
export default {
    name: "Registration",
    components:{
        Footer, Header
    }
}
</script>

<template>
    <Header></Header>
    <main>
        <section class="registration">
            <div class="container">
                <div class="registration_info">
                    <div class="registration_text">
                        <h1 class="registration_title">Регистрация</h1>
                        <img src="/img/Rectangle.png" alt="" class="registration_img">
                        <p class="registration_text_p">Быстро и удобно, в один клик</p>
                        <form action="#" class="registration_form">
                            <label>
                                <input type="text" placeholder="Имя" class="registration_input">
                            </label>
                            <label>
                                <input type="text" placeholder="Фамилия" class="registration_input">
                            </label>
                            <label>
                                <input type="number" placeholder="Номер телефона" class="registration_input">
                            </label>
                            <label>
                                <input type="email" placeholder="Email" class="registration_input">
                            </label>
                            <label>
                                <input type="password" placeholder="Пароль" class="registration_input">
                            </label>
                            <label>
                                <input type="password" placeholder="Повторите пароль" class="registration_input">
                            </label>
                            <input type="submit" placeholder="Отправить" class="registration_btn">
                        </form>
                    </div>
                </div>
            </div>


        </section>
    </main>
    <Footer></Footer>

</template>

<style>

</style>