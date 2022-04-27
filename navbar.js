function NavBar(){
  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

  return(
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand active" href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="Homepage"><img src="./bank.png" width="25" height="25" className="d-inline-block align-top"/>
        Bad Bank</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="#/CreateAccount/" data-toggle="tooltip" data-placement="bottom" title="Click here to create an account">Create Account</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#/deposit/" data-toggle="tooltip" data-placement="bottom" title="Click here to view your balance and make a deposit">Deposit</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#/withdraw/" data-toggle="tooltip" data-placement="bottom" title="Click here to view your balance and make a withdrawl">Withdraw</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#/alldata/" data-toggle="tooltip" data-placement="bottom" title="Click here to view all of the data from your transactions">All Data</a>
          </li>          
        </ul>
      </div>
    </nav>
    </>
  );

  var btns = 
                $("#navigation .navbar-nav .nav-link");
  
            for (var i = 0; i < btns.length; i++) {
                btns[i].addEventListener("click",
                                      function () {
                    var current = document
                        .getElementsByClassName("active");
  
                    current[0].className = current[0]
                        .className.replace(" active", "");
  
                    this.className += " active";
                });
            }
}