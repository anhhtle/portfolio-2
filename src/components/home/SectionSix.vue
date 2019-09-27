<template>
  <div id="SectionSix" class="section-container">
    <h3 class="section-header" style="margin-bottom:20px;">{{header}}</h3>
    <p style="margin-bottom:64px;">Public facing projects</p>

    <div class="flex">
      <div class="w-1-3">
        <div class="project-box">
          <p>hi</p>
        </div>
      </div>
      <div class="w-1-3">
        <p>hi</p>
      </div>
      <div class="w-1-3">
        <p>hi</p>
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
  box-shadow: 10px 10px 0 rgba(0,0,0,.75);
</style>
