<template>
  <section class="contact-preview">
      <RouterLink :to="`contact/${contact._id}`">{{contact.name}}</RouterLink>
  </section>
</template>

<script>
export default {
    props: {
        contact: Object
    },
}
</script>

<style>

</style>