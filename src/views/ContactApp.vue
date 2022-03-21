<template>
	<section class="contact-app">
		<h3>Contacts</h3>
		<ContactFilter @set-filter="setFilter" />
		<ContactList :contacts="contactsToShow" />
	</section>
</template>

<script>
import contactService from '@/services/contact.service.js';
import ContactList from '@/components/contact/ContactList.vue';
import ContactFilter from '@/components/contact/ContactFilter.vue';
	export default {
		components: {
			ContactList,
			ContactFilter
		},
		data() {
			return {
				contacts: null,
				filterBy: null
			};
		},
		created() {
			this.contacts = contactService.getContacts();
		},
		methods: {
			setFilter(filterBy) {
				this.filterBy = filterBy;
			}
		},
		computed: {
			contactsToShow() {
				if(!this.filterBy) return this.contacts;
				const regex = new RegExp(this.filterBy.name, 'i');
				return this.contacts.filter(contact => regex.test(contact.name || contact.email));
			}
		}

	};
</script>

<style></style>
