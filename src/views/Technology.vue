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
      <app-image
        class="section-img-bg"
        alt="Data ingestion & Processing"
        src="/images/tech/BG.png"
      ></app-image>
      <div class="container">
        <div class="row align-items-center">
          <div class="col-12 col-md-6">
            <h1 class="section-title h1">
              Built on cutting edge tech
            </h1>

            <p>
              We use cutting edge AI to get a deep understanding of traveller
              preferences and deliver personalised, right time, right channel
              messages designed to optimise conversions.
            </p>
          </div>
          <div class="col-12 col-md-6 pl-md-0">
            <app-image
              alt="Built specifically to enhance TMC revenues"
              src="/images/tech/Hero.png"
            ></app-image>
          </div>
        </div>
      </div>
    </section>

    <section class="section section-benefit section-img-left">
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-6">
            <img
              width="80px"
              class="section-icon"
              src="/images/tech/benefits-icons/Chart.svg"
              alt="Data ingestion & Processing"
            />

            <h2 class="section-title">
              Data ingestion & Processing
            </h2>

            <p>
              We start by ingesting data from multiple sources, including
              historical bookings, live trip information and company policies to
              get a clear understanding of each traveller and where the
              <strong>opportunity for retargeting</strong> lies.
            </p>
          </div>
        </div>
      </div>

      <app-image
        class="section-img"
        alt="Data ingestion & Processing"
        src="/images/tech/Data.png"
      ></app-image>
    </section>

    <section class="section section-benefit section-img-right">
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-6">
            <img
              width="80px"
              class="section-icon"
              src="/images/tech/benefits-icons/Ai.svg"
              alt="Recommendations Engine"
            />

            <h2 class="section-title">
              Recommendations Engine
            </h2>

            <p>
              Our state of the art AI then builds recommendations that are both
              <strong>personalised</strong> to each user and
              <strong>optimised</strong> for time and channel, to ensure
              conversion rates are maximised.
            </p>
          </div>
        </div>
      </div>

      <app-image
        class="section-img"
        alt="Recommendations Engine"
        src="/images/tech/Recc.png"
      ></app-image>
    </section>

    <section class="section section-benefit section-img-left">
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-6">
            <img
              width="80px"
              class="section-icon"
              src="/images/tech/benefits-icons/Care.svg"
              alt="Feedback loop & training"
            />

            <h2 class="section-title">
              Feedback loop & training
            </h2>

            <p>
              We track message and platform interactions and combine this with
              direct and indirect customer feedback to help fine-tune the
              recommendations for next time so they are
              <strong>always improving.</strong>
            </p>
          </div>
        </div>
      </div>

      <app-image
        class="section-img"
        alt="Feedback loop & training"
        src="/images/tech/Feedback.png"
      ></app-image>
    </section>

    <section
      class="section section-devices section-bg-secondary section-img-right"
    >
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-6">
            <h2 class="section-title h1">
              The Result
            </h2>

            <p>
              A happy traveller. A happy client, A happy TMC.
            </p>

            <router-link to="/request" class="btn btn-primary section-btn">
              Book a demo
            </router-link>
          </div>
        </div>
      </div>

      <app-image
        class="section-img section-img--contain position-right devices-tech"
        alt="The Result"
        src="/images/tech/Devices.png"
      ></app-image>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Technology'
};
</script>

<style scoped></style>
