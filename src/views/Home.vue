<template>
  <div>
    <band-list v-if="bands" v-bind:bands="bands" />
  </div>
</template>

<script>
// @ is an alias to /src
import BandList from '@/components/BandList';
import axios from 'axios';

export default {
  name: 'home',
  components: {
    BandList
  },
  data () {
    return {
      bands: []
    }
  },
  created () {
    axios.get('https://my-json-server.typicode.com/Z04P/fakendgtr/bands')
      .then(response => this.bands = response.data)
      .catch(error => console.log(error));
  }
}
</script>