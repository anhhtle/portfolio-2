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
    <SectionSix @showErrorModal="show_error_modal = true;"/> 

    <ErrorModal v-show="show_error_modal" @close="show_error_modal = false;"/>
  </div>
</template>

<script>
import SectionOne from './SectionOne';
import SectionTwo from './SectionTwo';
import SectionThree from './SectionThree';
import SectionFour from './SectionFour';
import SectionFive from './SectionFive';
import SectionSix from './SectionSix/SectionSix';
import ErrorModal from '../utility/ErrorModal';

export default {
  components: {
    SectionOne, SectionTwo, SectionThree, SectionFour, SectionFive, SectionSix,
    ErrorModal
  },
  data() {
    return {
      show_error_modal: false,
    }
  }
}
</script>

<style lang="sass" scoped>
</style>
