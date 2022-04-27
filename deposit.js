function Deposit(){
  const ctx = React.useContext(UserContext); 
  const [show, setShow]         = React.useState(true);
  const [status, setStatus]     = React.useState('');
  const [deposit, setDeposit]   = React.useState('');
  const [balance, setBalance]   = React.useState(ctx.users[0].balance);  
  let displayBalance = "Balance: " + "$" + ctx.users[0].balance;
  const disable = (!deposit);

  //field, label
  function validate(field, label){
      if (isNaN(deposit)) {
        setStatus('Error: Enter a valid numerical value');
        setTimeout(() => setStatus(''),3000);
        return false;
      };
      if (Number(deposit) < 0) {
        setStatus('Error: Enter a valid deposit amount');
        setTimeout(() => setStatus(''),3000);
        return false;
      }
      return true;
  }

  function handleDeposit(){
    //console.log(deposit);
    if (!validate(Number(deposit),  balance))  return;
    let newTotal = Number(deposit) + balance;
    setBalance(newTotal);
    ctx.users[0].balance = newTotal;
    console.log(`This is your balance: ${newTotal}`);
    console.log(ctx.users[0].balance);
    //ctx.balance.push({newTotal});
    setShow(false);
  }    

  function clearForm(){
    setDeposit('');
    setShow(true);
  }

  return (
    <center>
    <Card
      bgcolor="success"
      header={displayBalance}
      status={status}
      body={show ? (  
              <>
              Deposit Amount<br/>
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text">$</span>
                </div>
              <input type="input" className="form-control" id="deposit" placeholder="Enter amount" value={deposit} onChange={e => setDeposit(e.currentTarget.value)}/>
              </div>
              <br/>
              <button type="submit" disabled={disable} className="btn btn-light" onClick={handleDeposit}>Deposit</button>
              </>
            ):(
              <>
              <h5>Success</h5>
              <button type="submit" className="btn btn-light" onClick={clearForm}>Deposit More</button>
              </>
            )}
    />
    </center>
  );
}
