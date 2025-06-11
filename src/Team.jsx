function Team(){
    return(
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
            <div class="pricing-header p-3 pb-md-4 mx-auto text-center">
               <h1 class="display-4 fw-normal text-body-emphasis">Team NovaTech</h1>
               <p class="fs-5 text-body-secondary">Team NovaTech is a dynamic group of interdisciplinary professionals passionate about building innovative digital solutions that solve real-world problems. With expertise ranging from software engineering to user experience design and data science, NovaTech focuses on creating scalable, user-friendly products that combine cutting-edge technology with elegant design. The team thrives on collaboration, continuous learning, and a drive to push the boundaries of what's possible in tech.</p>
            </div>
         <main>
            <div class="row row-cols-1 row-cols-md-3 mb-3 text-center">
               <div class="col">
                  <div class="card mb-4 rounded-3 shadow-sm border-primary">
                     <div class="card-header py-3 text-bg-primary border-primary">
                        <h4 class="my-0 fw-normal">UI/UX Designer</h4>
                     </div>
                     <div class="card-body">
                        <img src="https://media.istockphoto.com/id/1212006375/photo/confident-asian-businesswoman-in-office.jpg?s=612x612&w=0&k=20&c=SEgvQZiWHK1uqefySpyFTJ8oMHpdnWyjkoZymrFUpHA=" alt="Dr. Lillian Cheng" className="card-img-top" style={{ width: '100%', height: '300px', objectFit: 'cover' }} />
                        <h2 class="card-title pricing-card-title">Dr. Lillian Cheng</h2>
                        <ul class="list-unstyled mt-3 mb-4">
                           <li>Ph.D. in Human-Computer Interaction</li>
                           <li>University of Edinburgh, United Kingdom</li>
                        </ul>
                     </div>
                  </div>
               </div>
               <div class="col">
                  <div class="card mb-4 rounded-3 shadow-sm border-primary">
                     <div class="card-header py-3 text-bg-primary border-primary">
                        <h4 class="my-0 fw-normal">Data Analyst</h4>
                     </div>
                     <div class="card-body">
                        <img src="https://media.istockphoto.com/id/1300437846/photo/young-latin-businessman-working-at-his-desk-at-office-in-mexico-city.jpg?s=612x612&w=0&k=20&c=ZFk5RPXcSqBdzyb0SsshZyeb4c53awkh5bCfQzwl_4c=" alt="Marcus Valdez" className="card-img-top" style={{ width: '100%', height: '300px', objectFit: 'cover' }} />
                        <h2 class="card-title pricing-card-title">Marcus Valdez</h2>
                        <ul class="list-unstyled mt-3 mb-4">
                           <li>M.Sc. in Data Science</li>
                           <li>National University of Singapore</li>
                        </ul>
                     </div>
                  </div>
               </div>
               <div class="col">
                  <div class="card mb-4 rounded-3 shadow-sm border-primary">
                     <div class="card-header py-3 text-bg-primary border-primary">
                        <h4 class="my-0 fw-normal">Backend Developer</h4>
                     </div>
                     <div class="card-body">
                        <img src="https://thumbs.dreamstime.com/b/young-male-office-worker-sitting-office-smiling-22049588.jpg" alt="Aiden Brooks" className="card-img-top" style={{ width: '100%', height: '300px', objectFit: 'cover' }} />
                        <h2 class="card-title pricing-card-title">Aiden Brooks</h2>
                        <ul class="list-unstyled mt-3 mb-4">
                           <li>B.Eng. in Software Engineering</li>
                           <li>University of Toronto, Canada</li>
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
         </main>
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
export default Team