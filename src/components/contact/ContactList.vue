<template>
  <section class="contact-list">
      <ul class="clean-list flex column justify-center">
          <li v-for="contact in contacts" :key="contact._id" contact="contact-preview-container flex">
              <ContactPreview :contact="contact" />
          </li>
      </ul>
  </section>
</template>

<script>
import ContactPreview from '@/components/ContactPreview.vue';
export default {
    props: {
        contacts: Array
    },
    components: {
        ContactPreview
    },
}
</script>

<style>

</style>