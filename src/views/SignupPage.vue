<template>
	<section class="signup-page">
        <h3>Signup</h3>
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

<style></style>
