<template>
  <div id="SectionFour" class="section-container">
    <h3 class="section-header">Choose your stage</h3>

    <div class="row">
      <!-- stage img -->
      <div class="col-sm-6">
        <div class="flex-container">
          <!-- stanford -->
          <div class="img-container">
            <img v-if="stage === 'Stanford University'" src="../../assets/images/stanford.png" />
            <img v-else src="../../assets/images/stanford-bw.png"/>
          </div>
          <!-- bd -->
          <div class="img-container">
            <img v-if="stage === 'bd'" src="../../assets/images/stanford.png" />
            <img v-else src="../../assets/images/stanford-bw.png"/>
          </div>
          <!-- thinkful -->
          <div class="img-container">
            <img v-if="stage === 'thinkful'" src="../../assets/images/stanford.png" />
            <img v-else src="../../assets/images/stanford-bw.png"/>
          </div>
          <!-- sjsu -->
          <div class="img-container">
            <img v-if="stage === 'sjsu'" src="../../assets/images/stanford.png" />
            <img v-else src="../../assets/images/stanford-bw.png"/>
          </div>
        </div>
      </div>

      <!-- stage descriptions -->
      <div class="col-sm-6">
        <div class="description-container">
          <p class="stage">{{stage}}</p>
          <p class="date">{{date}}</p>
          <p class="description">{{description}}</p>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      stage: 'Stanford University',
      date: '2017 - Present',
      description: 'Web Developer for the Department of Medicine. Create website and web apps in support of faculty and staffs. Web apps ranges from financial reports, hiring portal, and operational systems. Full-stack skillsets with emphasis in JavaScript.'
    }
  },
}
</script>

<style lang="sass" scoped>
#SectionFour
  background: linear-gradient(180deg,#413561,#694105);
  .flex-container
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    .img-container
      margin: 10px;
      img
        width: 300px;
        height: 170px;
  .stage
    font-size: 1.5em;
    text-shadow: 5px 5px #000;
    margin: 0;
  .date
    font-size: 1.3em;

</style>
