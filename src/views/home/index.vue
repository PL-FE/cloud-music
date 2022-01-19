<template>
  <div class="top flex">
    <div class="flexCenter top_left">
      <img src="@/assets/logo.jpg" />
      <el-input
        v-model="sreachValue"
        size="mini"
        :prefix-icon="Search"
        placeholder="Please input"
      ></el-input>
    </div>
    <div class="flexCenter top_right">
      <!-- <img src="@/assets/logo.jpg" /> -->
      <el-avatar
        style="width: 30px; height: 30px; margin-right: 10px"
        src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
      ></el-avatar>
      <span class="textEllipsis">多么希望恍然大悟</span>
      <el-icon><brush-filled /></el-icon>
      <el-icon><setting /></el-icon>
    </div>
  </div>
  <div class="content">
    <div class="left">home</div>
    <div class="main">home</div>
  </div>
</template>

<script setup>
import { Search } from '@element-plus/icons-vue'
import { ref } from 'vue'

const sreachValue = ref('')
</script>

<style lang="scss" scoped>
$topHeight: 55px;
$topBgLightColor: #ec4141; // 背景鲜艳的红
$topBgColor: #e13e3e; // 背景暗沉的红
$leftWidth: 330px;
.content {
  display: flex;
}
.top {
  height: $topHeight;
  background-color: $topBgLightColor;

  display: flex;
  align-items: center;
  padding: 0 10px;

  &.flex {
    justify-content: space-between;
  }
}
.left {
  height: calc(100vh - $topHeight);
  width: $leftWidth;
  border-right: 1px solid #ccc;
}

.top_left {
  img {
    margin-right: 30px;
  }

  :deep() {
    input::-webkit-input-placeholder,
    .el-input__icon .icon {
      color: rgba(255, 255, 255, 0.7);
    }
    input {
      caret-color: #fff;
    }
    .el-input__inner {
      background-color: #e13e3e;
      border: none;
      border-radius: 20px;
      color: #fff;
    }
  }
}
.top_right {
  color: #fff;

  :deep() {
    .el-image__inner {
      border-radius: 50%;
    }
    .el-icon {
      margin-right: 10px;
      cursor: pointer;
    }
  }

  .textEllipsis {
    width: 200px;
  }
}
</style>
