<template>
  <q-card-section>
    <q-input
      outlined
      autofocus
      :value="name"
      @input="$emit('update:name', $event)"
      ref="name"
      :rules="[val => !!val || 'Field is required']"
      label="Task name"
    />
  </q-card-section>
</template>

<script>
export default {
  props: ['name']
}
</script>
