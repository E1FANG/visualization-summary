<script setup>
import { debounce } from 'lodash-es'
import { onMounted, ref, toRef, watch, onBeforeUnmount } from 'vue'
import Highcharts from 'highcharts/highstock'

// import Highcharts from 'highcharts/highcharts'
import Highcharts3D from 'highcharts/highcharts-3d'
import wordcloud from 'highcharts/modules/wordcloud'

wordcloud(Highcharts)
Highcharts3D(Highcharts)

const props = defineProps({
  option: {
    type: Object,
    default: () => ({})
  }
})

const option = toRef(props, 'option')

const instance = ref(null)
const container = ref(null)

const init = () => {
  instance.value = Highcharts.chart(container.value, option.value)
}

const update = () => {
  instance.value.update(option.value)
}

watch(option, () => {
  update()
})

onMounted(() => {
  init()
})

const resize = () => {
  if (container.value) {
    instance.value && instance.value.reflow()
  }
}

onMounted(() => {
  window.addEventListener(
    'resize',
    debounce(resize, 500)
  )
})

onBeforeUnmount(() => {
  if (instance.value) {
    instance.value.destroy()
    window.removeEventListener(
      'resize',
      debounce(resize, 500)
    )
  }
})
</script>

<template>
  <div
    ref="container"
  ></div>
</template>

<style lang="scss" scoped>

</style>