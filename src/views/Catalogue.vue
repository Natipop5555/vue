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
            <h1 class="catal_title">Страны</h1>
            <div class="container">
                <div class="catal_card">
                    <div class="catal_card_item">
                        <img src="/img/tai.jpg" alt="" class="catal_img">
                        <p class="catal_card_title">Таиланд</p>
                        <button class="catal_card_btn"><a href="">Подробнее</a></button>
                    </div>
                    <div class="catal_card_item">
                        <img src="/img/france.jpeg" alt="" class="catal_img">
                        <p class="catal_card_title">Франция</p>
                        <button class="catal_card_btn"><a href="">Подробнее</a></button>

                    </div>
                    <div class="catal_card_item">
                        <img src="/img/turkey.jpeg" alt="" class="catal_img">
                        <p class="catal_card_title">Турция</p>
                        <button class="catal_card_btn"><a href="">Подробнее</a></button>
                    </div>
                </div>
                <div class="catal_card2">
                    <div class="catal_card_item">
                        <img src="/img/mexico.jpeg" alt="" class="catal_img">
                        <p class="catal_card_title">Мексика</p>
                        <button class="catal_card_btn"><a href="">Подробнее</a></button>
                    </div>
                    <div class="catal_card_item">
                        <img src="/img/japan.jpeg" alt="" class="catal_img">
                        <p class="catal_card_title">Япония</p>
                        <button class="catal_card_btn"><a href="">Подробнее</a></button>
                    </div>
                    <div class="catal_card_item">
                        <img src="/img/USA.jpeg" alt="" class="catal_img">
                        <p class="catal_card_title">США</p>
                        <button class="catal_card_btn"><a href="">Подробнее</a></button>
                    </div>
                </div>
            </div>


        </section>

    </main>
    <Footer></Footer>
</template>

<style>

</style>