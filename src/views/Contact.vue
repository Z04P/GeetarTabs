<template>
  <main class="pure-g center-content-sm center-content fullwidth-sm">
    <img class="pure-img cover-img fade-in" src="../assets/img/contact.jpg" alt="Audience Hand Wave" />
    <div class="pure-u-1 pure-u-sm-1-1 fill-height fullwidth-sm fade-in">
      <section>
        <header>
          <h1>Leave a message</h1>
        </header>
      </section>
      <section class="pure-u-1 pure-u-sm-1-2">
        <email-form />
      </section>
      <section class="pure-u-1 pure-u-sm-1-2 social-links">
        <h4 class="align-text-center">or send me a DM on my socials</h4>
        <social-links-bar v-bind:socialLinks="socialLinks" />
      </section>
    </div>
  </main>
</template>
<script>
import EmailForm from '@/components/EmailForm';
import SocialLinksBar from '@/components/SocialLinksBar';
import axios from 'axios';

export default {
  name: 'contact',
  components: {
    EmailForm,
    SocialLinksBar
  },
  data () {
    return {
      socialLinks: []
    }
  },
  created () {
    axios.get('https://my-json-server.typicode.com/Z04P/fakendgtr/socialLinks/0')
      .then(response => this.socialLinks = response.data)
      .catch(error => console.log(error));
  }
}
</script>
<style scoped>
  .social-links {
    margin-top: 8px;
    margin-bottom: 20px;
  }
</style>
