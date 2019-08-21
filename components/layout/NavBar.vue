<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="/">
        CompulsiveCoders
      </a>

      <a
        role="button"
        class="navbar-burger burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
        @click="toggleBurger"
      >
        <span aria-hidden="true">Hello</span>
        <span aria-hidden="true">Hello bis</span>
        <span aria-hidden="true">Hello ter</span>
      </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-start">
        <nuxt-link class="navbar-item is-active" to="/">
          Home
        </nuxt-link>

        <nuxt-link class="navbar-item" to="/category">
          Tech
        </nuxt-link>

        <nuxt-link class="navbar-item" to="/category">
          Debug
        </nuxt-link>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <span class="icon has-text-info">
            <a href="/"><i class="fa fa-twitter" /></a>
          </span>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  methods: {
    toggleBurger () {
      console.log('hello')
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
