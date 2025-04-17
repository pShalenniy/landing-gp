<template>
  <div class="technology">
    <section class="section section-hero section-img-right">
      <svg
        class="section-img-bg"
        width="100%"
        viewBox="0 0 1440 712"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0,-1000L1440,-1000L1440,556L0,712" fill="#0D1040" />
      </svg>
      <div class="container">
        <div class="row align-items-center">
          <div class="col-12 col-md-6">
            <h1 class="section-title h1">
              Looking to increase attachment rates and capture in-destination
              spend?
            </h1>
          </div>
          <div class="col-12 col-md-6 pl-md-0">
            <div class="request-form">
              <iframe
                src="https://cdn.forms-content.sg-form.com/3e301c89-5008-11eb-a3cc-96fefc896756"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Request',
  data: () => ({
    request: {
      firstName: '',
      lastName: '',
      companyName: '',
      email: ''
    }
  }),
  methods: {
    handleSubmit() {
      console.log('submit');
    }
  }
};
</script>

<style lang="scss" scoped>
@import 'src/scss/utils/__utils';
.request-form {
  width: 380px;
  max-width: 100%;
  margin-left: auto;
  border-radius: 16px;
  background-color: #fff;
  box-shadow: 0 2px 40px 0 rgba(52, 52, 57, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  iframe {
    width: 100%;
    height: 500px;
    border: 0;
  }

  @include query-767 {
    margin-right: auto;
  }

  @include queryMax(374px) {
    margin-left: -16px;
    margin-right: -16px;
    border-radius: 0;
    max-width: calc(100% + 32px);
  }
}
</style>
