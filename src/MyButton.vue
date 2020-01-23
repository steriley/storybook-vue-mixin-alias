<template>
  <button class="button-styles" @click="onClick">
    <HelloWorld />
    <!-- @slot button content -->
    <slot></slot>
  </button>
</template>

<script>
import HelloWorld from '@/components/HelloWorld';
import emitClick from '@/mixins/emitClick';

export default {
  name: 'my-button',
  components: {
    HelloWorld,
  },
  mixins: [emitClick],
}
</script>

<style>
  .button-styles {
    border: 1px solid #eee;
    border-radius: 3px;
    background-color: #FFFFFF;
    cursor: pointer;
    font-size: 15pt;
    padding: 3px 10px;
    margin: 10px;
  }
</style>
