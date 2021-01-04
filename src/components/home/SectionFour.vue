<template>
  <div id="SectionFour" class="section-container">
    <h3 class="section-header">{{header}}</h3>

    <div class="row">
      <!-- stage img -->
      <div class="col-sm-6">
        <div class="flex-container">
          <!-- stanford -->
          <div class="img-container" @click="stage = 'Stanford University'">
            <img v-if="stage === 'Stanford University'" src="../../assets/images/stanford.png" />
            <img v-else src="../../assets/images/stanford-bw.png"/>
          </div>
          <!-- bd -->
          <div class="img-container" @click="stage = 'BD Biosciences'">
            <img v-if="stage === 'BD Biosciences'" src="../../assets/images/bd.png" />
            <img v-else src="../../assets/images/bd-bw.png"/>
          </div>
          <!-- thinkful -->
          <div class="img-container" @click="stage = 'Thinkful Bootcamp'">
            <img v-if="stage === 'Thinkful Bootcamp'" src="../../assets/images/thinkful.png" />
            <img v-else src="../../assets/images/thinkful-bw.png"/>
          </div>
          <!-- sjsu -->
          <div class="img-container" @click="stage = 'SJSU'">
            <img v-if="stage === 'SJSU'" src="../../assets/images/sjsu.png" />
            <img v-else src="../../assets/images/sjsu-bw.png"/>
          </div>
        </div>
      </div>

      <!-- stage descriptions -->
      <div class="col-sm-6">
        <div class="description-container">
          <p class="stage">{{stage}}</p>
          <p class="date">{{date}}</p>
          <p class="description" v-html="description" />
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      header: 'awo3!c b643 -&c1k',

      stage: 'Stanford University',
      date: '2017 - Present',
      description: '<span class="primary-color">Web Developer</span> for the Department of Medicine. Create websites and web apps in support of faculty and staffs. Web apps ranges from financial reports, hiring portal, and operational systems. Full-stack skillsets with emphasis in JavaScript.',

      // meta
      element_height: 0,
      element_visible: false,
    }
  },
  watch: {
    element_height (val) {
      if (val <= 800) {
        this.element_visible = true;
      }
    },
    element_visible (val) {
      if (val) {
        // header
        this.decodeHeader();
      }
    },
    stage (val) {
      if (val === 'Stanford University') {
        this.date = '2017 - Present';
        this.description = '<span class="primary-color">Web Developer</span> for the Department of Medicine. Create websites and web apps in support of faculty and staffs. Web apps ranges from financial reports, hiring portal, and operational systems. Full-stack skillsets with emphasis in JavaScript.';
      } else if (val === 'BD Biosciences') {
        this.date = '2013 - 2017';
        this.description = '<span class="primary-color">Data Specialist</span>. Three plus years of increasing responsibility in a technical role, working on a customer centric, eCommerce web team. Responsible for maintaining the website’s catalog and provide supports for internal and external customers.';
      } else if (val === 'Thinkful Bootcamp') {
        this.date = '2017';
        this.description = 'Intensive <span class="primary-color">web development bootcamp</span>. Front-end technical training in: HTML, CSS, JavaScript/ES6, JQuery, React.js with Redux architecture, AJAX, and Responsive Design. Server-side technical training in: Node.js, REST APIs, MongoDB, Express framework, unit testing with Mocha and Continuous Integration.';
      } else if (val === 'SJSU') {
        this.date = '2009 - 2013';
        this.description = '<span class="primary-color">B.S. Biological Sciences</span> with a minor in Chemistry.';
      }
    }
  },
  methods: {
    handleScroll() {
      let element =  document.getElementById('SectionFour');
      let rect = element.getBoundingClientRect();
      this.element_height = rect.top;
    },
    decodeHeader() {
      this.header = 'C$@SDV :}vC )#LF';
      setTimeout(() => {
        this.header = 'CH+4Zh QV>< *HNQ$';
      }, 100);
      setTimeout(() => {
        this.header = 'CHO4ne 8cs! as39%';
      }, 200);
      setTimeout(() => {
        this.header = 'CHOO]Z Mlb? !9%c3';
      }, 300);
      setTimeout(() => {
        this.header = 'CHOOSh 5ol} a2mdy';
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
        this.header = 'CHOOSE YOUR Sxn5w';
      }, 1000);
      setTimeout(() => {
        this.header = 'CHOOSE YOUR ST+3n';
      }, 1100);
      setTimeout(() => {
        this.header = 'CHOOSE YOUR STAj4';
      }, 1200);
      setTimeout(() => {
        this.header = 'CHOOSE YOUR STAG/';
      }, 1300);
      setTimeout(() => {
        this.header = 'CHOOSE YOUR STAGE';
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
  #SectionFour
    background: linear-gradient(180deg,#413561,#3206b9);
    .flex-container
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      .img-container
        cursor: pointer;
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
