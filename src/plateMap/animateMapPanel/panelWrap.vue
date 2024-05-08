<script setup>
import { computed, ref, toRefs, watch } from 'vue'
// 边框为slot的两倍大小
// 利用flex，将slot左右居中动态显示
// 左右边默认居中，超过x范围判断flex-start/end
// 上下默认向下，超过y范围判断向上

const props = defineProps({
  position: {
    type: Object,
    default: () => ({})
  },
})
const { position } = toRefs(props)

// 左右
const getJustify = (x) => {
  const ifSwitch = screen.width <= 1920
  const map = [
    [ifSwitch && x > 1238.1, 'flex-start'],
    [ifSwitch && x < 910.3, 'flex-end'],
    [!ifSwitch && x > 1600.1, 'flex-start'],
    [!ifSwitch && x < 1094.6, 'flex-end']
  ]
  const target = map.find((e) => e[0])
  return {
    justifyContent: target ? target[1] : 'center'
  }
}

const getItemAlign = (y) => {
  const top = 'translateX(-50%) translateY(-24px)'

  const bottom = 'translateX(-50%) translateY(calc(100% + 24px))'
  return {
    transform: y > 550.1 ? top : bottom
  }
}

// 三角形
const verticalPosition = computed(() => {
  const y = position.value.y

  const topFlag = y > 550.1

  const triangle = {
    top: topFlag ? 'rgba(0, 33, 78, 0.9)' : 'transparent',
    bottom: topFlag ? 'transparent' : 'rgba(0, 33, 78, 0.9)',
    left: 'transparent',
    right: 'transparent',
    borderTop: topFlag ? '#009bfc' : 'transparent',
    borderBottom: topFlag ? 'transparent' : '#009bfc'
  }
  const positions = {
    top: topFlag ? 'auto' : '-36px',
    bottom: topFlag ? 0 : 'auto',
    borderTop: topFlag ? 'auto' : '-42px',
    borderBottom: topFlag ? 0 : 'auto'
  }
  return {
    triangle,
    positions
  }
})

const style = ref()
watch(
  position,
  (val) => {
    style.value = {
      ...getJustify(val.x),
      ...getItemAlign(val.y)
    }
  },
  {
    immediate: true
  }
)
</script>

<template>
  <div class="base-panel-wrap" :style="style">
    <slot class="slot"></slot>
  </div>
</template>

<style lang="scss" scoped>
.base-panel-wrap {
  width: 500px;
  display: flex;
  // justify-content: flex-start;
  justify-content: center;
  position: absolute;
  bottom: 0;
  left: 50%;
  pointer-events: none;

  &::after {
    content: '';
    width: 0px;
    height: 0px;
    position: absolute;
    top: v-bind('verticalPosition.positions.top');
    bottom: v-bind('verticalPosition.positions.bottom');
    left: 50%;
    transform: translateX(-50%) translateY(18px);
    border: 10px solid rgb(212, 197, 197);
    border-top-color: v-bind('verticalPosition.triangle.top');
    border-bottom-color: v-bind('verticalPosition.triangle.bottom');
    border-left-color: v-bind('verticalPosition.triangle.left');
    border-right-color: v-bind('verticalPosition.triangle.right');
  }

  &::before {
    content: '';
    width: 0px;
    height: 0px;
    position: absolute;
    top: v-bind('verticalPosition.positions.borderTop');
    bottom: v-bind('verticalPosition.positions.borderBottom');
    left: 50%;
    transform: translateX(-50%) translateY(21px);
    border: 11px solid rgb(212, 197, 197);
    border-top-color: v-bind('verticalPosition.triangle.borderTop');
    border-bottom-color: v-bind('verticalPosition.triangle.borderBottom');
    border-left-color: v-bind('verticalPosition.triangle.left');
    border-right-color: v-bind('verticalPosition.triangle.right');
  }
}
</style>
