<template>
  <div
    v-if="loading"
    class="chart-loading-wrapper"
  >
    <div class="loading" />
  </div>
  <div v-else>
    <chart
      v-if="source && source.length > 0 && !useSlot"
      ref="chart"
      style="height: 100%;"
      :option="option"
      v-on="$listeners"
    />
    <slot v-else-if="source && source.length > 0 && useSlot" />
    <no-data v-else />
    <slot name="bg" />
  </div>
</template>

<script>
import { debounce } from 'lodash-es'
import Chart from './chartInstance.vue'
import NoData from './noData.vue'

export default {
  components: {
    Chart,
    NoData
  },
  props: {
    source: {
      type: Array,
      default: () => []
    },
    option: {
      type: Object,
      default: () => ({})
    },
    loading: {
      type: Boolean,
      default: false
    },
    useSlot: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
    }
  },
  computed: {
    debounceResizeHandler () {
      return debounce(this.resizeHandler, 500)
    }
  },
  mounted () {
    window.addEventListener('resize', this.debounceResizeHandler)
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.debounceResizeHandler)
  },
  methods: {
    resizeHandler () {
      if (this.$refs.chart) {
        this.$refs.chart.resize()
      }
    }
  }
}
</script>

<style lang="scss" scoped>
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
