<template>
  <div class="col-md-6 col-lg-4">
    <div class="project-box heavy-shadow">
      <ul class="project-nav">
        <!-- github -->
        <li v-if="github"><a target="_blank" :href="github"><span class="color-red">g</span>ithub</a></li>
        <li v-else @click="$emit('showErrorModal')" class="show-error-modal"><span class="color-red">g</span>ithub</li>

        <!-- site -->
        <li v-if="site"><a target="_blank" :href="site"><span class="color-red">s</span>ite</a></li>
        <li v-else @click="$emit('showErrorModal')" class="show-error-modal"><span class="color-red">s</span>ite</li>

        <!-- graphic -->
        <li v-if="images" @click="$emit('showImage')"><a><span class="color-red">g</span>raphics</a></li>
        <li v-else @click="$emit('showErrorModal')" class="show-error-modal"><span class="color-red">g</span>raphics</li>


      </ul>
      <p class="status primary-color">{{status}}</p>
      <p class="title">{{title}}</p>
      <div class="section primary-color-bg description">{{description}}</div>
      <div class="section tools">
        <span>Tools: </span>

        <font-awesome-icon 
          v-for="(item, index) in skills" :key="index"
          :class="`font-awesome ${item}`" 
          :icon="item === 'database' ? item : [ 'fab', item ]" 
        />
        
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        props: ['title', 'description', 'skills', 'status', 'github', 'site', 'images'],
        data() {
            return {
            }
        },
    }
</script>

<style lang="sass" scoped>
  .project-box
    border: 4px solid #000;
    color: #fff;
    margin-bottom: 80px;
    background-color: #0200af;
    @media screen and (max-width: 575px)
        margin-bottom: 40px;
    .project-nav
        display: flex;
        background-color: #bbb;
        list-style: none;
        padding: 0 10px;
        li.show-error-modal
                opacity: 0.5;
        li
            color: #000;
            margin-right: 15px;
            cursor: pointer;
            a
                color: #000;
            &:hover 
                text-decoration: underline;
    .status
        margin: 0;
    .title
        font-size: 1.8em;
        line-height: 50px;
        padding: 0 15px;
        @media screen and (max-width: 1450px)
            font-size: 1.5em;
            line-height: 30px;
        @media screen and (max-width: 1250px)
            font-size: 1.2em;
            line-height: 30px;
        @media screen and (max-width: 1000px)
            font-size: 1.1em;
            line-height: 30px;
    .description
        word-break: break-word;
    .section
        text-align: left;
        padding: 10px 15px;
    .tools
        display: flex;
        align-items: center;
        .font-awesome
            margin: 0 10px;
        .database
            color: #fff;
        .js
            color: #FBBC05;
        .laravel
            color: #ff2d20;
        .node-js
            color: #43853d;
        .react
            color: #61dafb;
        .vuejs
            color: #4fc08d;
</style>
