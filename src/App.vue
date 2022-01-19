<template>
  <router-view></router-view>
</template>

<style lang="scss">
body {
  margin: 0;
}

.flex {
  display: flex;
}
.hCenter {
  justify-content: center;
}
.vCenter {
  align-items: center;
}

.flexCenter {
  align-items: center;
  display: flex;
  justify-content: center;
}

.textEllipsis {
  display: inline-block;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
</style>
