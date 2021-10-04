<template>
    <ul>
        <li>
            <router-link :to="`/artists/${artist.id}`">
                <span class="pure-u-1 pure-u-sm-1-2">
                    <img class="pure-img artist-img" :src="artist.artistImgUrl" alt="artist" />
                    {{artist.name}}
                </span>
                <span class="pure-u-1 pure-u-sm-1-2 align-text-right vertical-middle">
                    {{artist.tabCount}} Tabs <i class="fas fa-guitar"></i>
                </span>
            </router-link>
        </li>
    </ul>
</template>
<script>
export default {
    name: 'ArtistListItem',
    props: ["artist"]
}
</script>
<style scoped>
    ul {
        margin: 0;
        padding: 0;
    }
    li {
        list-style: none;
        padding: 15px;
        border-bottom: 1px dashed rgb(200, 200, 200);
    }
    a {
        padding: 15px 0;
        text-decoration: none;
        color: rgb(30, 30, 30);
    }
    li:hover {
        background-color: rgb(220, 220, 220);
        transition: 0.3s;
    }
    li:active {
        background-color: rgb(100, 100, 100);
        transition: 0.3s;
    }
    li:active span {
        color: rgb(240, 240, 240);
    }
</style>
