<template>
  <div id="SectionTwo" class="section-container">
    <p>Every day, a secret battle is being fought unbeknownst to most people. Evil <strong>BUGS</strong> seek to corrupt society's websites, databases, and servers. Stands against them, are humans who uses the <strong>Power of Code</strong> to safeguard our technologies and securities. They are, the <span class="color-gradient">King of Coders.</span></p>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="sass" scoped>
#SectionTwo
  background-color: #1a1514;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  p
    width: 80%;
    .color-gradient
      background: linear-gradient(90deg, #f7324d, #a23f3f, #f5fb72, #fd6900);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
</style>
