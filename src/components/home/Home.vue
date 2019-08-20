<template>
  <div id="Home">
    <!-- SF background -->
    <SectionOne />
    <!-- story -->
    <SectionTwo />
    <!-- choose your coder -->
    <SectionThree /> 
    <!-- choose your stage -->
    <SectionFour /> 
  </div>
</template>

<script>
import SectionOne from './SectionOne';
import SectionTwo from './SectionTwo';
import SectionThree from './SectionThree';
import SectionFour from './SectionFour';

export default {
  components: {
    SectionOne, SectionTwo, SectionThree, SectionFour
  }
}
</script>

<style lang="sass" scoped>
</style>
