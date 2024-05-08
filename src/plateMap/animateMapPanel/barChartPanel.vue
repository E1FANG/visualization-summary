<script setup>

import { computed, onMounted, ref } from 'vue'
import DataChart from "../../chart/component/dataChart.vue";

import { renderItemFnGenerator, get3DBarOption } from '../../chart/config/render3DBarChart'
const props = defineProps({
  title: {
    type: String,
    default: ''
  },
  currentStreetData: {
    type: Object,
    default: () => ({})
  }
})

const colsData = computed(() => {
  return props.currentStreetData?.colsData || []
})

const barSource = ref([{
  name: '企业1',
  total: 613
}, {
  name: '企业2',
  total: 243
}, {
  name: '企业3',
  total: 643
}, {
  name: '企业4',
  total: 143
}, {
  name: '企业5',
  total: 423
}])
const barOption = computed(() => get3DBarOption({
  xAxis: {
    data: colsData.value.map(e => e.name)
  },
  series: [
    {
      name: '企业车辆数',
      type: 'custom',
      renderItem: renderItemFnGenerator(),
      data: colsData.value.map(e => e.count)
    }
  ]
}))

</script>

<template>
  <div class="pop-panel-wrap">
    <div class="main-title">
      {{ currentStreetData.name || currentStreetData.areaName || title || '镇街名称' }}
    </div>
    <DataChart class="bar-chart" :option="barOption" :source="barSource" />
  </div>
</template>

<style lang="scss" scoped>
.bar-chart {
  height: 170px;
}

.pop-panel-wrap {
  padding: 16px;
  width: 384px;
  min-height: 200px;
  background: rgba(0, 33, 78, 0.9);
  border: 1px solid #009bfc;
  border-radius: 10px;

  .main-title {
    text-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.5);
    font-size: 16px;
    font-family: YouSheBiaoTiHei;
    font-weight: 600;
    text-align: left;
    line-height: 31px;
    letter-spacing: 2px;
    background-clip: text;
    color: transparent;
    background-image: linear-gradient(121deg, #ffffff 7%, #85d0ff 87%);
  }
}

.title-container {
  border-bottom: 1px solid rgba(0, 155, 252, 0.3);

  .title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 10px 28px 10px 32px;

    .title-left {
      display: flex;
      align-items: center;
    }

    &-text {
      font-size: 24px;
      font-weight: 400;
      text-align: left;
      line-height: 31px;
      letter-spacing: 2px;
      text-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.5);
    }
  }
}

.title-icon {
  cursor: pointer;
  width: 18px;
  height: 18px;
}

.slot-warp {
  color: #ffffff;
  padding: 24px;
}

.slot {
  pointer-events: initial;
}

.col {
  display: flex;
  justify-content: space-between;
  padding: 8px 0;
}

.title {
  height: 25px;
  font-size: 18px;
  font-family: PingFangSC, PingFangSC-Regular;
  font-weight: 400;
  text-align: left;
  color: #cccccc;
  line-height: 25px;
}

.count {
  height: 25px;
  font-size: 18px;
  font-family: PingFangSC, PingFangSC-Medium;
  font-weight: 500 !important;
  text-align: left;
  line-height: 25px;
}

.detail-button-wrap {
  display: flex;
  justify-content: flex-end;
  margin-top: 8px;
}
</style>
