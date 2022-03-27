<template>
	<section class="transfer-fund">
        <form @submit.prevent="transferCoins">
            <input type="number" v-model="amountToTransfer" />
            <button>transfer</button>
        </form>
    </section>
</template>

<script>
	export default {
        data() {
            return {
                amountToTransfer: null
            }
        },
		props: {
			maxCoins: Number,
			contact: Object,
		},
		methods: {
			transferCoins() {
                if(this.amountToTransfer > this.maxCoins) return;
				this.$emit('transferCoins', this.amountToTransfer);
			},
		},
	};
</script>