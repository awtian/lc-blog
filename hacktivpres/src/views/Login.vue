<template>
  <div class="login">
    <h1>Please Login Using Facebook!</h1>
    <FBButton />
  </div>
</template>

<script>
import FBButton from '@/components/FBButton.vue'
export default {
  name: 'Login',
  components: {
    FBButton
  }
}
</script>
