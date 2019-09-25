<template>
  <nav ref="navbar" class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="/">
        CompulsiveCoders
      </a>

      <a
        ref="burger"
        role="button"
        class="navbar-burger burger clickable"
        aria-label="menu"
        aria-expanded="false"
        data-target="main-navbar"
        @click="toggleBurger"
      >
        <span aria-hidden="true" />
        <span aria-hidden="true" />
        <span aria-hidden="true" />
      </a>
    </div>

    <div id="main-navbar" ref="menu" class="navbar-menu">
      <div class="navbar-start">
        <nuxt-link class="navbar-item is-active" to="/">
          Home
        </nuxt-link>

        <nuxt-link class="navbar-item" to="/tech">
          Tech
        </nuxt-link>

        <nuxt-link class="navbar-item" to="/debug">
          Debug
        </nuxt-link>

        <nuxt-link class="navbar-item" to="/maths">
          Maths
        </nuxt-link>
      </div>

      <div class="navbar-end is-hidden-mobile">
        <div class="navbar-item">
          <span class="icon has-text-info">
            <a target="_blank" href="https://twitter.com/compulsivCoders"><i class="fa fa-twitter" /></a>
          </span>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data () {
    return {
      scrollPosition: null
    }
  },
  mounted () {
    window.addEventListener('scroll', this.updateScroll)
  },
  methods: {
    updateScroll () {
      this.scrollPosition = window.scrollY
      if (this.scrollPosition > 100) {
        this.$refs.navbar.classList.add('is-fixed-top')
      } else {
        this.$refs.navbar.classList.remove('is-fixed-top')
      }
    },
    toggleBurger () {
      this.$refs.menu.classList.toggle('is-active')
      this.$refs.burger.classList.toggle('is-active')
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../../assets/theme.scss';

  .navbar {
    border-bottom: 1px solid rgba(0, 0, 0, 0.08);

    .navbar-brand .navbar-item {
      font-weight: bold;
      font-size: 1rem;
      text-transform: uppercase;
      margin-left: 10px;
      color: $grey-dark;
      vertical-align: bottom;
    }

    .navbar-start {
      margin-left: 20px;
    }

    .navbar-end {
      margin-right: 20px;
    }

    .navbar-item {
      text-transform: uppercase;
      font-size: 0.8em;
      font-family: 'MontserratSemiBold';

      .icon {
        width: 1.5rem;
        height: 1.5rem;
        font-size: 1.5rem;
      }
    }

  }
</style>
