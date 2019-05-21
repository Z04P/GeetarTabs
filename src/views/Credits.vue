<template>
  <main class="pure-g center-content-sm center-content fullwidth-sm">
    <img class="pure-img cover-img fade-in" src="../assets/img/credits.jpg" alt="DJ" />
    <div class="pure-u-1 pure-u-sm-1-1 fill-height fullwidth-sm fade-in">
    <section class="pure-u-1 pure-u-sm-1-1 pure-u-md-1-2">
      <header>
        <h1>Credits</h1>
        <p>
          Images were taken from 
          <a href="https://www.pexels.com/">Pexels.com</a>
        </p>
      </header>
      <div class="pure-menu">
        <span class="pure-menu-heading">VISIT THEIR PROFILE</span>
        <ul class="pure-menu-list">
            <li class="pure-menu-item" v-bind:key="profile.id" v-for="profile in profiles">
            <a class="pure-menu-link" :href="profile.url">
              <i class="fas fa-user-alt"></i>
              {{profile.name}}
            </a>
          </li>
        </ul>
      </div>
    </section>
    </div>
  </main>
</template>
<script>
import axios from 'axios';

export default {
  name: 'Credits',
  data () {
    return {
      profiles: []
    }
  },
  created () {
  axios.get('https://my-json-server.typicode.com/Z04P/fakendgtr/credits')
    .then(response => this.profiles = response.data)
    .catch(error => console.log(error));
  }
}
</script>
<style scoped>
  .pure-menu-list {
    margin: 10px 20px 20px 20px;
    padding: 10px 20px 20px 20px;
  }
  header {
    border-bottom: 2px solid rgb(230, 230, 230);
  }
  .pure-menu-list .pure-menu-link:hover {
    animation: btnHover 0.3s ease-out forwards;
  }
  .pure-menu-list .pure-menu-link:active {
    animation: btnActive 0.2s ease-in forwards;
  }
</style>
