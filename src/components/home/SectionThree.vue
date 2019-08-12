<template>
  <div id="SectionThree" class="section-container">
    <h3 class="section-header">Chose your Coder</h3>

    <div class="row">
      <div class="col-sm-6">
        <div class="offset-sm-2 col-sm-10 character-bio-container">
          <div class="img-border" @mouseover="mouseover = true" @mouseleave="mouseover = false">
            <img v-if="!mouseover" src="../../assets/images/dino-1.png" />
            <img v-else src="../../assets/images/dino-2.png"/>
          </div>
          <span class="primary-color">Anh</span> of house <span class="primary-color">Le</span>, first of his name, master of nap and watcher of sports, cleaner of code,  user of Google searches, browser of Stackoverflow and reddit.
          
          <p><span class="primary-color">House banner:</span> The mouse <i class="fas fa-mouse-pointer"></i></p>
          <p><span class="primary-color">House word:</span> deadlines are coming</p>
        </div>


      </div>

      <div class="col-sm-6">
        <radar-chart :datasets="radar_dataset" :labels="labels" :update="update_chart"/>
      </div>

    </div>
  </div>
</template>

<script>
import RadarChart from '../chart/RadarChart';
import { setTimeout } from 'timers';

export default {
  components: {
    RadarChart
  },
  data() {
    return {
      mouseover: false,

      // chart
      labels: ['API', 'Databases', 'HTML/CSS','Javascript','PHP','React/Vue'],
      radar_dataset: [
          {
              backgroundColor: [
                  'rgba(255, 0,0, 0.5)',
              ],
              borderColor: '#FC2525',
              pointBackgroundColor: 'white',
              data: [0,0,0,0,0]
          },
      ],
      update_chart: false,

      // meta
      element_height: 0,
    }
  },
  watch: {
    element_height (val) {
      if (val <= 400 && !this.update_chart) {
        this.radar_dataset[0].data = [7,7,9,8,6,7];
        this.update_chart = true;
      }
    },
  },
  methods: {
    handleScroll() {
      let element =  document.getElementById('SectionThree');
      let rect = element.getBoundingClientRect();
      this.element_height = rect.top;
    }
  },
  created () {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed () {
      window.removeEventListener('scroll', this.handleScroll);
  },
  mounted() {
  }
}
</script>

<style lang="sass" scoped>
#SectionThree
  background: linear-gradient(180deg,#1a1514,#413561);
  .character-bio-container
    color: #fff;
    text-align: left;
    p
      margin: 5px 0;
      i
        font-size: 0.8em;
    .img-border
      float: left;
      margin-right: 20px;
      border: 5px solid #fff;
      box-shadow: 10px 10px 0 rgba(0,0,0,.75);
      width: fit-content;
      height: fit-content;
      img
        width: 200px;
        height: 200px;
</style>
