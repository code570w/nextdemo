import React, { Suspense } from "react";
import Image from 'next/image';
import checkIcon from '../images/check-icon-oval.svg';
import ProductsDipslay from "./ProductsDipslay";
import florida from '../images/florida-labor-law-poster.jpg';


export default async function Products() {
	
	
  return (
    <>
      <main>
        <section className="inner-banner-section bg-navy-blue">
			<div className="container">
				<div className="row justify-content-center text-center py-lg-4">
					<div className="col-md-8 col-xl-7 inner-banner-left mb-4 mb-lg-0 ps-lg-0">
						<h3 className="text-uppercase font-21 text-bright-sky-blue">select your state below</h3>
						<h1 className="text-white font-56 font-Proxiextrabold mb-xl-3">State & Federal Mandated Labor Law Posters</h1>
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
		<section className="product-info-section bg-light-gray">
			<div className="container">
				<div className="row gx-xxl-5">
					<div className="col-lg-5 offset-lg-1 product-left-col mb-4 mb-lg-0">
						<Image src={florida} width={500} height={500}  className="img-fluid w-100" alt="Labor Law" />
					</div>
					<div className="col-lg-6 product-right-col">
						<div className="two-col-content pe-lg-0">
							<p>Our company ensures that the poster you receive meets all the current Federal and State Mandated Labor Law Poster Requirements.</p>
						</div>
						<div className="product-lists pt-3 pe-lg-4">
							<Suspense fallback={<div>loading...</div>}>
								<ProductsDipslay />
							</Suspense>
							
							<div className="total-product-info d-flex align-items-center justify-content-between py-3 px-lg-4 px-3 mt-5">
								<h3 className="font-24">Total <span className="total-price">$109.95</span></h3>
								<div className="cart-info d-flex">
									<input type="text" inputMode="numeric" id="quantity" className="input-qty font-Proxibold font-24" name="quantity" value="1" title="Qty" placeholder=""  autoComplete="off" readOnly />
									<button type="submit" className="add-cart-btn sky-blue-button select-box border-0" name="add-to-cart">Add to Cart</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		<section className="product-details-section">
			<div className="container">
				<div className="row mb-5 justify-content-center product-details-list">
					<div className="col-lg-10">
						<h2 className="font-36 mb-4 text-center">Product Details</h2>
						<ul className="list-unstyled mb-0 d-lg-flex">
							<li className="font-18 d-flex align-items-center"><Image width={500} height={500} src={checkIcon} className="img-fluid list-icon me-3" alt="Check Icon" /> Includes all mandatory State, Federal &amp; OSHA Labor Law Posters.</li>
							<li className="font-18 d-flex align-items-center"><Image width={500} height={500} src={checkIcon} className="img-fluid list-icon me-3" alt="Check Icon" /> Includes all mandatory State, Federal &amp; OSHA Labor Law Posters.</li>
							<li className="font-18 d-flex align-items-center"><Image width={500} height={500} src={checkIcon} className="img-fluid list-icon me-3" alt="Check Icon" /> Includes all mandatory State, Federal &amp; OSHA Labor Law Posters.</li>
						</ul>
					</div>
				</div>
				<div className="row justify-content-center">
					<div className="col-lg-10">
						<div className="accordion" id="accordionExample">
							<div className="accordion-item">
								<h2 className="accordion-header" id="headingOne">
								  <button className="accordion-button font-24" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
									Overview
								  </button>
								</h2>
								<div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
									<div className="accordion-body">
										<p>Our company ensures that the poster you receive meets all the current Federal and State Mandated Labor Law Poster Requirements. Our all in one Labor Law Poster comes with a $20,000 fine guarantee in case your business is fined for non-compliance for Labor Law Postings. These posters are 22” x 28” in size that makes them easy to read and understand. They are made of durable material, so you don’t have to worry about them fading or becoming damaged over time.</p>
									</div>
								</div>
							</div>
							<div className="accordion-item">
								<h2 className="accordion-header" id="headingTwo">
								  <button className="accordion-button font-24 collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
									Description
								  </button>
								</h2>
								<div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
								  <div className="accordion-body">
									<p><b><u>Florida Required Posters Included:</u></b></p>
									<ul>
										<li>Florida&apos;s Reemployment Fraud</li>
										<li>Florida&apos;s Law Prohibits Discrimination</li>
										<li>Florida&apos;s EOL “Equal Opportunity Is The Law</li>
										<li>Florida&apos;s Department of Economic Opportunity Division Workforce</li>
										<li>Florida&apos;s Child Labor Laws</li>
										<li>Florida&apos;s Notice to Employees Minimum Wage</li>
									</ul>
									<p><b><u>Federal Required Posters Included:</u></b></p>
									<ul>
										<li>Osha Job Safety and Health It&apos;s The Law</li>
										<li>Employee Rights Under The Fair Labor Standard Act - Federal Minimum Wage</li>
										<li>Employee Rights Under The Family and Medical Leave Act</li>
										<li>Employee Rights Employee Polygraph Protection Act</li>
										<li>The Uniformed Services Employment and Reemployment Act (USERRA)</li>
										<li>Employee Rights Under the National Labor Relations Act</li>
										<li>Equal Employment Opportunity Is The Law</li>
									</ul>
								  </div>
								</div>
							</div>
							<div className="accordion-item">
								<h2 className="accordion-header" id="headingThree">
								  <button className="accordion-button font-24 collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
									Recent Updates
								  </button>
								</h2>
								<div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
									<div className="accordion-body">
										<ul>
											<li>Florida Minimum Wage $10.00 per hour, effective January 1st, 2022</li>
											<li>Tipped Employees Minimum Wage $6.98 per hour, effective January 1st, 2022</li>
											<li>Unemployment compensation - Reemployment Assistance</li>
											<li>Workers Compensation</li>
										</ul> 
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
      </main>
    </>
  )
}
