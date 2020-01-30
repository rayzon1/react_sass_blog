import React from 'react';

export default function Email() {

    return (
        <section className="email">
          <div class="book">
            <div class="book__form">
              <form action="#" class="form">
                <div class="u-margin-bottom-medium">
                  <h2 class="heading-secondary">
                    Start Booking Now
                  </h2>
                </div>

                <div class="form__group">
                  <input
                    type="text"
                    id="name"
                    placeholder="Full Name"
                    class="form__input"
                    required
                  />
                  <label for="name" class="form__label">Full Name</label>
                </div>

                <div class="form__group">
                  <input
                    type="email"
                    id="email"
                    placeholder="Email Address"
                    class="form__input"
                    required
                  />
                  <label for="email" class="form__label">Email Address</label>
                </div>

                <div class="form__group u-margin-bottom-medium">
                  <div class="form__radio-group">
                    <input
                      type="radio"
                      class="form__radio-input"
                      id="small"
                      name="size"
                    />
                    <label for="small" class="form__radio-label">
                      <span class="form__radio-button"></span>
                      Small tour group
                    </label>
                  </div>

                  <div class="form__radio-group">
                    <input
                      type="radio"
                      class="form__radio-input"
                      id="large"
                      name="size"
                    />
                    <label for="large" class="form__radio-label">
                      <span class="form__radio-button"></span>
                      Large tour group
                    </label>
                  </div>
                </div>

                <div class="form__group">
                  <button class="btn btn--green">Next Step &rarr;</button>
                </div>
              </form>
            </div>
          </div>
        </section>
    )
}