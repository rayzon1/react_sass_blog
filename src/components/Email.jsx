import React from "react";
// import sfBackground from "../img/sf-background.jpg";

export default function Email() {
  return (
    <section className="email">
      <div className="book">
        <div className="book__form">
          <form className="form" name="contact" method="post">
            <input type="hidden" name="contact" value="contact" />

            <div className="u-margin-bottom-md">
              <h2 className="book__heading heading-secondary">CONTACT ME</h2>
            </div>

            <div className="form__group">
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Full Name"
                className="form__input"
                required
              />
            </div>

            <div className="form__group">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email Address"
                className="form__input"
                required
              />
            </div>

            <div className="form__group">
              <textarea
                type="text"
                name="message"
                id="comments"
                placeholder="Comments"
                className="form__input form__input--textarea"
              />
            </div>

            <div className="form__group">
              <button className="btn btn--green" type="submit">Send Email &rarr;</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
