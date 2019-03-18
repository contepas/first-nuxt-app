<template>
  <div>
    <h5>I'm available in every "event" component!</h5>
    <p>My name is {{ $store.state.profile_info.name }}</p>
    <div>
      <div class="content">
        <NuxtChild />
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  async fetch({ store }) {
    await store.dispatch('getProfileInfo')
  },
  methods: {
    ...mapActions
  }
}
</script>

<style scoped></style>
