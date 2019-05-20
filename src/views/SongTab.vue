<template>
    <main class="pure-g center-content fullwidth-sm">
        <section class="pure-u-1 pure-u-sm-1-1 social-links-bar">
            <p class="align-text-center">Artist's Social Links:</p>
            <social-links-bar v-bind:socialLinks="socialLinks[0]" />
        </section>
        <article class="pure-u-1 pure-u-sm-1-1 fill-height fullwidth-sm">
            <header>
                <h1>{{song.title}} Guitar Tab</h1>
                <h5>by {{band.name}}</h5>
            </header>
            <div class="tabs">
                <redbone v-if="song.title === 'Redbone'" />
            </div>
        </article>
    </main>
</template>
<script>
import SocialLinksBar from '@/components/SocialLinksBar'
import axios from 'axios'
import Redbone from '@/components/tabs/Redbone'

export default {
    name: 'SongTab',
    components: {
        SocialLinksBar,
        Redbone
    },
    data () {
        return {
            band: [],
            song: [],
            socialLinks: []
        }
    },
    methods: {
        getData (type, id) {
            return axios.get(`https://my-json-server.typicode.com/Z04P/fakendgtr/${type}${id}`);
        }
    },
    created () {
        let bandId = this.$route.params.bandId;
        let songId = this.$route.params.songId;

        this.getData('bands', `/${bandId}`)
            .then(response => this.band = response.data)
            .catch(error => console.log(error));

        this.getData('songs', `/${songId}`)
            .then(response => this.song = response.data)
            .catch(error => console.log(error));

        this.getData('socialLinks', `?pk=${bandId}`)
            .then(response => this.socialLinks = response.data)
            .catch(error => console.log(error));
    }
}
</script>
<style scoped>
    article {
        overflow: auto;
    }
    .tabs {
        display: flex;
        justify-content: center;
    }
</style>
