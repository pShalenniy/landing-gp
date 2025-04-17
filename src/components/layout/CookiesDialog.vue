<template>
  <div v-if="getCookiesDialog" class="dialog">
    <div class="cookies-dialog">
      <h2>Your privacy</h2>
      <p>
        Cookies are small text files that are placed on your computer by
        websites that you visit. They are widely used in order to make websites
        work, or work more efficiently, as well as to provide information to the
        owners of the site. Because we respect your right to privacy, you can
        choose not to allow some kinds of cookies. Below you can find out about
        the types of cookies that we use, and change your default settings.
        Blocking some types of cookies may affect your experience of the site
        and the services we are able to offer.
      </p>

      <h3>Necessary Cookies</h3>
      <p>
        These cookies are necessary for our site to function and cannot be
        switched off in our system. They are set in response to provide our core
        service, ensure the security of our site and record your cookie
        preferences.
      </p>

      <h4>Security</h4>
      <label class="switcher">
        <input v-model="userExperience" type="checkbox" disabled />
        <span class="switcher__label">User experience</span>
        <span class="switcher__button"></span>
      </label>

      <label class="switcher">
        <input v-model="cookiePreferences" type="checkbox" disabled />
        <span class="switcher__label">Cookie Preferences</span>
        <span class="switcher__button"></span>
      </label>

      <h3>Analytics Cookies</h3>
      <p>
        These cookies allow us to identify the most and least popular sections
        of the site and see how users move around on the site so that we can
        measure and improve the performance of our site . All of the information
        we gather is aggregated and anonymous.
      </p>
      <!--<label class="switcher">
        <input v-model="cookies.amplitudeAnalytics" type="checkbox" />
        <span class="switcher__label">Amplitude Analytics</span>
        <span class="switcher__button"></span>
      </label>-->
      <label class="switcher">
        <input v-model="cookies.googleAnalytics" type="checkbox" />
        <span class="switcher__label">Google Analytics</span>
        <span class="switcher__button"></span>
      </label>

      <hr class="my-5" />
      <div class="d-flex justify-content-center">
        <button class="btn btn-outline-primary" @click="close()">
          Cancel
        </button>

        <button class="btn btn-primary ml-3" @click="save()">
          Save
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
  name: 'CookiesDialog',
  data() {
    return {
      userExperience: true,
      cookiePreferences: true,
      cookies: {
        amplitudeAnalytics: true,
        googleAnalytics: true
      }
    };
  },
  computed: {
    ...mapGetters('cookies', ['getCookiesDialog', 'isGoogleAnalyticsCookies'])
  },
  methods: {
    ...mapActions('cookies', [
      'setCookiesDialogs',
      'setGoogleAnalytics',
      'setCookiesPopup'
    ]),
    save() {
      this.setGoogleAnalytics(this.cookies.googleAnalytics);
      this.setCookiesPopup(false);
      this.setCookiesDialogs(false);
    },
    close() {
      this.setCookiesDialogs(false);
    }
  },
  created() {
    if (this.isGoogleAnalyticsCookies !== null) {
      this.cookies.googleAnalytics = this.isGoogleAnalyticsCookies;
    }
  }
};
</script>

<style lang="scss" scoped>
@import 'src/scss/utils/__utils';
h2 {
  margin-bottom: 12px;
  font-weight: bold;
}
h3 {
  margin-top: 16px;
  font-weight: bold;
}
h4 {
  margin: 4px 0;
  font-weight: bold;
}
p,
h3 {
  margin-bottom: 8px;
}
.dialog {
  background-color: rgba(33, 33, 33, 0.46);
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}
.cookies-dialog {
  max-height: 100%;
  max-width: 600px;
  overflow: auto;
  background-color: #fff;
  border: 1px solid #dbdbdb;
  border-radius: 10px;
  padding: 24px;
  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 1px 5px 0 rgba(0, 0, 0, 0.12);
  .btn {
    min-width: 130px;
  }
}
.switcher {
  display: flex;
  align-items: center;
  position: relative;

  &__label {
    flex-basis: 0;
    flex-grow: 1;
    min-width: 1px;
    font-weight: 600;
  }

  &__button {
    margin-left: 12px;
    width: 48px;
    border-radius: 14px;
    height: 28px;
    background-color: #e0e0e0;
    position: relative;
    transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
    cursor: pointer;

    &:after {
      content: '';
      position: absolute;
      border-radius: 50%;
      top: calc(50% - 10px);
      left: 4px;
      height: 20px;
      width: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
      background-color: #fff;
      z-index: 2;
    }
  }

  input {
    opacity: 0;
    position: absolute;
    width: 0;
    height: 0;

    &:checked ~ .switcher__button {
      background-color: rgba($primary, 0.3);

      &:after {
        left: 24px;
        background-color: $primary;
      }
    }
  }
}
</style>
