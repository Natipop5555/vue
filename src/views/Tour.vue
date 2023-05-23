<script>
import Footer from "@/components/Footer.vue";
import Header from "@/components/Header.vue";
export default {
    name: "Tour",
    components:{
        Footer, Header
    },
    data(){
        return{
            basket:{
                count: 0,
            }
        }
    },
    methods: {
    }
}

</script>

<template>
    <Header></Header>
    <main>
        <section class="tour">
            <div class="container_tour">
                <div class="tour__title__block">
                    <h1 class="tour_title">Туры</h1>
                    <img src="@/assets/img/Rectangle.png" alt="" class="tour_title_img">
                </div>
                <div class="tour__card">
                    <div class="tour_card_item">
                        <img src="@/assets/img/seven_seas.jpg" alt="отель" class="hotel_img">
                        <h2 class="tour_card_title">SEVEN SEAS HOTEL LIFE</h2>
                        <img src="@/assets/img/rating.png" alt="рэйтинг" class="tour_rating">
                        <div class="tour_card_info">
                            <div class="tour_card_place">
                                <img src="@/assets/img/plane.png" alt="самолет" class="tour_img">
                                <p class="text_place">Кемер(Kemer)</p>
                            </div>
                            <div class="tour_card_data">
                                <img src="@/assets/img/calendar.png" alt="календарь" class="tour_img">
                                <p class="text_place">25.05.23</p>
                            </div>
                            <div class="tour_card_night">
                                <img src="@/assets/img/moon.png" alt="ночь" class="tour_img">
                                <p class="text_place_const"> 11 ночей</p>
                            </div>
                        </div>
                        <p class="text_tour">от <b>115 000</b> руб./чел</p>
                        <button v-on:click="basket.count++" class="tour_btn">Забронировать</button>
                    </div>


                    <div class="tour_card_item">
                        <img src="@/assets/img/seven_seas.jpg" alt="отель" class="hotel_img">
                        <h2 class="tour_card_title">SEVEN SEAS HOTEL</h2>
                        <img src="@/assets/img/rating.png" alt="рэйтинг" class="tour_rating">
                        <div class="tour_card_info">
                            <div class="tour_card_place">
                                <img src="@/assets/img/plane.png" alt="самолет" class="tour_img">
                                <p class="text_place">Кемер(Kemer)</p>
                            </div>
                            <div class="tour_card_data">
                                <img src="@/assets/img/calendar.png" alt="календарь" class="tour_img">
                                <p class="text_place">25.05.23</p>
                            </div>
                            <div class="tour_card_night">
                                <img src="@/assets/img/moon.png" alt="ночь" class="tour_img">
                                <p class="text_place_const"> 11 ночей</p>
                            </div>
                        </div>
                        <p class="text_tour">от <b>115 000</b> руб./чел</p>
                        <button v-on:click="basket.count++" class="tour_btn">Забронировать</button>
                    </div>

                    <div class="tour_card_item_const">
                        <img src="@/assets/img/seven_seas.jpg" alt="отель" class="hotel_img">
                        <h2 class="tour_card_title">SEVEN SEAS HOTEL LIFE</h2>
                        <img src="@/assets/img/rating.png" alt="рэйтинг" class="tour_rating">
                        <div class="tour_card_info">
                            <div class="tour_card_place">
                                <img src="@/assets/img/plane.png" alt="самолет" class="tour_img">
                                <p class="text_place">Кемер(Kemer)</p>
                            </div>
                            <div class="tour_card_data">
                                <img src="@/assets/img/calendar.png" alt="календарь" class="tour_img">
                                <p class="text_place">25.05.23</p>
                            </div>
                            <div class="tour_card_night">
                                <img src="@/assets/img/moon.png" alt="ночь" class="tour_img">
                                <p class="text_place_const"> 11 ночей</p>
                            </div>
                        </div>
                        <p class="text_tour">от <b>115 000</b> руб./чел</p>
                        <button v-on:click="basket.count++" class="tour_btn">Забронировать</button>
                    </div>

                </div>

                <div class="tour__card">
                    <div class="tour_card_item">
                        <img src="@/assets/img/seven_seas.jpg" alt="отель" class="hotel_img">
                        <h2 class="tour_card_title">SEVEN SEAS HOTEL LIFE</h2>
                        <img src="@/assets/img/rating.png" alt="рэйтинг" class="tour_rating">
                        <div class="tour_card_info">
                            <div class="tour_card_place">
                                <img src="@/assets/img/plane.png" alt="самолет" class="tour_img">
                                <p class="text_place">Кемер(Kemer)</p>
                            </div>
                            <div class="tour_card_data">
                                <img src="@/assets/img/calendar.png" alt="календарь" class="tour_img">
                                <p class="text_place">25.05.23</p>
                            </div>
                            <div class="tour_card_night">
                                <img src="@/assets/img/moon.png" alt="ночь" class="tour_img">
                                <p class="text_place_const"> 11 ночей</p>
                            </div>
                        </div>
                        <p class="text_tour">от <b>115 000</b> руб./чел</p>
                        <button v-on:click="basket.count++" class="tour_btn">Забронировать</button>
                    </div>

                    <div class="tour_card_item">
                        <img src="@/assets/img/seven_seas.jpg" alt="отель" class="hotel_img">
                        <h2 class="tour_card_title">SEVEN SEAS HOTEL LIFE</h2>
                        <img src="@/assets/img/rating.png" alt="рэйтинг" class="tour_rating">
                        <div class="tour_card_info">
                            <div class="tour_card_place">
                                <img src="@/assets/img/plane.png" alt="самолет" class="tour_img">
                                <p class="text_place">Кемер(Kemer)</p>
                            </div>
                            <div class="tour_card_data">
                                <img src="@/assets/img/calendar.png" alt="календарь" class="tour_img">
                                <p class="text_place">25.05.23</p>
                            </div>
                            <div class="tour_card_night">
                                <img src="@/assets/img/moon.png" alt="ночь" class="tour_img">
                                <p class="text_place_const"> 11 ночей</p>
                            </div>
                        </div>
                        <p class="text_tour">от <b>115 000</b> руб./чел</p>
                        <button @click="book" class="tour_btn">Забронировать</button>
                    </div>

                    <div class="tour_card_item_const">
                        <img src="@/assets/img/seven_seas.jpg" alt="отель" class="hotel_img">
                        <h2 class="tour_card_title">SEVEN SEAS HOTEL LIFE</h2>
                        <img src="@/assets/img/rating.png" alt="рэйтинг" class="tour_rating">
                        <div class="tour_card_info">
                            <div class="tour_card_place">
                                <img src="@/assets/img/plane.png" alt="самолет" class="tour_img">
                                <p class="text_place">Кемер(Kemer)</p>
                            </div>
                            <div class="tour_card_data">
                                <img src="@/assets/img/calendar.png" alt="календарь" class="tour_img">
                                <p class="text_place">25.05.23</p>
                            </div>
                            <div class="tour_card_night">
                                <img src="@/assets/img/moon.png" alt="ночь" class="tour_img">
                                <p class="text_place_const"> 11 ночей</p>
                            </div>
                        </div>
                        <p class="text_tour">от <b>115 000</b> руб./чел</p>
                        <button v-on:click="basket.count++" class="tour_btn">Забронировать</button>
                    </div>

                </div>

            </div>
        </section>

    </main>
    <Footer></Footer>

</template>

<style>

</style>