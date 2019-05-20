<template>
    <main class="pure-g center-content fullwidth-sm">
        <img class="pure-img cover-img" src="../assets/img/band.jpg" alt="Rock Band" />
        <article class="pure-u-1 pure-u-sm-1-1 fill-height fullwidth-sm">
            <header>
                <h1>Bands</h1>
            </header>
            <div class="table-header">
                <span class="pure-u-1 pure-u-sm-1-2">ARTIST</span>
                <span class="pure-u-1 pure-u-sm-1-2 align-text-right">TYPE</span>
            </div>
            <div class="list">
                <div v-bind:key="band.id" v-for="band in bands">
                    <band-list-item v-bind:band="band" />
                </div>
            </div>
        </article>
    </main>
</template>
<script>
import BandListItem from './BandListItem'

export default {
    name: "BandList",
    components: {
        BandListItem
    },
    props: ["bands"]
}
</script>
