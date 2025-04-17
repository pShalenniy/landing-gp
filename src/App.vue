<template>
  <div class="page-wrapper">
    <app-header></app-header>
    <div class="content">
      <router-view v-slot="{ Component }">
        <transition name="fade" appear mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
      <trusted-by v-if="$route.meta.showStaticSections"></trusted-by>
      <blockquotes v-if="$route.meta.showStaticSections"></blockquotes>
    </div>
    <app-footer></app-footer>
    <cookie></cookie>
    <cookies-dialog></cookies-dialog>
  </div>
</template>

<script>
import Cookie from '@/components/layout/Cookie';
import CookiesDialog from '@/components/layout/CookiesDialog';
import AppHeader from '@/components/layout/AppHeader';
import AppFooter from '@/components/layout/AppFooter';
import TrustedBy from '@/components/layout/TrustedBy';
import Blockquotes from '@/components/layout/Blockquotes';

export default {
  name: 'App',
  components: {
    Cookie,
    CookiesDialog,
    AppHeader,
    AppFooter,
    TrustedBy,
    Blockquotes
  }
};
</script>

<style lang="scss">
@import 'src/scss/utils/__utils';
.page-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  position: relative;

  &::before {
    position: absolute;
    content: '';
    background-color: $secondary;
    top: 0;
    left: 0;
    right: 0;
    height: 74px;
    pointer-events: none;
    z-index: -1;

    @include query-767 {
      height: 68px;
    }
  }

  .content {
    flex-basis: 0;
    flex-grow: 1;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
