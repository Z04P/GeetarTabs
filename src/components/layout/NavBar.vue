<template>
    <div class="pure-menu pure-menu-horizontal pure-menu-scrollable">
        <p class="site-logo">GEETAR TABS</p>
        <ul class="pure-menu-list">
            <li class="pure-menu-item">
                <router-link class="pure-menu-link" to="/">ARTISTS</router-link>
            </li>
            <li class="pure-menu-item">
                <router-link class="pure-menu-link" to="/about">ABOUT</router-link>
            </li>
            <li class="pure-menu-item">
                <router-link class="pure-menu-link" to="/contact">CONTACT</router-link>
            </li>
            <li class="pure-menu-item">
                <router-link class="pure-menu-link" to="/credits">CREDITS</router-link>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name: 'NavBar'
}
</script>
<style scoped>
    .pure-menu-scrollable {
        padding: 0;
    }
    .site-logo {
        float: left;
        font-size: 1.8em;
        font-weight: bold;
        margin: 35px 20px 0 100px;
    }
    .pure-menu {
        background-color: rgba(80, 80, 80, 0);
        color: rgb(40, 40, 40);
        margin-bottom: 5px;
        padding-right: 90px;
        text-align: right;
        font-family: 'Yanone Kaffeesatz', sans-serif;
    }
    a {
        padding: 50px 20px 20px 20px;
        background: linear-gradient(to top, rgb(245, 245, 245) 50%, rgb(130, 130, 130) 50%);
        background-size: 100% 200%;
        background-position: bottom;
        transition: all 0.2s ease-out;
        color: rgb(30, 30, 30);
    }
    a:visited {
        background-color: rgb(245, 245, 245);
    }
    a:hover {
        /* background-color: rgb(130, 130, 130); */
        background-position: top;
        color: rgb(245, 245, 245);
    }
    a:active {
        background-color: rgb(100, 100, 100);
        color: rgb(205, 205, 205);
    }
    @media only screen and (min-width: 0px) and (max-width: 424px) {
        .pure-menu-scrollable {
            padding: 0 0 0.5em 0;
        }
        .pure-menu {
            padding: 0;
        }
    }
    @media only screen and (min-width: 0px) and (max-width: 659px) {
        .site-logo {
            margin: 30px 20px 0 10px;
        }
        .pure-menu {
            padding-right: 10px;
        }
    }
    @media only screen and (min-width: 660px) and (max-width: 740px) {
        .site-logo {
            margin: 30px 20px 0 30px;
        }
        .pure-menu {
            padding-right: 20px;
            text-align: right;
        }
    }
    @media only screen and (min-width: 740px) and (max-width: 900px) {
        .site-logo {
            margin: 30px 20px 0 40px;
        }
        .pure-menu {
            padding-right: 40px;
            text-align: right;
        }
    }
    @media only screen and (min-width: 900px) and (max-width: 1100px) {
        .site-logo {
            margin: 30px 20px 0 60px;
        }
        .pure-menu {
            padding-right: 50px;
            text-align: right;
        }
    }
    @media only screen and (min-width: 1100px) and (max-width: 1290px) {
        .site-logo {
            margin: 30px 20px 0 80px;
        }
        .pure-menu {
            padding-right: 60px;
            text-align: right;
        }
    }
</style>
