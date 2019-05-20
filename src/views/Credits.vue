<template>
  <main class="pure-g center-content-sm center-content fullwidth-sm">
    <img class="pure-img cover-img" src="../assets/img/credits.jpg" alt="DJ" />
    <div class="pure-u-1 pure-u-sm-1-1 fill-height fullwidth-sm">
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
<style scoped>
  .pure-menu-list {
    margin: 10px 20px 20px 20px;
    padding: 10px 20px 20px 20px;
  }
  header {
    border-bottom: 2px solid rgb(230, 230, 230);
  }
</style>
<script>
export default {
    name: 'Credits',
    data () {
      return {
        profiles: [
          {
            id: 0,
            url: 'https://www.pexels.com/@psad',
            name: 'David Yu'
          },
          {
            id: 1,
            url: 'https://www.pexels.com/@pixabay',
            name: 'Pixabay'
          },
          {
            id: 2,
            url: 'https://www.pexels.com/@pedro',
            name: 'Pedro Sandrini'
          },
          {
            id: 3,
            url: 'https://www.pexels.com/@mark-angelo-738078',
            name: 'Mark Angelo'
          },
          {
            id: 4,
            url: 'https://www.pexels.com/@joshsorenson',
            name: 'Josh Sorenson'
          }
        ]
      }
    }
}
</script>
