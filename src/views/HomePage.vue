<template>
	<section class="home-page">
		<h1>Home Page</h1>
        <p>Hello {{user.name}}</p>
        <p>You currently have {{user.coins}} bitcoins</p>
	</section>
</template>

<script>
	import userService from '@/services/user.service.js';
	import bitcoinService from '@/services/bitcoin.service.js';
	export default {
        components: {

        },
        data() {
            return {
                user: null,
                rate: null
            };
        },
        created() {
            this.user = userService.getUser();
        },
        methods: {
        }
    };
</script>

<style></style>
