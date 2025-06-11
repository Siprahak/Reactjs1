function Contact() {
    return (
        <>
        <div className="container"> 
            {/* Header */}
            <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom"> 
            <div className="col-md-3 mb-2 mb-md-0"> 
                <a href="/" className="d-inline-flex align-items-center link-body-emphasis text-decoration-none"> 
                <i className="fa-solid fa-book fa-xl" style={{color: "#74C0FC" }}></i>
                <span className="ms-2 fs-4">Bookstore</span>
                </a> 
            </div> 
            <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0"> 
                <li><a href="#" className="nav-link px-2">Home</a></li> 
                <li><a href="#" className="nav-link px-2">Book</a></li> 
                <li><a href="#" className="nav-link px-2">Team</a></li> 
                <li><a href="#" className="nav-link px-2">Contact</a></li> 
            </ul> 
            <div className="col-md-3 text-end"> 
                <button type="button" className="btn btn-outline-primary me-2">Login</button> 
                <button type="button" className="btn btn-primary">Register</button> 
            </div> 
            </header>

            {/*Main*/}
            <div class="text-secondary px-4 py-5 text-center">
                <div class="py-5">
                    <h1 class="display-5 fw-bold text-black mb-4">Contact Us</h1>
                    <div class="col-lg-9 mx-auto">
                        <p class="fs-5 mb-4">Thank you for your interest in Team NovaTech. We welcome opportunities for collaboration, partnerships, and professional engagement related to our online bookstore platform. Our team brings together expertise in software engineering, data analytics, and user experience design to create innovative and scalable digital solutions. For business inquiries, proposals, or partnership opportunities, please reach out to us via the contact form or email provided. We look forward to connecting with you.</p>
                        <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
                            <button type="button" class="btn btn-outline-info btn-lg px-4 me-sm-3 fw-bold">Email</button>
                            <button type="button" class="btn btn-outline-info btn-lg px-4 me-sm-3 fw-bold">Linkedin</button> 
                            <button type="button" class="btn btn-outline-info btn-lg px-4 fw-bold">Phone</button> 
                        </div>
                    </div>
                </div>
            </div>

            {/*Footer*/}
            <div className="container">
            <footer className="py-3 my-4">
                <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                    <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Home</a></li>
                    <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Features</a></li>
                    <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Pricing</a></li>
                    <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">FAQs</a></li>
                    <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">About</a></li>
                </ul>
                <p className="text-center text-body-secondary">© 2025 NF </p>
            </footer>
            </div>


            </div>
        </>
    )
}

export default Contact