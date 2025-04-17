<template>
  <footer class="footer">
    <div class="container">
      <div class="row">
        <div class="col-6 col-md-auto">
          <h3 class="footer__title">Website</h3>
          <router-link to="/about" class="footer__link">About</router-link>
          <router-link to="/technology" class="footer__link">
            Technology
          </router-link>
        </div>

        <div class="col-6 col-md-auto">
          <h3 class="footer__title">Legal</h3>
          <router-link to="/privacy-policy" class="footer__link">
            Privacy Policy
          </router-link>
          <router-link to="/terms-and-conditions" class="footer__link">
            Terms and Conditions
          </router-link>
          <router-link to="/cookies-policy" class="footer__link">
            Cookie Policy
          </router-link>
          <router-link to="/acceptable-use-policy" class="footer__link">
            Acceptable Use Policy
          </router-link>
        </div>

        <div class="col-12 col-md-auto">
          <h3 class="footer__title">Get in touch</h3>

          <div class="footer__row">
            <div class="footer__social">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin class="footer__social--icon" />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter class="footer__social--icon" />
              </a>
            </div>
          </div>
        </div>

        <div class="col-12 col-md-auto mr-auto order-md-first footer__flex">
          <div class="footer__logo">
            <Logo />
          </div>

          <p>© Landing, {{ getFullYear }}. <br />All Rights Reserved.</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import Logo from '@/images/logo.svg';
import Linkedin from '@/images/linkedin.svg';
import Twitter from '@/images/twitter.svg';

export default {
  name: 'AppFooter',
  components: {
    Logo,
    Linkedin,
    Twitter
  },
  computed: {
    getFullYear() {
      return new Date().getFullYear();
    }
  }
};
</script>

<style lang="scss" scoped>
@import 'src/scss/utils/__utils';

.footer {
  background-color: $secondary;
  padding: 48px 0;
  color: #fff;
  font-size: 14px;
  line-height: 18px;

  p {
    margin-bottom: 40px;

    &:last-child {
      margin-bottom: 0;
    }
  }

  a {
    @include hover {
      text-decoration: none;
    }
  }

  a:not(.footer__mail-link) {
    color: #fff;

    @include hover {
      color: $primary;
    }
  }

  &__logo {
    margin-bottom: 24px;
  }

  &__title {
    color: $light;
    margin-bottom: 24px;
    font-size: 14px;
    line-height: 18px;
  }

  &__link {
    display: block;

    &:not(:last-child) {
      margin-bottom: 16px;
    }
  }

  &__social {
    display: flex;
    align-items: center;
    margin-top: 24px;

    &--icon {
      width: 20px;
      height: 20px;
    }

    a:not(:last-child) {
      margin-right: 16px;
    }
  }

  @media (min-width: 768px) {
    .col-md-auto {
      &:not(:last-child) {
        margin-left: 42px;
      }
    }

    &__flex {
      display: flex;
      flex-direction: column;

      p {
        margin-top: auto;
      }
    }
  }

  @media (max-width: 767px) {
    padding: 24px 0 16px;

    &__title {
      margin-bottom: 16px;
    }

    &__logo {
      margin: 40px 0 8px;
    }

    &__row {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    &__social {
      min-width: calc(50% - 15px);
      margin: 0;

      a:not(:last-child) {
        margin-right: 12px;
      }
    }

    p:not(:last-child) {
      margin-bottom: 16px;
    }
  }
}
</style>
