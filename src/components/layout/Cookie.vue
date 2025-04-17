<template>
  <div v-if="getCookiesPopup" v-show="!getCookiesDialog" class="cookie">
    <div class="cookie__text">
      We value your privacy. This site uses cookies and similar technologies to
      analyse traffic, personalise content and continually improve our service.
      For more detailed information about the cookies we use, see our
      <router-link to="/cookies">Cookies page</router-link>.
    </div>
    <button class="btn btn-outline-primary" @click="adjust()">
      Adjust settings
    </button>
    <button class="btn btn-primary" @click="accept()">
      Accept
    </button>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'Cookie',
  computed: {
    ...mapGetters('cookies', ['getCookiesDialog', 'getCookiesPopup'])
  },
  methods: {
    ...mapActions('cookies', ['setCookiesDialogs', 'acceptAllCookies']),
    accept() {
      this.acceptAllCookies();
    },
    adjust() {
      this.setCookiesDialogs(true);
    }
  }
};
</script>

<style lang="scss" scoped>
@import 'src/scss/utils/__utils';
.cookie {
  display: flex;
  align-items: center;
  background-color: #fff;
  border: 1px solid $border;
  border-radius: 10px;
  box-shadow: 0 2px 20px 0 rgba(52, 52, 57, 0.2);
  max-width: calc(100% - 32px);
  min-height: 72px;
  padding: 16px;
  position: fixed;
  bottom: 16px;
  left: 16px;
  right: 16px;
  z-index: 100;
  &__text {
    font-size: 14px;
    line-height: 18px;
    margin-right: auto;
    width: max-content;
  }
  .btn {
    margin-left: 8px;
    white-space: nowrap;
  }
  @include query-767 {
    flex-wrap: wrap;
    width: max-content;
    justify-content: flex-end;
    &__text {
      min-width: 100%;
      margin: 0 0 8px;
    }
  }
}
</style>
