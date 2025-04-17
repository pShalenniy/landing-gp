<template>
  <div class="home">
    <section class="section section-hero-home section-img-right">
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-6">
            <h1 class="section-title h1">
              Built specifically to enhance TMC revenues
            </h1>

            <router-link to="/request" class="btn btn-primary section-btn">
              Book a demo
            </router-link>
          </div>
        </div>
      </div>
      <app-image
        class="section-img"
        alt="Built specifically to enhance TMC revenues"
        src="/images/home/benefits/hero.png"
      ></app-image>
    </section>

    <section class="section section-benefits">
      <div class="container">
        <div class="benefits-grid">
          <div class="benefits-grid__item">
            <img
              width="40px"
              src="/images/home/benefits-icons/Bed-Benefits.svg"
              alt="Increase your attachment rates"
            />
            <h3>
              Increase your attachment rates
            </h3>
          </div>
          <div class="benefits-grid__item">
            <img
              width="40px"
              src="/images/home/benefits-icons/Ticket-Benefits.svg"
              alt="Capture in-destination spend"
            />
            <h3>
              Capture in- destination spend
            </h3>
          </div>
          <div class="benefits-grid__item">
            <img
              width="40px"
              src="/images/home/benefits-icons/Care-Benefits.svg"
              alt="Improve customer insights & duty of care"
            />
            <h3>
              Improve customer insights & duty of care
            </h3>
          </div>
          <div class="benefits-grid__item">
            <img
              width="40px"
              src="/images/home/benefits-icons/Dollar-Benefits.svg"
              alt="Maximise share of travel wallet"
            />
            <h3>
              Maximise share of travel wallet
            </h3>
          </div>
        </div>
      </div>
    </section>

    <section class="section section-how-it-works section-img-left">
      <how-it-works-video />

      <div class="container">
        <div class="row">
          <div class="col-12 col-md-6 ml-auto">
            <h2 class="section-title">
              How it works
            </h2>

            <ul class="how-it-works">
              <li class="how-it-works__item">
                <img
                  width="40px"
                  height="40px"
                  src="/images/home/how-it-works/Plug.svg"
                  alt="Increase your attachment rates"
                />
                <h3>
                  We connect to TMC platforms via a simple plug and play
                  integration.
                </h3>
              </li>
              <li class="how-it-works__item">
                <img
                  width="40px"
                  height="40px"
                  src="/images/home/how-it-works/Marvin.svg"
                  alt="Capture in-destination spend"
                />
                <h3>
                  Our AI engine, Marvin then processes user and trip data to
                  identify retailing opportunities.
                </h3>
              </li>
              <li class="how-it-works__item">
                <img
                  width="40px"
                  height="40px"
                  src="/images/home/how-it-works/Message.svg"
                  alt="Improve customer insights & duty of care"
                />
                <h3>
                  Marvin then sends personalised messages, optimised for time
                  and channel.
                </h3>
              </li>
              <li class="how-it-works__item">
                <img
                  width="40px"
                  height="40px"
                  src="/images/home/how-it-works/Dollar.svg"
                  alt="Maximise share of travel wallet"
                />
                <h3>
                  Leading travellers to a world class white labelled platform,
                  designed to maximise conversions.
                </h3>
              </li>
            </ul>

            <router-link to="/request" class="btn btn-primary section-btn">
              Book a demo
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <section class="section section-benefit section-img-right">
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-6">
            <img
              width="80px"
              class="section-icon"
              src="/images/home/benefits-icons/Bed-Benefits.svg"
              alt="Increase your attachment rates"
            />

            <h2 class="section-title">
              Increase your <span class="text-primary">attachment rates</span>
            </h2>

            <p>
              TMCs are great at selling flights, but often lose hotel, car hire,
              airport parking and other ancillary bookings to off-platform
              sources. <strong>Not any more.</strong>
            </p>
          </div>
        </div>
      </div>

      <app-image
        class="section-img"
        alt="Increase your attachment rates"
        src="/images/home/benefits/Increase.png"
      ></app-image>
    </section>

    <section class="section section-benefit section-img-left">
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-6">
            <img
              width="80px"
              class="section-icon"
              src="/images/home/benefits-icons/Ticket-Benefits.svg"
              alt="Improve customer insights & duty of care"
            />

            <h2 class="section-title">
              Capture in-destination <span class="text-primary">spend</span>
            </h2>

            <p>
              The rise of 'bleisure' means that today's experience driven
              business travellers seek out things to do both in their spare time
              and with clients. Restaurants, live events, guided tours or
              attractions?
            </p>
          </div>
        </div>
      </div>

      <app-image
        class="section-img position-right"
        alt="Improve customer insights & duty of care"
        src="/images/home/benefits/Capture.png"
      ></app-image>
    </section>

    <section class="section section-benefit section-img-right">
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-6">
            <img
              width="80px"
              class="section-icon"
              src="/images/home/benefits-icons/Care-Benefits.svg"
              alt="Maximise share of travel wallet"
            />

            <h2 class="section-title">
              Improve <span class="text-primary">customer insights</span> & duty
              of <span class="text-primary">care</span>
            </h2>

            <p>
              Delivering a <strong>total trip experience</strong> helps increase
              customer engagement and compliance. Our AI driven insights provide
              a better understanding of what travellers want, allowing you to
              deliver improvements to your service.
            </p>
          </div>
        </div>
      </div>

      <app-image
        class="section-img"
        alt="Maximise share of travel wallet"
        src="/images/home/benefits/Improve.png"
      ></app-image>
    </section>

    <section class="section section-benefit section-img-left">
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-6">
            <img
              width="80px"
              class="section-icon"
              src="/images/home/benefits-icons/Dollar-Benefits.svg"
              alt="Increase your attachment rates"
            />

            <h2 class="section-title">
              Maximise share of <span class="text-primary">travel wallet</span>
            </h2>

            <p>
              With airline margins reducing and travel volumes down, maximising
              revenues per trip is more important than ever.
              <strong>Personalised recommendations</strong> and incredible
              end-to-end service means that your clients are more motivated to
              book through you than ever.
            </p>
          </div>
        </div>
      </div>

      <app-image
        class="section-img"
        alt="Capture in-destination spend"
        src="/images/home/benefits/Maximise.png"
      ></app-image>
    </section>

    <section
      class="section section-devices section-bg-secondary section-img-right"
    >
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-6">
            <h2 class="section-title h1">
              Packaged up in an incredible white labelled experience
            </h2>

            <router-link to="/request" class="btn btn-primary section-btn">
              Book a demo
            </router-link>
          </div>
        </div>
      </div>

      <app-image
        class="section-img section-img--contain"
        alt="Built specifically to enhance TMC revenues"
        src="/images/home/benefits/Devices.png"
      ></app-image>
    </section>
  </div>
