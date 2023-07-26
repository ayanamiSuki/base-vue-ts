<script setup lang="ts">
  import { ref, computed, reactive } from 'vue'

  const props = defineProps<{ msg: string }>()

  const count = ref(0)
  // const double = computed(() => {
  //   return count.value * 2
  // })
  interface plus {
    data: number
    increase: () => void
    double: number
  }
  const reactiveData: plus = reactive({
    data: 0,
    increase: () => {
      reactiveData.data++
    },
    double: computed(() => reactiveData.data * 2)
  })
</script>

<template>
  <h1>{{ props.msg }}</h1>

  <div class="card">
    <button type="button" @click="reactiveData.increase">count is {{ reactiveData.data }}</button>
    <p>{{ count }}</p>
    <p>reactiveData.double{{ reactiveData.double }}</p>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank">create-vue</a>, the official Vue + Vite
    starter
  </p>
  <p>
    Install
    <a href="https://github.com/vuejs/language-tools" target="_blank">Volar</a>
    in your IDE for a better DX
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>

<style scoped lang="scss">
  .read-the-docs {
    color: #888;
  }
  .card {
    background: linear-gradient(#888, #fff);
    transform: translateY(0);
  }
</style>
