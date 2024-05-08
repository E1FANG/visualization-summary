<script setup>
// import PopupPanel from '@/components/panel/popupPanel.vue'
import { computed } from 'vue'
// import GradientText from '@/components/text/gradientText.vue'
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
</script>

<template>
  <!-- <PopupPanel :title="currentStreetData.name ||
    currentStreetData.areaName ||
    title ||
    '镇街名称'
    " width="304px" v-bind="$attrs" class="slot"> -->
  <div class="pop-panel-wrap">
    <div class="main-title">
      {{ currentStreetData.name || currentStreetData.areaName || title || '镇街名称' }}
    </div>
    <template v-if="colsData.length > 0">
      <div v-for="(item, index) in colsData" :key="index" class="col">
        <span class="title"> {{ item.name }}： </span>
        <span class="count">
          <!-- <GradientText :text="item.count" color="darkYellow" /> -->
          {{ item.count }}
        </span>
      </div>
    </template>
    <div v-else>
      暂无数据
    </div>
  </div>
  <!-- </PopupPanel> -->
</template>

<style lang="scss" scoped>
.pop-panel-wrap {
  padding: 16px;
  width: 304px;
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
