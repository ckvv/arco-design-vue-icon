<script setup>
import { ref } from 'vue';
import AIcon from './components/a-icon.vue'
import icons from './svgs';

const copied = ref('');
const search = ref('');
const size = ref('4rem');
const color = ref('black');
const handlerClick = (icon, name) => {
  copied.value = name;
  navigator.clipboard.writeText(icon)
}
</script>

<template>
  <div style="text-align: center;">
    <a href="https://github.com/ckvv/arco-design-vue-icon">Github</a> |
    <a href="https://github.com/arco-design/arco-design-vue/tree/main/packages/web-vue/icon/_svgs">图标来源</a>
    <div>由于
      <a href="https://arco.design/vue/component/icon">Arco Design</a>
      图标目前不支持复制SVG, 作为替代制作了该项目, 点击对应图标即可复制。
    </div>
    <div>
      搜索: <input v-model="search"/>
      图标大小: <input v-model="size"/>
      图标颜色: <input v-model="color" type="color"/>
    </div>
  </div>

  <div class="icon-content"> 
    <template v-for="(icon, name) in icons">
      <div v-if="name.includes(search.toLowerCase().trim())"  :key="name" class="icon-item">
        <AIcon :icon="icon" :size="size" :color="color" @click="handlerClick(icon, name)"/>
        <div>{{name}}</div>
        <div v-if="name === copied" class="tip">已拷贝</div>
      </div>
    </template>
  </div>
</template>

<style>
.icon-content {
  padding: 1rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}
.icon-item{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 1rem;
  padding: .5rem;
}

.icon-item:hover{
  cursor: pointer;
  background-color: #f2f1f1;
}
.tip {
  color: dodgerblue;
}
</style>

