<template>
  <div id="app">
    <div
      id="nav"
      class="navbar"
    >
      <div class="navbar-menu">
        <div class="navbar-start">
          <router-link class="navbar-item" to="/">Home</router-link>
          <router-link class="navbar-item" to="/about">About</router-link>
          <router-link class="navbar-item" to="/photo-wall">photo wall</router-link>
        </div>
      </div>
    </div>
    <router-view />
  </div>
</template>