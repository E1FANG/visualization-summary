import { ref } from "vue";
import { areaDict } from "./area";

export const useMapLoop = () => {
  const panelType = ref("base");

  const loopData = ref(areaDict);
  // 自定义板块颜色
  const customerColorRender = ref(false);
  const setCustomerColorRender = (boolean) => {
    customerColorRender.value = boolean;
  };
  return {
    panelType,
    loopData,
    customerColorRender,
    setCustomerColorRender,
  };
};
