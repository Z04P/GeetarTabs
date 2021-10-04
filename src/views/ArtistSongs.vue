<template>
    <main class="pure-g center-content fullwidth-sm">
        <img class="pure-img cover-img fade-in" src="../assets/img/guitar.jpg" alt="guitar" />
        <article class="pure-u-1 pure-u-sm-1-1 fill-height fullwidth-sm fade-in" v-if="songs.length > 0">
            <header>
                <span class="header-artist-songs">{{artist.name}}</span>
                <img class="pure-img artist-img artist-img-h" :src="artist.artistImgUrl" alt="artist" />
            </header>
            <div class="table-header">
                <span class="pure-u-1 pure-u-sm-1-2">SONG</span>
                <span class="pure-u-1 pure-u-sm-1-2 align-text-right">TYPE</span>
            </div>
            <div class="list">
                <tabs-list-item v-bind:songs="songs" />
            </div>
        </article>
    </main>
</template>
<script>
import TabsListItem from '@/components/TabsListItem'
import axios from 'axios'

export default {
    name: 'ArtistSongs',
    components: {
        TabsListItem
    },
    data () {
        return {
            artist: [],
            songs: []
        }
    },
    methods: {
        getData (type, id) {
            return axios.get(`https://my-json-server.typicode.com/Z04P/fakendgtr/${type}${id}`);
        }
    },
    created () {
        let id = this.$route.params.artistId;
        
        this.getData('artists', `/${id}`)
            .then(response => this.artist = response.data)
            .catch(error => console.log(error));

        this.getData('songs', `?pk=${id}`)
            .then(response => this.songs = response.data)
            .catch(error => console.log(error));
    },
}
</script>
<style scoped>
    .header-artist-songs {
        margin: 10px;
        font-size: 2em;
        vertical-align: middle;
    }
    header {
        margin: 20px 0;
    }
</style>
