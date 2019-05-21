<template>
    <main class="pure-g center-content fullwidth-sm">
        <section class="pure-u-1 pure-u-sm-1-1 social-links-bar">
            <p class="align-text-center fade-in" v-if="hasSocials === true">Artist's Social Links:</p>
            <p class="hide-text" v-else-if="hasSocials === false">Artist's Social Links:</p>
            <social-links-bar class="grow-out" v-bind:socialLinks="socialLinks[0]" />
        </section>
        <article class="pure-u-1 pure-u-sm-1-1 fill-height fullwidth-sm fade-in">
            <header>
                <h1>{{song.title}} Guitar Tab</h1>
                <h5>by {{artist.name}}</h5>
            </header>
            <div class="tabs-wrapper">
                <redbone v-if="song.title === 'Redbone' && artist.name === 'The Main Squeeze'" />
                <fancy-clothes v-if="song.title === 'Fancy Clothes' && artist.name === 'The Main Squeeze'" />
                <honey v-if="song.title === 'Honey'  && artist.name === 'Johnny Balik'" />
                <fixing-a-broken-heart v-if="song.title === 'Fixing a Broken Heart'  && artist.name === 'Indecent Obsession'" />
            </div>
        </article>
    </main>
</template>
<script>
import SocialLinksBar from '@/components/SocialLinksBar'
import axios from 'axios'
import Redbone from '@/components/tabs/Redbone'
import Honey from '@/components/tabs/Honey'
import FixingABrokenHeart from '@/components/tabs/FixingABrokenHeart'
import FancyClothes from '@/components/tabs/FancyClothes'

export default {
    name: 'SongTab',
    components: {
        SocialLinksBar,
        Redbone,
        Honey,
        FixingABrokenHeart,
        FancyClothes
    },
    data () {
        return {
            artist: [],
            song: [],
            socialLinks: [],
            hasSocials: false
        }
    },
    methods: {
        getData (type, id) {
            return axios.get(`https://my-json-server.typicode.com/Z04P/fakendgtr/${type}${id}`);
        },
        checkSocials () {
            let bool = true;

            try {

                if (this.socialLinks[0].hasWebsite === false || this.socialLinks[0].hasYoutube === false ||
                    this.socialLinks[0].hasTwitter === false || this.socialLinks[0].hasSoundcloud === false ||
                    this.socialLinks[0].hasFacebook === false || this.socialLinks[0].hasInstagram === false) {
                    bool = false;
                }

            } catch (error) {
                console.log(error);
            }

            return this.hasSocials = bool;
        }
    },
    created () {
        let artistId = this.$route.params.artistId;
        let songId = this.$route.params.songId;

        this.getData('artists', `/${artistId}`)
            .then(response => this.artist = response.data)
            .catch(error => console.log(error));

        this.getData('songs', `/${songId}`)
            .then(response => this.song = response.data)
            .catch(error => console.log(error));

        this.getData('socialLinks', `?pk=${artistId}`)
            .then(response => this.socialLinks = response.data)
            .catch(error => console.log(error));
    },
    watch: {
        socialLinks () {
            this.checkSocials();
        }
    }
}
</script>
<style scoped>
    article {
        overflow: auto;
    }
    .tabs-wrapper {
        display: flex;
        justify-content: center;
    }
</style>
