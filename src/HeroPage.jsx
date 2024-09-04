function HeroPage() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-theme">
        <div className="container-fluid">
          <button
            data-mdb-button-init
            className="navbar-toggler"
            type="button"
            data-mdb-collapse-init
            data-mdb-target="#navbarExample01"
            aria-controls="navbarExample01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarExample01">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item active">
                <a className="nav-link" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Features
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Pricing
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div
        className="p-5 text-center bg-image"
        style={{
          backgroundImage:
            "url('https://mdbcdn.b-cdn.net/img/new/slides/041.webp')",
          height: "400px",
        }}
      >
        <div
          className="mask"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            backgroundSize: "covers",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="d-flex justify-content-center align-items-center h-100">
            <div className="text-white">
              <h1 className="mb-3">Norbu Tshering Lepcha</h1>
              <h4 className="mb-3">Subheading</h4>
              <a
                data-mdb-ripple-init
                className="btn btn-outline-light btn-lg"
                href="#!"
                role="button"
              >
                Call to action
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
    //     <div
    //       lc-helper="background"
    //       className="container-fluid py-5 mb-4 d-flex justify-content-center"
    //       style="  background-image: url('https://images.unsplash.com/photo-1519681393784-d120267933ba?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1124&amp;q=100');
    //     background-position: center;
    // background-size:cover;
    // background-repeat:no-repeat"
    //     >
    //       <div
    //         className="p-5 mb-4 lc-block col-xxl-7 col-lg-8 col-12"
    //         style=" backdrop-filter: blur(6px) saturate(102%);
    //     -webkit-backdrop-filter: blur(6px) saturate(102%);
    //     background-color: rgba(255, 255, 255, 0.45);
    //     border-radius: 12px;
    //     border: 1px solid rgba(209, 213, 219, 0.3);"
    //       >
    //         <div className="lc-block">
    //           <div editable="rich">
    //             <h2 className="fw-bolder display-3">Custom jumbotron</h2>
    //           </div>
    //         </div>
    //         <div className="lc-block col-md-8">
    //           <div editable="rich">
    //             <p className="lead">
    //               Using a series of utilities, you can create this jumbotron, just
    //               like the one in previous versions of Bootstrap. Check out the
    //               examples below for how you can remix and restyle it to your
    //               liking.
    //             </p>
    //           </div>
    //         </div>
    //         <div className="lc-block">
    //           <a className="btn btn-dark" href="#" role="button">
    //             Click me, I'm a button
    //           </a>
    //         </div>
    //       </div>
    //     </div>
    // <div
    //   classNameName="p-5 text-center bg-image rounded-3"
    //   style={{
    //     backgroundImage:
    //       "linear-gradient(#7ed56f, #28b485),url('/profile.jpg')",
    //     backgroundSize: "cover",
    //     height: "100vh",
    //   }}
    // >
    //   <div classNameName="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}>
    //     <div classNameName="d-flex justify-content-center align-items-center h-100">
    //       <div classNameName="text-white">
    //         <h1 classNameName="mb-3">Norbu Tshering Lepcha</h1>
    //         <h4 classNameName="mb-3">Computer Science</h4>
    //         <a
    //           data-mdb-ripple-init
    //           classNameName="btn btn-outline-light btn-lg"
    //           href="#!"
    //           role="button"
    //         >
    //           Call to action
    //         </a>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}

export default HeroPage;
