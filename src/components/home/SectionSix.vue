<template>
  <div id="SectionSix" class="section-container">
    <h3 class="section-header" style="margin-bottom:20px;">{{header}}</h3>
    <p style="margin-bottom:64px;">Professional and personal Projects</p>

    <div class="flex h-center">
      <div class="col-sm-6 col-md-3">
        <div class="project-box heavy-shadow">
          <ul class="project-nav">
            <li @click="$emit('showErrorModal')"><span class="color-red">f</span>ile</li>
            <li @click="$emit('showErrorModal')"><span class="color-red">e</span>dit</li>
            <li @click="$emit('showErrorModal')"><span class="color-red">g</span>raphics</li>
            <li @click="$emit('showErrorModal')"><span class="color-red">q</span>uit</li>
          </ul>
          <p class="title">stanford hiring portal</p>
          <div class="section primary-color-bg">public faculty hiring site. internal applicant management/interview/status system</div>
          <div class="section tools">
            <span>Tools: </span>
            <font-awesome-icon class="font-awesome vuejs" :icon="[ 'fab', 'vuejs' ]" />
            <font-awesome-icon class="font-awesome laravel" :icon="[ 'fab', 'laravel' ]" />
            <font-awesome-icon class="font-awesome database" icon="database"/>
          </div>
        </div>
      </div>

      <div class="col-sm-6 col-md-3">
        <div class="project-box heavy-shadow">
          <ul class="project-nav">
            <li><span class="color-red">f</span>ile</li>
            <li><span class="color-red">e</span>dit</li>
            <li><span class="color-red">g</span>raphics</li>
            <li><span class="color-red">q</span>uit</li>
          </ul>
          <p class="title">stanford hiring portal</p>
          <div class="section primary-color-bg">public faculty hiring site. internal applicant management/interview/status system</div>
          <div class="section tools">
            <span>Tools: </span>
            <font-awesome-icon class="font-awesome vuejs" :icon="[ 'fab', 'vuejs' ]" />
            <font-awesome-icon class="font-awesome laravel" :icon="[ 'fab', 'laravel' ]" />
            <font-awesome-icon class="font-awesome database" icon="database"/>
          </div>
        </div>
      </div>

      <div class="col-sm-6 col-md-3">
        <div class="project-box heavy-shadow">
          <ul class="project-nav">
            <li><span class="color-red">f</span>ile</li>
            <li><span class="color-red">e</span>dit</li>
            <li><span class="color-red">g</span>raphics</li>
            <li><span class="color-red">q</span>uit</li>
          </ul>
          <p class="title">stanford hiring portal</p>
          <div class="section primary-color-bg">public faculty hiring site. internal applicant management/interview/status system</div>
          <div class="section tools">
            <span>Tools: </span>
            <font-awesome-icon class="font-awesome vuejs" :icon="[ 'fab', 'vuejs' ]" />
            <font-awesome-icon class="font-awesome laravel" :icon="[ 'fab', 'laravel' ]" />
            <font-awesome-icon class="font-awesome database" icon="database"/>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      header: 'qh4DW&2.',
      element_height: 0,
      element_visible: false
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
  },
  methods: {
    handleScroll() {
      let element =  document.getElementById('SectionFour');
      let rect = element.getBoundingClientRect();
      this.element_height = rect.top;
    },
    decodeHeader() {
      this.header = 'C$@SDV?Y';
      setTimeout(() => {
        this.header = 'P%OBSC)@';
      }, 100);
      setTimeout(() => {
        this.header = 'PR/`XA5$';
      }, 200);
      setTimeout(() => {
        this.header = 'PRO7-B<Q';
      }, 300);
      setTimeout(() => {
        this.header = 'PROJ:K$=';
      }, 400);
      setTimeout(() => {
        this.header = 'PROJE]WP';
      }, 500);
      setTimeout(() => {
        this.header = 'PROJEC|U';
      }, 600);
      setTimeout(() => {
        this.header = 'PROJECTH';
      }, 700);
      setTimeout(() => {
        this.header = 'PROJECTS';
      }, 700);
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
  #SectionSix
    background: linear-gradient(180deg,#1a1514,#413561);
  .project-box
    border: 4px solid #000;
    color: #fff;
    background-color: #0200af;
    .project-nav
      display: flex;
      background-color: #bbb;
      list-style: none;
      padding: 0 10px;
      li
        color: #000;
        margin-right: 15px;
        cursor: pointer;
    .title
      font-size: 2em;
      line-height: 50px;
      padding: 10px 15px;
    .section
      text-align: left;
      padding: 10px 15px;
    .tools
      .font-awesome
        margin: 0 10px;
      .vuejs
        color: #4fc08d;
      .laravel
        color: #ff2d20;
      .database
        color: #fff;
</style>
