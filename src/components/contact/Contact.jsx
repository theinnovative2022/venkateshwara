import React, { Component } from "react";
import ContactForm from "./ContactForm";
import './contact.css'

export default class Contact extends Component {
  render() {
    return (
      <>
      <div className="contact_container container-width-auto container">
      <div className="text-center">
				<p className="d-inline-block text-center text-uppercase border-bottom border-dark border-3 fw-bold fs-5 p-2 mb-0">
					contact us
				</p>
			</div>
        <div className="row px-5 py-1 align-items-center m-auto">
            <div className="col">
                <div className="iframe_container">
                  <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22605.43460090856!2d73.77412754796866!3d20.012696821307422!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddebade77b6b2d%3A0xe95b9b55a4380b08!2sNashik%20Municipal%20Corporation!5e0!3m2!1sen!2sin!4v1667118107477!5m2!1sen!2sin"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Location Map"
                  className="responsive_iframe"
                  ></iframe>
                </div>
            </div>
            <div className="col">
                <ContactForm></ContactForm>
            </div>
        </div>
      
      </div>
      </>
    );
  }
}
