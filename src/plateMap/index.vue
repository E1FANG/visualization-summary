<script setup>
import {
  computed,
  onBeforeUnmount,
  onMounted,
  ref,
  watch,
  toRefs,
} from 'vue'

import { debounce } from 'lodash-es'

import SvgMap from './svgMap.vue'
import panelWrap from './animateMapPanel/panelWrap.vue'
import BasePanel from './animateMapPanel/basePanel.vue'
import BarChartPanel from './animateMapPanel/barChartPanel.vue'

import { useMapLoop } from './useMapLoop.js'



const { loopData, customerColorRender, panelType, currentLoop, destroyLoop, loopClock } = toRefs(useMapLoop())

// map's property
const map = ref(null)
const wholeMap = computed(() => map.value.$el.querySelector('#wholeMap'))
const normalStroke = '#4295C8'
const normalBg = 'rgba(0,30,106,0.4)'

// 图形
const polygons = computed(() => map.value.$el.querySelectorAll('polygon'))


// 属性
const defs = computed(() => map.value.$el.querySelector('defs'))

// 文字中<use></use>所依赖的图形
// const textSpan = computed(() => defs.value.querySelectorAll('text'))
const textSpan = computed(() => defs.value.querySelectorAll('tspan'))


const getId = (element) => element.getAttribute('id')
const getAreaCode = (element) => element.getAttribute('areaCode')

// 真正能改文字颜色的dom
const getTextSpan = (code) => {
  const textSpans = Array.from(textSpan.value)
  return textSpans.filter((e) => getAreaCode(e) === code)[0]
}

const getPolygon = (code) => {
  const polygonsArr = Array.from(polygons.value)
  return polygonsArr.filter((e) => getAreaCode(e) === code)
}

const changeSvgColor = (svg, fill, stroke) => {
  svg.setAttribute('fill', fill)
  svg.setAttribute('stroke', stroke)
}

const useColorRender = () => {
  polygons.value.forEach((e, i) => {
    if (customerColorRender.value) {
      const customItem = loopData.value.find(
        (x) => x.areaCode === getAreaCode(e)
      )
      changeSvgColor(
        e,
        customItem ? customItem.color : normalBg,
        customItem ? customItem.border : normalStroke
      )
    } else {
      changeSvgColor(e, normalBg, normalStroke)
    }
  })
}

const initMap = () => {
  // customerColorRender.value &&
  textSpan.value.forEach((e) => {
    changeSvgColor(e, '#ffffff', '#ffffff')
  })
  useColorRender()
}


watch(customerColorRender, () => {
  initMap()
})

// svg highligh
const highlighStreet = (code) => {
  const text = getTextSpan(code)
  currentText.value = text
  changeSvgColor(text, '#FDAD43', '#FDAD43')
  getPolygon(code).forEach((e) => {
    changeSvgColor(e, 'url(#linearGradient-20)', '#FDAD43')
  })
}

// svg reset 
const resetStreet = (code) => {
  if (code) {
    changeSvgColor(getTextSpan(code), 'white', 'white')
    getPolygon(code).forEach((e) => {
      if (customerColorRender.value) {
        const customItem = loopData.value.find(
          (x) => x.areaCode === getAreaCode(e)
        )
        changeSvgColor(
          e,
          customItem ? customItem.color : normalBg,
          customItem ? customItem.border : normalStroke
        )
      } else {
        changeSvgColor(e, normalBg, normalStroke)
      }
    })
  }
}


// 板块hover事件
const currentId = ref('')
const currentCode = ref('')
const currentText = ref(null)
const currentStreetData = computed(() => {
  return loopData.value.filter((e) => e.areaCode === currentCode.value)[0]
})

const hoverHandler = debounce((e) => {
  if (loopClock.value) {
    initMap()
    destroyLoop.value()
  }
  const { target } = e
  const id = getId(target) || getId(target.parentNode)
  const code = getAreaCode(target) || getAreaCode(target.parentNode)

  if (currentCode.value === code || id === 'wholeMap' || !code) return

  // reset
  resetStreet(currentCode.value)

  currentId.value = id
  currentCode.value = code

  // set
  highlighStreet(currentCode.value)
}, 250)

const bindEventListener = () => {
  wholeMap.value.addEventListener('mouseover', hoverHandler)
}
const unbindEventListener = () => {
  wholeMap.value.removeEventListener('mouseover', hoverHandler)
}

onMounted(() => {
  initMap()
  bindEventListener()
})

onBeforeUnmount(() => {
  unbindEventListener()
  destroyLoop.value()
})

// init popup position 弹窗
const originPosition = computed(() => {
  if (currentText.value) {
    const {
      top: y,
      left: x,
      width,
      height
    } = currentText.value.getBoundingClientRect()
    return { x, y, width, height }
  }
  return {}
})

const specialDict = ['虎门港管委会', '东莞生态园', '松山湖管委会']
const popupPosition = computed(() => {
  if (currentText.value) {
    const { x, y, width, height } = originPosition.value

    const result = {
      x: (x - width / 3),
      y: (y - height * 2)
    }
    // 特殊处理
    if (specialDict.includes(currentText.value.firstChild.textContent)) {
      return {
        ...result,
        x: (x - width / 3 + 25)
      }
    }
    return result
  } else {
    return null
  }
})

// 关闭弹窗
const closePanel = () => {
  // popupPosition 依赖text
  currentText.value = null
  resetStreet(currentCode.value)
}

window.addEventListener('scroll', () => {
  closePanel()
  // destroyLoop.value()
})


// 镇街轮播
watch(
  currentLoop,
  (val, preVal) => {
    if (val && val.areaCode) {
      currentCode.value = val.areaCode
      if (preVal) {
        resetStreet(preVal.areaCode)
      }
      highlighStreet(val.areaCode)
    }
  },
  {
    // immediate: true
    // flush: 'sync'
  }
)


// 弹窗组件拓展 注册
const cpnDict = {
  base: BasePanel,
  barChart: BarChartPanel
}




</script>

<template>
  <div class="plate-map-wrap">
    <SvgMap ref="map" />
    <div v-if="popupPosition" class="pop reset-pointer-event"
      :style="{ top: popupPosition.y + 'px', left: popupPosition.x + 'px' }">
      <panelWrap :position="originPosition">
        <component :is="cpnDict[panelType]" :title="currentId" :current-street-data="currentStreetData">
        </component>
      </panelWrap>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.plate-map-wrap {
  position: relative;
}

.pop {
  z-index: 100;
  text-align: center;
  position: fixed;
  width: 100px;
  height: 50px;
  // background: linear-gradient(180deg,rgba(6,39,81,0.60) 1%, rgba(0,33,78,0.70));
  // border: 1px solid #009bfc;
  // backdrop-filter: blur(10px);
  // padding: 10px;
}
</style>