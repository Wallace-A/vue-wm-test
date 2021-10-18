<template>
  <div class="home">
    <h1>Welcome, Warmaster.</h1>
    <PlayerCreate/>
    <PlayerList/>
  </div>
</template>

<script>
import PlayerCreate from "@/components/PlayerCreate"
import PlayerList from "@/components/PlayerList"

export default {
  name: 'Home',
  components: {
    PlayerCreate,
    PlayerList
  }
}
</script>
