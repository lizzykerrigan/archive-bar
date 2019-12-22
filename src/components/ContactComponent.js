import React from "react";

const ContactComponent = () => {
  return (
    <div class="section-2">
      <div class="footer">
        <div class="w-layout-grid contact-form-grid">
          <div id="w-node-509be705858e-0bfda119" class="contact-form-wrap">
            <div class="contact-form-heading-wrap">
              <h2 class="contact-heading">Contact us</h2>
            </div>
            <div class="contact-form w-form">
              <form
                data-name="Get In Touch Form"
                name="wf-form-Get-In-Touch-Form"
                class="get-in-touch-form"
              >
                <label for="name">Name</label>
                <input
                  type="text"
                  class="text-field cc-contact-field w-input"
                  maxlength="256"
                  name="name"
                  data-name="Name"
                  placeholder="Your name"
                  id="Name"
                />
                <label for="Email-2">Email Address</label>
                <input
                  type="email"
                  class="text-field cc-contact-field w-input"
                  maxlength="256"
                  name="Email"
                  data-name="Email"
                  placeholder="Your email"
                  id="Email"
                  required=""
                />
                <label for="Message">Message</label>
                <textarea
                  id="Message"
                  name="Message"
                  data-name="Message"
                  maxlength="5000"
                  placeholder="What's on your mind?"
                  class="text-field cc-textarea cc-contact-field w-input"
                ></textarea>
                <input
                  type="submit"
                  value="Submit"
                  data-wait="Please wait..."
                  class="button w-button"
                />
              </form>
              <div class="status-message cc-success-message w-form-done">
                <div>Thank you! Your submission has been received!</div>
              </div>
              <div class="status-message cc-error-message w-form-fail">
                <div>Oops! Something went wrong while submitting the form.</div>
              </div>
            </div>
          </div>
          <div id="w-node-509be70585a6-0bfda119">
            <div class="details-wrap">
              <div class="label">Where we are</div>
              <div class="paragraph-light">
                2 Mellor Road
                <br />
                Cheadle Hulme
                <br />
                Cheadle
                <br />
                SK8 5AU
                <br />
                United Kingdom
              </div>
              <a
                href="https://goo.gl/maps/F7Xsf8xefBDcdHWf6"
                target="_blank"
                class="link"
              >
                Open in Google Maps
              </a>
            </div>
            <div class="details-wrap">
              <div class="label">opening HOURS</div>
              <div class="paragraph-light">
                12PM - 11PM, Mon to Sat
                <br />
                12PM - 10:30PM Sun
              </div>
            </div>
            <div class="details-wrap">
              <div class="label">CONTACT</div>
              <a
                href="mailto:archivebarandbottle@gmail.com"
                class="social-media-link"
              >
                archivebarandbottle@gmail.com
              </a>
            </div>
            <div class="details-wrap">
              <div class="label">Social media</div>
              <a
                href="https://www.facebook.com/archivebarandbottle/photos/?ref=page_internal"
                target="_blank"
                class="social-media-link"
              >
                Facebook
              </a>
              <a
                href="https://www.instagram.com/archivebarandbottle/?hl=en"
                target="_blank"
                class="social-media-link"
              >
                Instagram
              </a>
              <a
                href="https://twitter.com/archive_bar?lang=en"
                target="_blank"
                class="social-media-link"
              >
                Twitter
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactComponent;
