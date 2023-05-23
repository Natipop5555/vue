<script>
import Footer from "@/components/Footer.vue";
import Header from "@/components/Header.vue";
export default {
    name: "Autho",
    data(){
        return{
            formData: {
                name: '',
                email: '',
                password: ''
            }
        }
    },
    methods: {
        async login(){
            let result = await fetch('http://Api example/routes/login.php', {
                method: 'POST',
                body: JSON.stringify(this.formData)
            })

            let json = await result.json()

            if(result.ok) {
                localStorage.setItem('user', JSON.stringify(json.userData))
                this.$router.push('/personal')
            }

        }
    },
    components:{
        Footer, Header
    }
}

</script>

<template>
    <Header></Header>
    <main>
        <section class="authorization">
            <div class="container">
                <div class="autho__info">
                    <div class="autho_text">
                        <h1 class="autho_title">Авторизация</h1>
                        <img src="@/assets/img/Rectangle.png" alt="" class="autho_img">
                        <p class="autho_text_p">Войдите в свой аккаунт за 1 секунду</p>
                        <form action="#" class="autho_form">
                            <label>
                                <input v-model="formData.name" type="text" placeholder="Имя" class="autho_input">
                            </label>
                            <label>
                                <input v-model="formData.email" type="email" placeholder ="Email" class="autho_input">
                            </label>
                            <label>
                                <input v-model="formData.password" type="password" placeholder ="Пароль" class="autho_input">
                            </label>
                            <button @click="login" class="autho_btn">Войти</button>
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