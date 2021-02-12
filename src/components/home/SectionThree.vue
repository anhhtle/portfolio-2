<template>
  <div id="SectionThree" class="section-container">
    <h3 class="section-header">{{header}}</h3>

    <div class="row">
      <div class="col-sm-6">
        <div class="offset-sm-2 col-sm-10 character-bio-container">
          <div class="img-border" @mouseover="mouseover = true" @mouseleave="mouseover = false">
            <img v-if="!mouseover" src="../../assets/images/dino-1.png" />
            <img v-else src="../../assets/images/dino-2.png"/>
          </div>
          <span class="primary-color">Anh</span> of house <span class="primary-color">Le</span>, first of his name, maester of nap and watcher of sports, cleaner of code,  user of Google searches, browser of Stackoverflow and youtube.
          
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
      header: '!HGHF^#@ Y$). ?UX%',

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
      element_visible: false,
    }
  },
  watch: {
    element_height (val) {
      if (val <= 800 && !this.update_chart) {
        this.element_visible = true;
      }
    },
    element_visible (val) {
      if (val) {
        // header
        this.decodeHeader();

        // graph
        this.radar_dataset[0].data = [7,7,9,8,6,7];
        this.update_chart = true;
      }
    }
  },
  methods: {
    handleScroll() {
      let element =  document.getElementById('SectionThree');
      let rect = element.getBoundingClientRect();
      this.element_height = rect.top;
    },
    decodeHeader() {
      this.header = 'C$@SDV :}vC )#LF';
      setTimeout(() => {
        this.header = 'CH+4Zh QV>< *HNQ$';
      }, 100);
      setTimeout(() => {
        this.header = 'CHO4ne 8cse as39%';
      }, 200);
      setTimeout(() => {
        this.header = 'CHOO]Z MBI? !9%c3';
      }, 300);
      setTimeout(() => {
        this.header = 'CHOOSh 6ol zz4my';
      }, 400);
      setTimeout(() => {
        this.header = 'CHOOSE vlo6 &2sdo';
      }, 500);
      setTimeout(() => {
        this.header = 'CHOOSE Y=7+ GC3t1';
      }, 600);
      setTimeout(() => {
        this.header = 'CHOOSE YO11 &0ytn';
      }, 700);
      setTimeout(() => {
        this.header = 'CHOOSE YOUh .39~"h';
      }, 800);
      setTimeout(() => {
        this.header = 'CHOOSE YOUR mvz|g3';
      }, 900);
      setTimeout(() => {
        this.header = 'CHOOSE YOUR C2sdo';
      }, 1000);
      setTimeout(() => {
        this.header = 'CHOOSE YOUR COv4$';
      }, 1100);
      setTimeout(() => {
        this.header = 'CHOOSE YOUR CODk2';
      }, 1200);
      setTimeout(() => {
        this.header = 'CHOOSE YOUR CODE/';
      }, 1300);
      setTimeout(() => {
        this.header = 'CHOOSE YOUR CODER';
      }, 1400);
    }
  },
  created () {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed () {
      window.removeEventListener('scroll', this.handleScroll);
  },
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
            @media screen and (max-width: 575px)
                float: initial;
                display: flex;
                justify-content: center;
                margin-bottom: 20px;
            img
                border: 5px solid #fff;
                box-shadow: 10px 10px 0 rgba(0,0,0,.75);
        img
            width: 200px;
            height: 200px;
</style>
