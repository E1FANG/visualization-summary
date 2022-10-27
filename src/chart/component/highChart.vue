<script setup>
import NoData from './noData.vue'
import Chart from './highChartInstance.vue'
import { toRefs } from 'vue'

const props = defineProps({
  option: {
    type: Object,
    default: () => ({})
  },
  source: {
    type: Array,
    default: () => []
  },
  loading: {
    type: Boolean,
    default: false
  }
})

const { option, source } = toRefs(props)

</script>

<template>
  <div
    v-if="loading"
    class="chart-loading-wrapper"
  >
    <div class="loading" />
  </div>
  <div v-else>
    <Chart
      v-if="source && source.length > 0"
      ref="container"
      :option="option"
      class="chart-content"
    ></Chart>
    <NoData v-else />
    <slot name="bg" />
  </div>

</template>

<style lang="scss" scoped>
.chart-content{
  position: relative;
  height: 100%;
}
.chart-loading-wrapper {
  // background-color: rgba(0, 34, 92, 1);
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  .loading {
    width: 150px;
    height: 75px;
    background-image: url('~@/assets/loading.gif');
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
  }
}
</style>