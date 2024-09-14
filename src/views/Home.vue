<template>
  <div class="home-screen container">
    <h1>Hi there!</h1>
    <p>My Name is Kat.</p>
    <p>
      A <span class="role">Frontend Developer</span> based in Adelaide, South
      Australia<span class="blinking-cursor">|</span>
    </p>
    <button>My Projects</button>
  </div>
</template>

<style scoped>
.home-screen h1,
.home-screen p {
  margin: 0;
}
.home-screen p .role {
  background-color: black;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  color: white;
}

.blinking-cursor {
  font-weight: 500;
  font-size: 1.5rem;
  color: #2e3d48;
  display: inline-block;
  animation: blink 1s step-end infinite;
}

button {
  border: 2px solid;
  padding: 0.5rem;
  width: 8rem;
  margin-top: 2rem;
  background-color: white;
  font-family: 'IBM Plex Mono', monospace;
}

@keyframes blink {
  from,
  to {
    color: transparent;
  }
  50% {
    color: black;
  }
}
</style>
