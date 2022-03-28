<template>
	<section class="contact-preview">
		<RouterLink :to="`/contact/${contact._id}`" class="flex">
        <img src="../../assets/img/google-contacts.png" />
			<div>
				<h4>{{ contact.name }}</h4>
				<p>{{ contact.phone }}</p>
			</div>
		</RouterLink>
	</section>
</template>

<script>
	export default {
		props: {
			contact: Object,
		},
	};
</script>
