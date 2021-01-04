<template>
  <div id="SectionOne">
    <img class="pulse" src="../../assets/images/king-of-coder.png">
  </div>
</template>

<script>
export default {
}
</script>

<style lang="sass" scoped>
#SectionOne
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  background-image: url(../../assets/images/sf-bg.png);
  background-size: cover;
  image-rendering: pixelated;

.pulse
  animation: pulse infinite 4s ease-in-out;
@keyframes pulse
  0% 
    filter: contrast(1);
  60% 
    filter: contrast(3);
  100%
    filter: contrast(1);
</style>
