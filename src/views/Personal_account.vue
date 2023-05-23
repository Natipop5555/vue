<script>
import Footer from "@/components/Footer.vue";
import Header from "@/components/Header.vue";
export default {
    name: "Personal_account",
    data(){
        return{
            userData: {}
        }
    },
    methods: {
        async get(){

        }
    },
    mounted() {
        this.userData = JSON.parse(localStorage.user)
    },
    components:{
        Footer, Header
    }
}

</script>

<template>
    <Header></Header>
    <main>
        <section class="personal_account">
            <div class="container">
                <div class="info">
                    <h1 class="profile">Профиль</h1>
                    <img src="@/assets/img/black_avatar.png" alt="пустой аватар" class="avatar">
                    <p class="profile_text">Имя: {{userData.name}}</p>
                    <p class="profile_text">Фамилия: {{userData.surname}}</p>
                    <p class="profile_text">Телефон:</p>
                    <p class="profile_text">Email:</p>
                    <h2 class="resresh_profile">Редактировать профиль</h2>
                    <input id="file-input" type="file" name="file">
                </div>




            </div>


        </section>

    </main>
    <Footer></Footer>
</template>

<style>

</style>