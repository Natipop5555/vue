<script>
import Footer from "@/components/Footer.vue";
import Header from "@/components/Header.vue";
export default {
    name: "Catalogue",
    components:{
        Footer, Header
    },
}
</script>

<template>
  <Header></Header>
    <main>

        <section class="catalogue">
            <div class="container">
                <div class="catal_title_block">
                    <h1 class="catal_title">Страны</h1>
                    <img src="@/assets/img/Rectangle.png" alt="линия" class="title_img">
                </div>
                <div class="catal_card">
                    <div class="catal_card_item">
                        <img src="@/assets/img/tai.jpg" alt="" class="catal_img">
                        <p class="catal_card_title">Таиланд</p>
                        <p class="catal_card_desc">Отдыхайте душой и телом</p>
                        <button class="catal_card_btn"><router-link to="/tour" class="catal_card_a">Подробнее</router-link></button>
                    </div>
                    <div class="catal_card_item">
                        <img src="@/assets/img/france.jpeg" alt="" class="catal_img">
                        <p class="catal_card_title">Франция</p>
                        <p class="catal_card_desc">Отдыхайте душой и телом</p>
                        <button class="catal_card_btn"><router-link to="/tour" class="catal_card_a">Подробнее</router-link></button>

                    </div>
                    <div class="catal_card_item_const">
                        <img src="@/assets/img/turkey.jpeg" alt="" class="catal_img">
                        <p class="catal_card_title">Турция</p>
                        <p class="catal_card_desc">Отдыхайте душой и телом</p>
                        <button class="catal_card_btn"><router-link to="/tour" class="catal_card_a">Подробнее</router-link></button>
                    </div>
                </div>
                <div class="catal_card">
                    <div class="catal_card_item">
                        <img src="@/assets/img/mexico.jpeg" alt="" class="catal_img">
                        <p class="catal_card_title">Мексика</p>
                        <p class="catal_card_desc">Отдыхайте душой и телом</p>
                        <button class="catal_card_btn"><router-link to="/tour" class="catal_card_a">Подробнее</router-link></button>
                    </div>
                    <div class="catal_card_item">
                        <img src="@/assets/img/japan.jpeg" alt="" class="catal_img">
                        <p class="catal_card_title">Япония</p>
                        <p class="catal_card_desc">Отдыхайте душой и телом</p>
                        <button class="catal_card_btn"><router-link to="/tour" class="catal_card_a">Подробнее</router-link></button>
                    </div>
                    <div class="catal_card_item_const">
                        <img src="@/assets/img/USA.jpeg" alt="" class="catal_img">
                        <p class="catal_card_title">США</p>
                        <p class="catal_card_desc">Отдыхайте душой и телом</p>
                        <button class="catal_card_btn"><router-link to="/tour" class="catal_card_a">Подробнее</router-link></button>
                    </div>
                </div>
            </div>


        </section>

    </main>
    <Footer></Footer>
</template>

<style>

</style>