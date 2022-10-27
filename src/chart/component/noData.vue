<template>
  <div class="no-data">
    <div class="empty" />
    <span>暂无数据</span>
  </div>
</template>

<style lang="scss" scoped>
.no-data {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .empty {
    height: 48px;
    width: 72px;
    background-image: url('~@/assets/empty.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    margin-bottom: 16px;
    opacity: 0.4;
  }

  & > * {
    line-height: 18px;
    font-size: 16px;
    color: #999;
  }
}
</style>
