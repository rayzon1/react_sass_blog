import React from "react";
// import sfBackground from "../img/sf-background.jpg";

export default function Email() {
  return (
    <section className="email">
      <div className="book">
        <div className="book__form">
          <form action="#" className="form">
            <div className="u-margin-bottom-md">
              <h2 className="book__heading heading-secondary">Start Booking Now</h2>
            </div>

            <div className="form__group">
              <input
                type="text"
                id="name"
                placeholder="Full Name"
                className="form__input"
                required
              />
              {/* <label for="name" className="form__label">
                Full Name
              </label> */}
            </div>

            <div className="form__group">
              <input
                type="email"
                id="email"
                placeholder="Email Address"
                className="form__input"
                required
              />
              {/* <label for="email" className="form__label">
                Email Address
              </label> */}
            </div>

            <div className="form__group">
              <button className="btn btn--green">Send Email &rarr;</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
