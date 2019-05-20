<template>
    <ul>
        <li>
            <router-link :to="`/bands/${band.id}`">
                <span class="pure-u-1 pure-u-sm-1-2">
                    <img class="pure-img band-img" :src="band.bandImgUrl" alt="artist" />
                    {{band.name}}
                </span>
                <span v-if="band.tabCount === 1" class="pure-u-1 pure-u-sm-1-2 align-text-right vertical-middle">
                    {{band.tabCount}} Tab <i class="fas fa-guitar"></i>
                </span>
                <span v-else class="pure-u-1 pure-u-sm-1-2 align-text-right vertical-middle">
                    {{band.tabCount}} Tabs <i class="fas fa-guitar"></i>
                </span>
            </router-link>
        </li>
    </ul>
</template>
<script>
export default {
    name: 'BandListItem',
    props: ["band"]
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
        background-color: rgb(200, 200, 200);
    }
    li:active {
        background-color: rgb(180, 180, 180);
    }
</style>
