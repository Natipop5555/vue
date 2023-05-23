<script>
export default {
    name: "Header",

}
</script>

<template>
    <header class="header">
        <div class="header__content">
            <ul class="header__menu__list">
                <li class="header_menu_item">
                    <router-link to="/regist" class="header_link header_link_second">Регистрация</router-link>
                </li>
                <li class="header_menu_item">
                    <router-link to="/autho" class="header_link">Авторизация</router-link>
                </li>
                <li class="header_menu_item">
                    <router-link to="/catalog" class="header_link header_link_first">Каталог</router-link>
                </li>
                <li class="header_menu_item">
                    <router-link to="/"><img src="@/assets/img/logo.png" alt="logo" class="logo"></router-link>
                </li>
                <li class="header_menu_item">
                    <router-link to="/basket" class="header_link">Корзина</router-link>
                </li>
                <li class="header_menu_item">
                    <router-link to="/reviews" class="header_link">Отзывы</router-link>
                </li>
            </ul>
            <div class="header_menu_btn">
                <input type="text" name="" id="" class="header_input">
                <button class="menu_btn">Поиск</button>
            </div>
        </div>
    </header>


</template>

<style>

</style>