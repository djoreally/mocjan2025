import type React from "react"

const ContactFormEmbed: React.FC = () => {
  return (
    <div className="bee-page-container">
      <div className="bee-row bee-row-1">
        <div className="bee-row-content">
          <div className="bee-col bee-col-1 bee-col-w12"></div>
        </div>
      </div>
      <div className="bee-row bee-row-2">
        <div className="bee-row-content">
          <div className="bee-col bee-col-1 bee-col-w12">
            <div className="bee-block bee-block-1 bee-form">
              <form method="POST" action="https://esvcs.enginemailer.com/ProcessOnlineSubscriber">
                <div className="bee-form-row">
                  <div className="bee-field bee-field-r1c0m0i1">
                    <label htmlFor="r1c0m0i1">Name</label>
                    <input id="r1c0m0i1" name="first_name" type="text" required />
                  </div>
                </div>
                <div className="bee-form-row">
                  <div className="bee-field bee-field-r1c0m0i2">
                    <label htmlFor="r1c0m0i2">Email</label>
                    <input id="r1c0m0i2" name="email" type="email" required />
                  </div>
                </div>
                <div className="bee-form-row">
                  <div className="bee-field bee-field-r1c0m0i3">
                    <label htmlFor="r1c0m0i3">Phone</label>
                    <input id="r1c0m0i3" name="phone" type="text" required />
                  </div>
                </div>
                <div className="bee-form-row">
                  <div className="bee-field bee-field-r1c0m0i4">
                    <label htmlFor="r1c0m0i4">Message</label>
                    <input id="r1c0m0i4" name="number_of_vehicles" type="text" required />
                  </div>
                </div>
                <div className="bee-form-row">
                  <div className="bee-field bee-field-r1c0m0i5">
                    <label htmlFor="r1c0m0i5"> </label>
                    <div className="bee-button-container">
                      <button id="r1c0m0i5" name="submitButton" type="submit" value="Submit">
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
                <input
                  type="hidden"
                  name="ThankYouURL"
                  id="thank_you_redirect_url"
                  value="/onlineformthankyou?id=G7H0sxuE5nmLCIZB7nTyCA%3D%3D&amp;sc=87axo7c90AlrgsICi1BN8Q%3D%3D"
                />
                <input id="isForeignHost" name="isForeignHost" type="hidden" value="isForeignHostTrue" />
                <input id="EncryptedFormId" name="EncryptedFormId" type="hidden" value="G7H0sxuE5nmLCIZB7nTyCA==" />
                <input id="EncryptedSchema" name="EncryptedSchema" type="hidden" value="87axo7c90AlrgsICi1BN8Q==" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactFormEmbed

