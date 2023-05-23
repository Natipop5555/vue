<script>
import Footer from "@/components/Footer.vue"
export default {
    data(){
        return{}
    },
    components: {
        Footer
    },
    methods: {},
}
</script>

<template>

    <header class="header_page1">
        <div class="header__content__page1">
            <ul class="header__menu__list__page1">
                <li class="header_menu_item_page1">
                    <router-link to="/regist" class="header_link_page1 header_link_second_page1">Регистрация</router-link>
                </li>
                <li class="header_menu_item_page1">
                    <router-link to="/autho" class="header_link_page1">Авторизация</router-link>
                </li>
                <li class="header_menu_item_page1">
                    <router-link to="/catalog" class="header_link_page1 header_link_first_page1">Каталог</router-link>
                </li>
                <li class="header_menu_item_page1">
                    <router-link to="/"><img src="@/assets/img/logo.png" alt="logo" class="logo_page1"></router-link>
                </li>
                <li class="header_menu_item_page1">
                    <router-link to="/basket" class="header_link_page1">Корзина</router-link>
                </li>
                <li class="header_menu_item_page1">
                    <router-link to="/reviews" class="header_link_page1">Отзывы</router-link>
                </li>
            </ul>
            <div class="header_menu_btn_page1">
                <input type="text" name="" id="" class="header_input_page1">
                <button class="menu_btn_page1">Поиск</button>
            </div>
        </div>
        <div class="header__hero">
            <p class="header_title_mini">Турагентство</p>
            <img src="@/assets/img/Comfort.png" alt="logo__img" class="header_title">
            <div class="header_buttons">
                <router-link to="/tour"><button class="header_btn1">КУПИТЬ ТУР</button></router-link>
                <router-link to="/personal"><button class="header_btn2">ЛИЧНЫЙ КАБИНЕТ</button></router-link>
            </div>
        </div>
    </header>
    <main>
        <section class="about">
            <div class="container">
                <div class="about__info">
                    <div class="about__text">
                        <h1 class="about_title">О нас</h1>
                        <img src="@/assets/img/Rectangle.png" alt="blue__line" class="about_text_img">
                        <p class="about_text_p">Выбирайте Comfort</p>
                        <p class="about_text_p2">Турагентство ComfortTravel сделает ваше путешествие безопасным, <br> ярким
                            и комфортным.</p>
                        <p class="about_text_p2">Мы на рынке с 2020 года и уже входим в ТОП-5 лучших тургагентств <br>
                            страны. Мы сотрудничаем с такими компаниями как: Pegas Touristik, <br> Tez-Tour, Anex Tour,
                            Sunmar и др.</p>
                    </div>
                    <img src="@/assets/img/beach.png" alt="пляж" class="about_img">
                </div>
            </div>
        </section>
        <section class="our__team">
            <p class="our_team_title_mini">Наша команда</p>
            <div class="container">
                <div class="slider" id="slider">
                    <div class="our__team__info">
                        <img src="@/assets/img/director.png" alt="директор" class="our_team_img">
                        <div class="our__team__text">
                            <h1 class="our_team_h">Директор</h1>
                            <p class="our_team_p">Самойлова Татьяна Николаевна</p>
                            <p class="our_team_p2">Стаж работы: 10 лет. <br> samoilova@mail.ru <br> +79226457328</p>
                        </div>

                    </div>
                    <div class="our__team__info">
                        <img src="@/assets/img/manager.png" alt="менеджер" class="our_team_img">
                        <div class="our__team__text">
                            <h1 class="our_team_h">Главный менеджер</h1>
                            <p class="our_team_p">Аметова Алина Алишеровна</p>
                            <p class="our_team_p2">Стаж работы: 7 лет. <br> ametova@mail.ru <br> +79229446270</p>
                        </div>
                    </div>
                    <div class="our__team__info">
                        <img src="@/assets/img/main_manager.png" alt="главный менеджер" class="our_team_img">
                        <div class="our__team__text">
                            <h1 class="our_team_h">Менеджер</h1>
                            <p class="our_team_p">Невская Полина Валерьевна</p>
                            <p class="our_team_p2">Стаж работы: 5 лет. <br> nevska@mail.ru <br> +79228361945</p>
                        </div>
                    </div>
                    <div class="our__team__info">
                        <img src="@/assets/img/agent.png" alt="агент по бронированию" class="our_team_img">
                        <div class="our__team__text">
                            <h1 class="our_team_h">Агент по бронированию</h1>
                            <p class="our_team_p">Иванов Дмитрий Викторович</p>
                            <p class="our_team_p2">Стаж работы: 8 лет. <br> ivanov@mail.ru <br> +79220581937</p>
                        </div>
                    </div>
                </div>

            </div>

        </section>
        <section class="address">
            <div class="container">
                <div class="address__info">
                    <div class="address__text">
                        <h1 class="address_title">Адреса</h1>
                        <img src="@/assets/img/Rectangle.png" alt="blue__line" class="about_text_img">
                        <p class="address_text_p">Главный филиал - г.Челябинск, ул.Сулимова 94В</p>
                        <p class="address_text_p2">г. Челябинск, ул.Свободы 72Б <br> г.Челябинск, ул.Володарского 15Г <br>
                            г.Москва, ул.Моховая 5А <br> Подробную информацию можно узнать в одной из соцсетей.</p>

                    </div>

                </div>

            </div>
            <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Ab9162b310a6d702a40af98aa34042ef6d6ff59b6b6b4ca57070fe5c0b4be2a7f&amp;source=constructor"
                    width="100%" height="550" frameborder="0"></iframe>
        </section>
    </main>

    <Footer></Footer>

</template>

<style>

</style>
