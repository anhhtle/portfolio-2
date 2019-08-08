<template>
  <div id="Home">
    <!-- SF background -->
    <SectionOne />
    <!-- story -->
    <SectionTwo />
    <!-- choose your coder -->
    <SectionThree /> 
  </div>
</template>

<script>
import SectionOne from './SectionOne';
import SectionTwo from './SectionTwo';
import SectionThree from './SectionThree';

export default {
  components: {
    SectionOne, SectionTwo, SectionThree
  }
}
</script>

<style lang="sass" scoped>
</style>
