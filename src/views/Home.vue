<template>
  <div>
    <artist-list v-bind:artists="artists" />
  </div>
</template>

<script>
// @ is an alias to /src
import ArtistList from '@/components/ArtistList';
import axios from 'axios';

export default {
  name: 'home',
  components: {
    ArtistList
  },
  data () {
    return {
      artists: []
    }
  },
  created () {
    axios.get('https://my-json-server.typicode.com/Z04P/fakendgtr/artists')
      .then(response => this.artists = response.data)
      .catch(error => console.log(error));
  }
}
</script>