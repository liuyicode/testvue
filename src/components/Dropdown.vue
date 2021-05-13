<template>
  <div>
    <transition name="fade" appear v-if="isdata.isOpen">
      <div class="menu" @mouseleave="isdata.isOpen = false">
        <router-link
          :to="item.path"
          v-for="(item, index) in lists"
          :key="index"
          @click.native="changeStatus = 1"
        >
          {{ item.title }}
        </router-link>
      </div>
    </transition>
  </div>
</template>

<script>
export default{
    props:["isdata","lists"]
}

</script>


<style scoped>

</style>