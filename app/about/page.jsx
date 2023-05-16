import React from 'react'
import Image from 'next/image';
import compliance from '../images/compliance-questions.png';
import about from '../images/about-banner-image.png';
import law from '../images/labor-law.png';


export default function aboutPage() {
  return (
    <>
      <section className="inner-banner-section bg-navy-blue">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 inner-banner-left mb-4 mb-lg-0">
              <h3 className="text-uppercase font-21 text-bright-sky-blue">ABOUT OUR COMPANY</h3>
              <h1 className="text-white font-68 font-Proxiextrabold mb-xl-3">Expert Legal Consultants</h1>
              <div className="text-white banner-content">
                <p>When you are concerned about your business staying compliant, turn to the trusted name in labor law posters. At LLCS Labor, we have expert legal consultants to give you peace of mind about your business. We’ll help get your business off the ground and make sure it thrives!</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-5 offset-lg-1 inner-banner-right">
              <Image width={500} height={500} src={about} className="img-fluid w-100" alt="About Image" />
            </div>
          </div>
        </div>
      </section>
      <section className="two-column-with-image">
        <div className="container">
          <div className="row align-items-center py-lg-4">
            <div className="col-lg-4 offset-lg-2 two-left-col mb-4 mb-lg-0">
              <Image width={500} height={500} src={law} className="img-fluid  w-100 w-mb-75" alt="Labor Law" />
            </div>
            <div className="col-lg-6 two-right-col">
              <h3 className="font-21 text-uppercase text-bright-sky-blue mb-3">About</h3>
              <h2 className="font-48 mb-3 pe-lg-5 me-lg-5">More Than Just Labor Law Posters</h2>
              <div className="two-col-content pe-lg-0">
                <p>LLCS Labor has worked with all types of businesses, from nonprofits to LLCs. We provide labor law posters to ensure your compliance with state, federal, and OSHA laws. But that’s not all we do.</p>
                <p>We are truly in the business of helping businesses thrive! Well help you make smart business moves, whether that means forming an LLC, a C corp, or an S corp.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="full-width-image-section full-right-image">
        <div className="container-fluid">
          <div className="row flex-column-reverse flex-lg-row">
            <div className="col-lg-6 full-content-col d-lg-flex align-items-center mb-4 mb-lg-0">
              <div className="full-content">
                <h3 className="font-21 text-uppercase text-bright-sky-blue mb-3">About</h3>
                <h2 className="font-48 mb-3 font-Proxiextrabold">Labor Law Services That Are Customized to Your Business</h2>
                <div className="full-copy-content">
                  <p>Our extra attention to our customers sets us apart. We pay close attention to your business and get to know your individual needs. We know that every business is different, so we tailor our services to meet your unique requirements.</p>
                  <p>Whether you’re new to the business world or you’ve been around for years, LLCS Labor would love to become your trusted partner! Don’t let fear of noncompliance hold your business back. With LLCS Labor, you can be confident that your required posters are up to date and contain all the necessary information.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 pe-lg-0 full-image-col mb-4 mb-lg-0 position-relative">
              <Image width={500} height={500} src={law} className="img-fluid w-100" alt="Law Services" />
              <div className="product-lists image-overlay-content">
                <div className="product-info d-flex align-items-center">
                  <div className="ps-0">
                    <h3 className="mb-0 font-28 font-montserrat fw-bold">Get your Posters Today</h3>
                    <h4 className="mb-0 font-18">from $98.00</h4>
                  </div>
                  <div className="text-end pe-0">
                    <a href="#" className="sky-blue-button">Order</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="two-column-with-image bg-light-cyan">
        <div className="container">
          <div className="row align-items-center py-lg-4">
            <div className="col-lg-4 offset-lg-2 two-left-col mb-4 mb-lg-0">
              <Image width={500} height={500} src={compliance} className="img-fluid w-100 w-mb-75" alt="Compliance Questions"/>
            </div>
            <div className="col-lg-5 two-right-col">
              <h3 className="font-21 text-uppercase text-bright-sky-blue mb-3">contact us</h3>
              <h2 className="font-48 mb-3">Contact Us for All Your Compliance Questions</h2>
              <div className="font-24 two-col-content my-4">
                <p>Still have questions about staying compliant? Wed love to hear from you! Give us a call, and we &apos d be happy to help.</p>
              </div>
              <a href="/contact" className="sky-blue-button">contact us today</a>
            </div>
          </div>
        </div>
      </section>
      <section className="cta-section text-center">
        <div className="container">
          <div className="row justify-content-lg-center">
            <div className="col-lg-8 col-xl-6">
              <h2 className="text-white font-48 cta-title mb-3 font-Proxibold"><span>2023</span> Federal And State<br/> All In One Labor Law Poster</h2>
              <form className="inline-form">
                <div className="form-control-col">
                  <select className="form-select" aria-label="Default select example">
                    <option>Select Your State</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
                <div className="form-button-col">
                  <button type="submit" className="submit-button">order now</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
	
    </>
  )
}
