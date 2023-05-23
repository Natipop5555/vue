<script >
import Footer from "@/components/Footer.vue";
import Header from "@/components/Header.vue";
export default {
    name: "Registration",
    components:{
        Footer, Header
    },
    data(){
        return{
            validationError: false,
            error: '',
            formData: {
                first_name: '',
                last_name: '',
                phone: '',
                email: '',
                password: '',
                password_correct: '',

            }
        }
    },
    methods: {
         async register(){
             this.validationError = false
            if (this.formData.password === this.formData.password_correct) {
                let result = await fetch('http://Api example/routes/register.php', {
                    method: 'POST',
                    body: JSON.stringify(this.formData)
                })

                let json = await result.json()

                console.log(json)
                if(result.ok) this.$router.push('/login')

            } else {
                this.validationError = true
                this.error = 'password not correct'
            }
            console.log(this.formData)
        }
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
                        <img src="@/assets/img/Rectangle.png" alt="" class="registration_img">
                        <p class="registration_text_p">Быстро и удобно, в один клик</p>
                        <div style="color: red; text-align: center" v-if="validationError">
                            {{error}}
                        </div>
                        <form action="#" class="registration_form">
                            <label>
                                <input v-model="formData.first_name" type="text" placeholder="Имя" class="registration_input" required>
                            </label>
                            <label>
                                <input v-model="formData.last_name" type="text" placeholder="Фамилия" class="registration_input" required>
                            </label>
                            <label>
                                <input v-model="formData.phone" type="number" placeholder="Номер телефона" class="registration_input" required>
                            </label>
                            <label>
                                <input v-model="formData.email" type="email" placeholder="Email" class="registration_input">
                            </label>
                            <label>
                                <input v-model="formData.password" type="password" placeholder="Пароль" class="registration_input" required>
                            </label>
                            <label>
                                <input v-model="formData.password_correct" type="password" placeholder="Повторите пароль" class="registration_input" required>
                            </label>
                            <input type="submit" @click="register" placeholder="Отправить" class="registration_btn">
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