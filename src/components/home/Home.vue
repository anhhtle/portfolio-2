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
    <!-- fight image -->
    <SectionFive /> 
    <!-- projects -->
    <SectionSix /> 
  </div>
</template>

<script>
import SectionOne from './SectionOne';
import SectionTwo from './SectionTwo';
import SectionThree from './SectionThree';
import SectionFour from './SectionFour';
import SectionFive from './SectionFive';
import SectionSix from './SectionSix';

export default {
  components: {
    SectionOne, SectionTwo, SectionThree, SectionFour, SectionFive, SectionSix
  }
}
</script>

<style lang="sass" scoped>
</style>
