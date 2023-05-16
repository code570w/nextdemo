import Image from 'next/image';
import checkIcon from './images/check-icon.svg';
import aboutImg from './images/about-image.jpg';
import submitPaper from './images/submit-paper.jpg';
import map from './images/map.png';
import creditCart from './images/shopping-credit-card.jpg';
import NavigatorImg from './images/The-Navigator-Programme.jpg';
import deviceprotectionbundles from './images/deviceprotectionbundles.jpg';


export default function Home() {
  return (
    <>
      
      <main>
        <section className="banner-section">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-xl-5">
                <h3 className="text-uppercase font-21 text-bright-sky-blue">STAY COMPLIANT IN 2023</h3>
                <h1 className="text-white font-56">State & Federal Mandated <br/>Labor Law Posters</h1>
                <form className="inline-form">
                  <div className="form-control-col">
                    <select className="form-select" aria-label="Default select example">
                      <option selected>Select Your State</option>
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
        <section className="bottom-banner-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 mb-3 mb-lg-0">
                <p className="text-white font-21 mb-0 d-flex align-items-center"><Image src={checkIcon} width={500} height={500} className="img-fluid list-icon me-3" alt="Check Icon" /> Includes all mandatory State, Federal &amp; OSHA Labor Law Posters.</p>
              </div>
              <div className="col-lg-4 mb-3 mb-lg-0">
                <p className="text-white font-21 mb-0 d-flex align-items-center"><Image src={checkIcon} width={500} height={500} className="img-fluid list-icon me-3" alt="Check Icon" /> Posters are made of a durable material</p>
              </div>
              <div className="col-lg-4">
                <p className="text-white font-21 mb-0 d-flex align-items-center"><Image src={checkIcon} width={500} height={500} className="img-fluid list-icon me-3" alt="Check Icon" /> Covers up to $20,000 Labor Law Poster Violation Warranty.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="full-width-image-section bg-light-gray full-left-image">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-6 ps-lg-0 full-image-col mb-4 mb-lg-0">
                <Image src={aboutImg} width={500} height={500} className="img-fluid w-100" alt="About Image" />
              </div>
              <div className="col-lg-6 full-content-col d-lg-flex align-items-center">
                <div className="full-content">
                  <h3 className="font-21 text-uppercase text-bright-sky-blue mb-3">About</h3>
                  <h2 className="font-48 mb-3">When You’re Concerned About Your Business</h2>
                  <p>Stay compliant, turn to the trusted name in labor law posters. At LLCS Labor, we have expert legal consultants to give you peace of mind about your business. We’ll help get your business off the ground and make sure it thrives!</p>
                  <div className="product-lists pt-3">
                    <div className="product-info d-flex align-items-center justify-content-between">
                      <div className="ps-0">
                        <h3 className="mb-0 font-28">Labor Law Posters</h3>
                        <h4 className="mb-0 font-18">from $98.00</h4>
                      </div>
                      <div className="text-end pe-0">
                        <a href="#" className="sky-blue-button">Order</a>
                      </div>
                    </div>
                    <div className="product-info d-flex align-items-center justify-content-between">
                      <div className="ps-0">
                        <h3 className="mb-0 font-28">Annual Report</h3>
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
          </div>
        </section>
        <section className="process-section">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-9 col-xl-7 text-center">
                <h3 className="font-21 text-uppercase text-bright-sky-blue">Our Process</h3>
                <h2 className="font-48">Find Labor Law Posters for your Business in a Few Steps</h2>
              </div>
            </div>
            <div className="row my-4 py-1 justify-content-center">
              <div className="col-xl-11 col-lg-12">
                <div className="row">
                  <div className="col-lg-4 process-col mb-4 mb-lg-0">
                    <div className="position-relative process-inner-block">
                      <Image src={submitPaper} width={500} height={500} className="img-fluid w-100" alt="Process Image" />
                      <div className="process-content">
                        <h3 className="process-title font-montserrat font-24 fw-bold d-flex align-items-center pb-1"><span>1</span>Entity&apos; Creation</h3>
                        <p className="text-black mb-0">Choose your entity&apos; creation state.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 process-col mb-4 mb-lg-0">
                    <div className="position-relative process-inner-block">
                      <Image src={deviceprotectionbundles} width={500} height={500} className="img-fluid w-100" alt="Process Image" />
                      <div className="process-content">
                        <h3 className="process-title font-montserrat font-24 fw-bold d-flex align-items-center pb-1"><span>2</span>Company Details</h3>
                        <p className="text-black mb-0">Enter your record id and verify company details.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 process-col">
                    <div className="position-relative process-inner-block">
                      <Image src={creditCart} width={500} height={500} className="img-fluid w-100" alt="Process Image" />
                      <div className="process-content">
                        <h3 className="process-title font-montserrat font-24 fw-bold d-flex align-items-center pb-1"><span>3</span>Submit Payment</h3>
                        <p className="text-black mb-0">Enter billing details to process order securely.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12 text-center">
                <a href="#" className="sky-blue-button">get started today!</a>
              </div>
            </div>
          </div>
        </section>
        <section className="posters-section bg-light-gray">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 posters-left-col px-xl-5 mt-5 mt-lg-0">
                <h2 className="font-48 mb-3">Trusetd by<br/> U.S. Business Owners</h2>
                <div className="accordion" id="accordionExample">
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                      <button className="accordion-button font-21" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                      What are labor law posters?
                      </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        <p>Labor law posters are the mandated state and federal employment law notices that employers with at least one employee or more are required to conspicuously post in an area frequented by all employees. Failure to display the correct state and federal employment law notices can result in penalties, fines and lawsuits.</p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                      <button className="accordion-button font-21 collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                      What labor law posters are required for my business?
                      </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                      <p>Federal labor law posters are generally the same for most businesses across the country. This includes the federal minimum wage, Employee Polygraph Protection, OSHA, FMLA, USERRA, and EEO. As far as state mandated posters, they vary from state to state. You can usually find out what is required by a individual state by visiting its Department of Labor Site. LLCS Labor, has made it simple so you can just choose your state and it will show you the required labor law posters for your state.You can view your state&apos;s requirements by clicking <a href="#">here.</a></p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                      <button className="accordion-button font-21 collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                      What happens if I do not post mandated labor law posters?
                      </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        <p>Failure to post the required, current state and federal employment law notices can result in fines up to $7,000. Fines vary by poster and the agency requiring the poster. Fines range from $110 to $10,000. The maximum fine is usually applied only if the employer repeatedly or knowingly violated the law. It is not common for state or federal agencies to inspect your workplaces specifically for labor law posters, although it can happen. In most cases, a federal or state agency investigates your workplace and having the correct labor law posters displayed are part of their investigation.</p> 
                      </div>
                    </div>
                  </div>
                </div>
                <a href="#" className="sky-blue-button">Shop Poster By State</a>
              </div>
              <div className="col-lg-6 col-xl-5 posters-right-col">
                <Image src={map} width={500} height={500} className="img-fluid w-100" alt="Map" />
              </div>
            </div>
          </div>
        </section>
        <section className="two-column-with-image bg-light-sea">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 two-left-col mb-4 mb-lg-0">
                <Image src={NavigatorImg} width={500} height={500} className="img-fluid w-100" alt="The Navigator Programme" />
              </div>
              <div className="col-lg-6 col-xl-5 two-right-col">
                <h3 className="font-21 text-uppercase text-bright-sky-blue mb-3">STAY COMPLIANT IN 2023</h3>
                <h2 className="font-48 mb-3">Stay Out Of Trouble</h2>
                <p>Does your business have the right labor law posters? Many businesses don&apos;t. But being compliant is easy when you work with LLCS Labor!</p>
                <ul>
                  <li>We provide you with all the posters that are mandated by state and federal law as well as OSHA.</li>
                  <li>Our legal expertise gives you peace of mind that all your bases are covered when it comes to compliance.</li>
                  <li>We go above and beyond by checking your current posters and making sure they&#39;re all up to date.</li>
                </ul>
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
                      <option selected>Select Your State</option>
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
      </main>
    </>
  )
}
