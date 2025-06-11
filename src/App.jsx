function App() {
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

        {/*Hero*/}
        <div className="container my-5">
         <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
            <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
               <h1 className="display-4 fw-bold lh-1 text-body-emphasis">Atomic Habits: Tiny Changes, Remarkable Results</h1>
               <p className="lead">Easiest proven way to form good habits and remove bad habits</p>
               <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
                <button type="button" className="btn btn-primary btn-lg px-4 me-md-2 fw-bold">Buy Now</button>
                <button type="button" className="btn btn-outline-secondary btn-lg px-4">Add To Wishlist</button> 
               </div>
            </div>
            <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg"> <img className="rounded-lg-3" src="https://wafuu.com/cdn/shop/products/atomic-habits-the-life-changing-million-copy-276923.jpg?v=1706142826" alt="" width="720" height="600"/> </div>
         </div>
        </div>

        {/*Product List*/}
        <section className="py-5 text-center container">
         <div className="row py-lg-5">
            <div className="col-lg-6 col-md-8 mx-auto">
               <h1 className="fw-light">Best Seller</h1>
               <p className="lead text-body-secondary">Discover the most popular books readers can’t put down. From gripping thrillers and timeless classics to inspiring memoirs and modern must-reads — these top picks are flying off the shelves. Whether you're looking for your next favorite story or a gift that’s sure to impress, our best sellers are guaranteed to deliver.</p>
               <p> <a href="#" className="btn btn-primary my-2 m-2">Views</a> <a href="#" className="btn btn-secondary my-2">Other Books</a> </p>
            </div>
         </div>
        </section>
        <div className="album py-5 bg-body-tertiary">
         <div className="container">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
               <div className="col">
                <div className="card h-100 d-flex flex-column shadow-sm">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4OZe9Wc5sZIF9iMJL7xNgDR2zST0CzZGGzw&s" alt="1984" className="card-img-top" height="350" />
                  <div className="card-body d-flex flex-column">
                    <p className="card-text flex-grow-1"><strong>1984</strong> by George Orwell — A dystopian novel that explores the dangers of totalitarianism and extreme political ideology.</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button type="button" className="btn btn-sm btn-outline-secondary">Buy Now</button>
                        <button type="button" className="btn btn-sm btn-outline-secondary">Add To Wishlist</button>
                      </div>
                      <small className="text-body-secondary">20 Reviews</small>
                    </div>
                  </div>
                </div>
               </div>
               <div className="col">
                <div className="card h-100 d-flex flex-column shadow-sm">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/To_Kill_a_Mockingbird_%28first_edition_cover%29.jpg/1200px-To_Kill_a_Mockingbird_%28first_edition_cover%29.jpg" alt="To Kill a Mockingbird" className="card-img-top" height="350" />
                    <div className="card-body d-flex flex-column">
                      <p className="card-text flex-grow-1"><strong>To Kill a Mockingbird</strong> by Harper Lee — A powerful tale of racial injustice and moral growth in the American South.</p>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                          <button type="button" className="btn btn-sm btn-outline-secondary">Buy Now</button>
                          <button type="button" className="btn btn-sm btn-outline-secondary">Add To Wishlist</button>
                        </div>
                        <small className="text-body-secondary">20 Reviews</small>
                      </div>
                    </div>
                  </div>
               </div>
               <div className="col">
                <div className="card h-100 d-flex flex-column shadow-sm">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/The_Great_Gatsby_Cover_1925_Retouched.jpg/960px-The_Great_Gatsby_Cover_1925_Retouched.jpg" alt="The Great Gatsby" className="card-img-top" height="350" />
                    <div className="card-body d-flex flex-column">
                      <p className="card-text flex-grow-1"><strong>The Great Gatsby</strong> by F. Scott Fitzgerald A tragic story of love, wealth, and ambition set in the Roaring Twenties, exposing the hollowness of the American Dream.</p>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                          <button type="button" className="btn btn-sm btn-outline-secondary">Buy Now</button>
                          <button type="button" className="btn btn-sm btn-outline-secondary">Add To Wishlist</button>
                        </div>
                        <small className="text-body-secondary">20 Reviews</small>
                      </div>
                    </div>
                  </div>
               </div>
               <div className="col">
                <div className="card h-100 d-flex flex-column shadow-sm">
                  <img src="https://covers.storytel.com/jpg-640/9780739632215.239da4bf-996f-4d57-a51c-738d532ed22e?optimize=high&quality=70&width=600" alt="Moby-Dick" className="card-img-top" height="350" />
                  <div className="card-body d-flex flex-column">
                    <p className="card-text flex-grow-1"><strong>Moby-Dick</strong> by Herman Melville An epic tale of obsession and revenge, following Captain Ahab’s relentless pursuit of the white whale.</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button type="button" className="btn btn-sm btn-outline-secondary">Buy Now</button>
                        <button type="button" className="btn btn-sm btn-outline-secondary">Add To Wishlist</button>
                      </div>
                      <small className="text-body-secondary">20 Reviews</small>
                    </div>
                  </div>
                </div>
               </div>
               <div className="col">
                <div className="card h-100 d-flex flex-column shadow-sm">
                  <img src="https://upload.wikimedia.org/wikipedia/id/3/32/Rye_catcher.jpg" alt="The Catcher in the Rye" className="card-img-top" height="350" />
                  <div className="card-body d-flex flex-column">
                    <p className="card-text flex-grow-1"><strong>The Catcher in the Rye</strong> by J.D. Salinger A coming-of-age novel that explores teenage angst and alienation through the voice of Holden Caulfield.</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button type="button" className="btn btn-sm btn-outline-secondary">Buy Now</button>
                        <button type="button" className="btn btn-sm btn-outline-secondary">Add To Wishlist</button>
                      </div>
                      <small className="text-body-secondary">20 Reviews</small>
                    </div>
                  </div>
                </div>
               </div>
               <div className="col">
                <div className="card h-100 d-flex flex-column shadow-sm">
                  <img src="https://upload.wikimedia.org/wikipedia/en/thumb/6/62/BraveNewWorld_FirstEdition.jpg/250px-BraveNewWorld_FirstEdition.jpg" alt="Brave New World" className="card-img-top" height="350" />
                  <div className="card-body d-flex flex-column">
                    <p className="card-text flex-grow-1"><strong>Brave New World</strong> by Aldous Huxley A chilling vision of a futuristic society where technology controls every aspect of life, and individuality is suppressed.</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button type="button" className="btn btn-sm btn-outline-secondary">Buy Now</button>
                        <button type="button" className="btn btn-sm btn-outline-secondary">Add To Wishlist</button>
                      </div>
                      <small className="text-body-secondary">20 Reviews</small>
                    </div>
                  </div>
                </div>
               </div>
               <div className="col">
                <div className="card h-100 d-flex flex-column shadow-sm">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyrreC33JdCNt65c5PH-QN-wefrh76IpIPPw&s" alt="Crime and Punishment" className="card-img-top" height="350" />
                  <div className="card-body d-flex flex-column">
                    <p className="card-text flex-grow-1"><strong>Crime and Punishment</strong> by Fyodor Dostoevsky A psychological exploration of guilt, redemption, and moral dilemmas through the story of a desperate young man in St. Petersburg.</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button type="button" className="btn btn-sm btn-outline-secondary">Buy Now</button>
                        <button type="button" className="btn btn-sm btn-outline-secondary">Add To Wishlist</button>
                      </div>
                      <small className="text-body-secondary">20 Reviews</small>
                    </div>
                  </div>
                </div>
               </div>
               <div className="col">
                <div className="card h-100 d-flex flex-column shadow-sm">
                  <img src="https://awsimages.detik.net.id/community/media/visual/2024/01/26/novel-grafis-the-hobbit.jpeg?w=700&q=90" alt="The Hobbit" className="card-img-top" height="350" />
                  <div className="card-body d-flex flex-column">
                    <p className="card-text flex-grow-1"><strong>The Hobbit</strong> by J.R.R. Tolkien A whimsical yet thrilling adventure that follows Bilbo Baggins as he leaves his quiet home for a journey with dwarves and dragons.</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button type="button" className="btn btn-sm btn-outline-secondary">Buy Now</button>
                        <button type="button" className="btn btn-sm btn-outline-secondary">Add To Wishlist</button>
                      </div>
                      <small className="text-body-secondary">20 Reviews</small>
                    </div>
                  </div>
                </div>
               </div>
               <div className="col">
                <div className="card h-100 d-flex flex-column shadow-sm">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/9/92/Frankenstein_poster_1931.jpg" alt="Frankenstein" className="card-img-top" height="350" />
                  <div className="card-body d-flex flex-column">
                    <p className="card-text flex-grow-1"><strong>Frankenstein</strong> by Mary Shelley A gothic masterpiece about a scientist who creates life, only to be haunted by the consequences of playing god.</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button type="button" className="btn btn-sm btn-outline-secondary">Buy Now</button>
                        <button type="button" className="btn btn-sm btn-outline-secondary">Add To Wishlist</button>
                      </div>
                      <small className="text-body-secondary">20 Reviews</small>
                    </div>
                  </div>
                </div>
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

export default App
