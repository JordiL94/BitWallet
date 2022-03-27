<template>
	<section class="signup-page main-layout">
        <h3>Signup and start exploring our demo!</h3>
        <p>Just enter your name to recieve complementary coins that allow you to use our services</p>
        <form @submit.prevent="signup(this.name)">
            <input type="text" v-model="this.name" placeholder="Enter your name">
        </form>
    </section>
</template>

<script>
	export default {
        data() {
            return {
                name: ''
            }
        },
        methods: {
            async signup(name) {
                if(name === '') return;
                try {
					await this.$store.dispatch({type: 'signup', name });
					this.$router.push('/');
				} catch(err) {
					console.log('Could not sign up successfully', err);
				}
            }
        },
    };
</script>