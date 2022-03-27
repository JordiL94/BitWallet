<template>
	<section class="contact-app main-layout">
		<h3>Contacts</h3>
		<ContactFilter @set-filter="setFilter" />
		<ContactList :contacts="contactsToShow" />
	</section>
</template>

<script>
import ContactList from '@/components/contact/ContactList.vue';
import ContactFilter from '@/components/contact/ContactFilter.vue';
	export default {
		components: {
			ContactList,
			ContactFilter
		},
		data() {
			return {
				filterBy: null
			};
		},
		methods: {
			setFilter(filterBy) {
				this.filterBy = filterBy;
			}
		},
		computed: {
			contacts() {
				return this.$store.getters.contacts;
			},
			contactsToShow() {
				if(!this.filterBy) return this.contacts;
				const regex = new RegExp(this.filterBy.name, 'i');
				return this.contacts.filter(contact => regex.test(contact.name || contact.email));
			}
		}

	};
</script>