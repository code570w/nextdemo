import React from 'react'

const header = () => {
  return (
    <header>
        <section className="top-header py-3 py-lg-0 px-1 px-md-3">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12 position-relative">
                        <h3 className="font-16 mb-2 mb-lg-0 text-black font-ProxiMedium text-center">Enjoy Free Shipping on orders more than $200!</h3>
                        <ul className="top-bar-menu list-unstyled mb-0 d-flex align-items-center justify-content-lg-end justify-content-center">
                            <li className="top-menu-item"><a href="#">Login <i className="fa-regular fa-user"></i></a></li>
                            <li className="top-menu-item"><a href="#">Cart <span className="total-cart-items">0</span></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
        <section className="secondary-header py-4 px-md-4">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="row">
                            <nav className="navbar navbar-expand-lg p-0">
                                <div className="col-12 col-lg-2 d-flex d-lg-block align-items-center justify-content-between">
                                    <a href="index.html" className="navbar-brand p-0 me-0" rel="home" aria-current="page">
                                        <img src="images/logo.png" className="custom-logo img-fluid" alt="" />
                                    </a>
                                    <button className="navbar-toggler float-end" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="true" aria-label="Toggle navigation">
                                        <span className="open-close-button position-relative">
                                            <i className="fas fa-bars" aria-hidden="true"></i>
                                        </span> 
                                    </button>
                                </div>
                                <div className="col-12 col-lg-10">
                                    <div id="navbarSupportedContent" className="main-menu collapse navbar-collapse justify-content-lg-end">
                                        <ul className="navbar-nav align-items-lg-center">
                                            <li className="menu-item current-menu-item"><a href="index.html">Home</a></li>
                                            <li className="menu-item"><a href="about.html">About</a></li>
                                            <li className="menu-item"><a href="faq.html">FAQ</a></li>
                                            <li className="menu-item"><a href="contact.html">Contact</a></li>
                                            <li className="menu-item menu-button"><a href="product-detail.html">Order Now</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </header>
  )
}

export default header