<script>
import Footer from "@/components/Footer.vue";
import Header from "@/components/Header.vue";
export default {
    name: "Reviews",
    components:{
        Footer, Header
    }
}

</script>


<template>
    <Header></Header>

    <main>
        <section class="reviews">
            <div class="container">

                <h1 class="reviews_title">Отзывы</h1>
                <img src="@/assets/img/Rectangle.png" alt="" class="reviews_title_img">
                <p class="reviews_p">Ваш отзыв важен для нас</p>
                <div class="reviews_form">
                    <div class="reviews_form_item">
                        <input type="text" placeholder="Имя" class="reviews_input_const reviews_input">
                        <input type="text" placeholder="Фамилия" class="reviews_input_const reviews_input">
                        <input type="text" placeholder="Телефон" class="reviews_input_const">

                    </div>
                    <input type="text" placeholder="Отзыв" class="reviews_input2">
                    <button class="reviews_btn">Отправить отзыв</button>
                </div>
                <div class="ready__made__reviews">
                    <div class="speech_form">
                        <div class="speech speech_1">
                            <p class="speech_text_into">fjhnsdjghjsdhn</p>
                        </div>
                        <div class="speech_form_item_const">
                            <img src="@/assets/img/avatar_1.png" alt="аватар" class="speech_img">
                            <div class="speech_form_text">
                                <p class="speech_text">Иван Петров</p>
                                <p class="speech_data">17.05.2023</p>
                            </div>
                        </div>

                    </div>

                    <div class="speech_form">
                        <div class="speech speech_2">
                            <p class="speech_text_into">fjhnsdjghjsdhn</p>
                        </div>
                        <div class="speech_form_item speech_form_item_const">
                            <img src="@/assets/img/avatar_1.png" alt="аватар" class="speech_img">
                            <div class="speech_form_text">
                                <p class="speech_text">Иван Петров</p>
                                <p class="speech_data">17.05.2023</p>
                            </div>
                        </div>

                    </div>

                </div>
                <div class="ready__made__reviews">
                    <div class="speech_form">
                        <div class="speech speech_3">
                            <p class="speech_text_into">fjhnsdjghjsdhn</p>
                        </div>
                        <div class="speech_form_item_const">
                            <img src="@/assets/img/avatar_1.png" alt="аватар" class="speech_img">
                            <div class="speech_form_text">
                                <p class="speech_text">Иван Петров</p>
                                <p class="speech_data">17.05.2023</p>
                            </div>
                        </div>

                    </div>

                    <div class="speech_form">
                        <div class="speech speech_4">
                            <p class="speech_text_into">fjhnsdjghjsdhn</p>
                        </div>
                        <div class="speech_form_item speech_form_item_const">
                            <img src="@/assets/img/avatar_1.png" alt="аватар" class="speech_img">
                            <div class="speech_form_text">
                                <p class="speech_text">Иван Петров</p>
                                <p class="speech_data">17.05.2023</p>
                            </div>
                        </div>

                    </div>

                </div>


            </div>



        </section>
    </main>

    <Footer></Footer>

</template>

<style>

</style>