<script>
import Footer from "@/components/Footer.vue";
import Header from "@/components/Header.vue";
export default {
    name: "Basket",
    components:{
        Footer, Header
    }
}


</script>

<template>
  <Header></Header>
    <main>
        <section class="basket">
            <div class="container">
                <h1 class="basket_title">Корзина</h1>
                <div class="basket_info">
                    <div class="basket_info_item">
                        <p class="basket_p">Ваш тур</p>
                        <p class="basket_p2">Челябинск - Вашингтон</p>
                        <P class="basket_p2">24.02.25</P>
                        <p class="basket_p2">Чтобы узнать подробную информацию <br> войдите в личный кабинет</p>
                    </div>

                    <img src="/img/washington.png" alt="" class="basket_img">
                </div>


            </div>


        </section>

    </main>
  <Footer></Footer>

</template>

<style>

</style>