<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="grid-container">
    <header class="header">
      <div class="wrapper">
        <nav>
          <RouterLink to="/">Task List</RouterLink>
          <RouterLink to="/addTask">Add Task</RouterLink>
        </nav>
      </div>
    </header>
    <div class="main">
      <RouterView />
    </div>

    <div class="footer">Footer</div>
  </div>
</template>

<style lang="scss">
body {
  padding: 0%;
  margin: 0;
  font-family: sans-serif;
}

.header {
  grid-area: header;
  background-color: #0764a9;
  padding: 15px;
  color: #fff;
}

.main {
  grid-area: main;
}

.footer {
  grid-area: footer;
}

.grid-container {
  display: grid;
  grid-template-areas:
    'header'
    'main'
    'footer';
  gap: 10px;
  background-color: #f3f3f3;

}

.grid-container>div {
  background-color: rgba(255, 255, 255, 0.8);
  text-align: center;
  padding: 20px 0;

}

nav a {
  color: #fff;
  padding: 15px;
  text-decoration: none;

  &:hover {
    background-color: #035998;
  }
}
</style>
