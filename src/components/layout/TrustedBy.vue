<template>
  <section class="section section-trusted">
    <div class="container">
      <h2 class="section-title text-center">
        Trusted by
      </h2>

      <div class="trusted-grid">
        <img src="/images/home/trusted/gdg.svg" alt="Travel" />
        <img
          src="/images/home/trusted/focus.png"
          alt="Focus Travel Partnership"
        />
        <img
          src="/images/home/trusted/beyond.jpg"
          alt="Beyond Business Travel"
        />
        <img src="/images/home/trusted/booking.svg" alt="Booking.com" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'TrustedBy'
};
</script>

<style lang="scss" scoped>
.trusted-grid {
  display: flex;
  margin: 0 -16px;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding: 24px 0 0;

  img {
    margin: 16px;
    max-width: 20%;
    min-width: 200px;
    object-fit: contain;
  }

  @media (max-width: 767px) {
    justify-content: center;
  }
}
</style>
