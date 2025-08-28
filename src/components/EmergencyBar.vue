<template>
<link href="https://fonts.googleapis.com/css2?family=Anton&display=swap" rel="stylesheet" />

  <div class="emergency-bar">
    POMOC DROGOWA –
    <span class="phone" @click="callHelp" tabindex="0" role="button" @keydown.enter="callHelp">
      tel. 600 800 900
    </span>
  </div>
</template>

<script setup>
const callHelp = () => {
  window.location.href = 'tel:+48600800900'
}
</script>

<style lang="scss" scoped>

.emergency-bar {
  background: $primary;
  color: $warning;
  padding: 30px 0;
  text-align: center;
  font-family: 'Anton', sans-serif;
  font-weight: 700;
  font-size: 3rem;
  letter-spacing: 0.05em;
}
.phone {
  background: $warning;
  color: $primary;
  border-radius: 7px;
  margin-left: 14px;
  padding: 4px 14px;
  cursor: pointer;
  display: inline-block;
}
</style>
