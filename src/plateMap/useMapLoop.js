import { ref, computed } from "vue";
import { areaDict } from "./area";

const loopData = ref();

const streetData = ref(areaDict);
const loopClock = ref(null);
const streetDataIndex = ref(null);
const customerColorRender = ref(false);

// 当前轮播到的镇街
const currentLoop = computed(() => streetData.value[streetDataIndex.value]);

// 弹窗类型
const panelType = ref("base");

export const useMapLoop = () => {
  const setLoopData = (data) => {
    loopData.value = data;
  };

  const startLoop = (timeout = 2500) => {
    streetDataIndex.value = 0;
    loopClock.value = setInterval(() => {
      // streetData index + 1
      if (streetDataIndex.value === loopData.value.length - 1) {
        streetDataIndex.value = 0;
      } else {
        streetDataIndex.value += 1;
      }
    }, timeout);
  };
  const destroyLoop = () => {
    if (loopClock.value) {
      clearTimeout(loopClock.value);
      loopClock.value = null;
    }
  };

  // 自定义板块颜色
  const setCustomerColorRender = (boolean) => {
    console.log("use run", loopData.value);
    customerColorRender.value = boolean;
  };

  const setPanelType = (type) => {
    panelType.value = type;
  };
  return {
    loopData,
    setLoopData,

    loopClock,
    currentLoop,
    startLoop,
    destroyLoop,

    customerColorRender,
    setCustomerColorRender,

    panelType,
    setPanelType,
  };
};
