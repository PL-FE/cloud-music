<template>
  <el-menu
    :default-active="defaultActive"
    @select="select"
    class="el-menu-vertical-demo"
  >
    <el-sub-menu :index="menu.path" v-for="menu in menuList" :key="menu.path">
      <template #title>
        <span>{{menu.label}}</span>
      </template>
        <el-menu-item v-for="menuItem in menu.items" :key="menuItem.path" :index="menuItem.path">{{menuItem.label}}</el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>

<script  setup>
import { ref } from 'vue'
import { mainStore } from '@/store/index.js';
import { storeToRefs } from "pinia";
 const store = mainStore();
let { selected } = storeToRefs(store);

const menuList = [
  {
    label: '音乐',
    path: 'music',
    items: [
      {
        path: 'discoverMusic',
        label: '发现音乐'
      },
      {
        path: 'privateFM',
        label: '私人FM'
      },
      {
        path: 'favoriteMusic',
        label: '喜欢的音乐'
      }
    ]
  },
  {
    label: '我的歌单',
    path: 'songSheet',
    items: [
      {
        path: 'songSheet',
        label: '歌单1'
      },
      {
        path: 'songSheet',
        label: '歌单2'
      },
    ]
  },
]
const defaultActive = ref('discoverMusic')
const select = (index) => {
  selected.value = index
  
}
</script>

<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>