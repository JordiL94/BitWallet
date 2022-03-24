<template>
	<section v-if="user" class="home-page">
		<h1>Home Page</h1>
        <p>Hello {{user.name}}</p>
        <p>You currently have {{user.coins}} bitcoins</p>
	</section>
</template>

<script>
	import bitcoinService from '@/services/bitcoin.service.js';
	export default {
        components: {
            bitcoinService
        },
        data() {
            return {
                rate: null
            };
        },
        computed: {
            user() {
                return this.$store.getters.user;
            }
        },
        methods: {
        }
    };
</script>

<style></style>
