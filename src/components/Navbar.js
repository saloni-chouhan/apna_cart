import React from "react";

class Navbar extends React.Component {

  render() {
    console.log("Navbar props:", this.props);
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              Apna Cart
              <button type="button" className="btn btn-primary position-relative">
                Cart
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {this.props.totalCount}
                </span>
              </button>
            </a>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
