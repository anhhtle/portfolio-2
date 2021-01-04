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

    <div class="contact-container" @click="show_contacts_modal = true;">
      <p>Contacts</p>
    </div>

    <ContactsModal v-show="show_contacts_modal" @close="show_contacts_modal = false;"/>
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
import ContactsModal from '../utility/ContactsModal';
import ErrorModal from '../utility/ErrorModal';

export default {
  components: {
    SectionOne, SectionTwo, SectionThree, SectionFour, SectionFive, SectionSix,
    ContactsModal, ErrorModal
  },
  data() {
    return {
      show_contacts_modal: false,
      show_error_modal: false,
    }
  }
}
</script>

<style lang="sass" scoped>
  .contact-container
    position: fixed;
    width: 100px;
    background: blue;
    right: 30px;
    bottom: 20px;
    p
      margin-bottom: 0;
</style>
