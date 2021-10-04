<template>
    <main class="pure-g center-content fullwidth-sm" v-if="artists">
        <img class="pure-img cover-img fade-in" src="../assets/img/band.jpg" alt="Rock Band" />
        <article class="pure-u-1 pure-u-sm-1-1 fill-height fullwidth-sm fade-in">
            <header>
                <h1>Artists</h1>
            </header>
            <div class="table-header">
                <span class="pure-u-1 pure-u-sm-1-2">ARTIST</span>
                <span class="pure-u-1 pure-u-sm-1-2 align-text-right">TYPE</span>
            </div>
            <div class="list">
                <div v-bind:key="artist.id" v-for="artist in artists">
                    <artist-list-item v-bind:artist="artist" />
                </div>
            </div>
        </article>
    </main>
</template>
<script>
import ArtistListItem from './ArtistListItem'

export default {
    name: "ArtistList",
    components: {
        ArtistListItem
    },
    props: ["artists"]
}
</script>
