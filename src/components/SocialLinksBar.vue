<template>
    <div class="pure-menu pure-menu-horizontal pure-menu-scrollable social-links">
        <ul class="pure-menu-list" v-if="socialLinks">
            <!-- todo: tooltip -->
            <li v-if="socialLinks.hasWebsite === true" class="pure-menu-item">
                <a :href="socialLinks.webUrl" class="pure-menu-link">
                    <i class="fas fa-globe"></i>
                </a>
            </li>
            <li v-if="socialLinks.hasYoutube === true" class="pure-menu-item">
                <a :href="socialLinks.youtubeUrl" class="pure-menu-link">
                    <i class="fab fa-youtube youtube"></i>
                </a>
            </li>
            <li v-if="socialLinks.hasTwitter === true" class="pure-menu-item">
                <a :href="socialLinks.twitterUrl" class="pure-menu-link">
                    <i class="fab fa-twitter twitter"></i>
                </a>
            </li>
            <li v-if="socialLinks.hasSoundcloud === true" class="pure-menu-item">
                <a :href="socialLinks.soundcloudUrl" class="pure-menu-link">
                    <i class="fab fa-soundcloud soundcloud"></i>
                </a>
            </li>
            <li v-if="socialLinks.hasFacebook === true" class="pure-menu-item">
                <a :href="socialLinks.facebookUrl" class="pure-menu-link">
                    <i class="fab fa-facebook facebook"></i>
                </a>
            </li>
            <li v-if="socialLinks.hasInstagram === true" class="pure-menu-item">
                <a :href="socialLinks.instagramUrl" class="pure-menu-link">
                    <i class="fab fa-instagram instagram"></i>
                </a>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name: 'SocialLinksBar',
    props: ["socialLinks"]
}
</script>
<style scoped>
    .youtube {
        color: rgb(255, 0, 0);
    }
    .twitter {
        color: rgb(56, 161, 243);
    }
    .soundcloud {
        color: rgb(255, 149, 51);
    }
    .facebook {
        color: rgb(66, 103, 178);
    }
    .instagram {
        background: #d6249f;
        background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%);
        color: rgb(235, 235, 235);
        border-radius: 2px;
        padding: 2px;
        font-size: 14px;
    }
    .pure-menu {
        padding: 0;
    }
    .pure-menu-link {
        margin: 5px 5px 15px 5px;
        padding: 15px;
        border-radius: 10px;
        background-color: rgb(253, 253, 253);
    }
    .pure-menu-link:hover {
        animation: btnHover 0.4s ease-out forwards alternate;
    }
    .pure-menu-link:active {
        animation: btnActive 0.3s ease-in forwards;
    }

    @keyframes btnHover {
        from { 
            background-color: rgb(240, 240, 240);
            -webkit-transform: scale(1);
            -ms-transform: scale(1);
            transform: scale(1);
        }
        to { 
            background-color: rgb(220, 220, 220);
            -webkit-transform: scale(1.1);
            -ms-transform: scale(1.1);
            transform: scale(1.1);
        }
    }

    @keyframes btnActive {
        from {
            background-color: rgb(220, 220, 220);
            -webkit-transform: scale(0.90);
            -ms-transform: scale(0.90);
            transform: scale(0.90);
        }
        to {
            background-color: rgb(200, 200, 200);
            -webkit-transform: scale(1);
            -ms-transform: scale(1);
            transform: scale(1);
        }
    }
</style>
