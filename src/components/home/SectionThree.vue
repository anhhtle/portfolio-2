<template>
  <div id="SectionThree" class="section-container">
    <h3 class="section-header">Chose your Coder</h3>

    <div class="row">
      <div class="col-sm-6 img-container">
        <div class="img-border" @mouseover="mouseover = true" @mouseleave="mouseover = false">
          <img v-if="!mouseover" src="../../assets/images/dino-1.png" />
          <img v-else src="../../assets/images/dino-2.png" />
        </div>
      </div>


    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mouseover: false,
    }
  },
}
</script>

<style lang="sass" scoped>
#SectionThree
  background: linear-gradient(180deg,#1a1514,#413561);
  .img-container
    display: flex;
    justify-content: center;
    .img-border
      border: 5px solid #fff;
      box-shadow: 10px 10px 0 rgba(0,0,0,.75);
      width: fit-content;
      img
        width: 200px;
        height: 200px;
</style>
