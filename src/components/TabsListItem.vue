<template>
    <div>
        <ul :key="song.id" v-for="song in songs">
            <li>
                <router-link :to="`/bands/${song.pk}/${song.id}`">
                    <span class="pure-u-1 pure-u-sm-1-1 pure-u-md-1-2">
                        <i class="fas fa-music"></i> {{song.title}}
                    </span>
                    <span class="pure-u-1 pure-u-sm-1-1 pure-u-md-1-2 align-text-right">
                        Tab <i class="fas fa-guitar"></i>
                    </span>
                </router-link>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name: 'TabsListItem',
    props: ["songs"]
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
    .tab-count {
        text-align: right;
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