</template>

<script>
import HowItWorksVideo from '../components/home/HowItWorksVideo';

export default {
  name: 'Home',
  components: {
    HowItWorksVideo
  }
};
</script>
<style lang="scss" scoped>
@import 'src/scss/utils/__utils';

.section-hero-home {
  min-height: 640px;

  @media (max-width: 1199px) {
    min-height: auto;
    padding: 80px 0;
  }

  @media (max-width: 991px) {
    padding: 40px 0;
  }

  @media (max-width: 767px) {
    padding-bottom: 0;
  }
}

.section-benefits {
  @media (max-width: 767px) {
    padding: 0 0 40px;
    margin-top: -20px;
  }
}

.benefits-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 18px;

  &__item {
    background-color: #fff;
    border: 1px solid $border;
    border-radius: 8px;
    display: flex;
    align-items: center;
    padding: 20px 14px;
    box-shadow: 0 2px 20px 0 rgba(0, 195, 195, 0.1);

    h3 {
      font-size: 18px;
      line-height: 20px;
      font-weight: bold;
      margin: 0 0 0 12px;
    }

    img {
      flex: 0 0 40px;
      max-width: 40px;
      height: auto;
    }
  }

  @media (max-width: 1199px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 575px) {
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 8px;
  }
}

.section-how-it-works {
  padding: 40px 0;
  margin-bottom: 120px;

  &:after {
    position: absolute;
    content: '';
    right: 0;
    top: 0;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    background-color: $secondary;
    z-index: -1;
    width: 1440px;
    max-width: 100%;
  }

  .section-title {
    color: #fff;
  }

  .section-img {
    margin-right: 1px;
  }

  @media (max-width: 1199px) {
    margin-bottom: 40px;
  }

  @media (max-width: 767px) {
    padding-top: 0;
    margin: 0;

    &:after {
      width: 100%;
    }
  }
}

.how-it-works {
  list-style: none;
  padding: 0;
  margin: 0;

  &__item {
    display: flex;
    align-items: center;

    &:not(:last-child) {
      margin-bottom: 28px;
    }

    h3 {
      font-size: 14px;
      line-height: 18px;
      color: #fff;
      margin: 0 0 0 16px;
    }

    img {
      flex: 0 0 40px;
      max-width: 40px;
      height: auto;
    }
  }
}
</style>
