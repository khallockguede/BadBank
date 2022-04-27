function CreateAccount(){
  const [show, setShow]         = React.useState(true);
  const [status, setStatus]     = React.useState('');
  const [name, setName]         = React.useState('');
  const [email, setEmail]       = React.useState('');
  const [password, setPassword] = React.useState('');
  const ctx = React.useContext(UserContext);
  const disable = (!name && !email && !password);

  function validate(field, label){
    if (!name) {
      setStatus('Error: Enter Name');
      setTimeout(() => setStatus(''),3000);
      return false;
    }
    if (!email) {
      setStatus('Error: Enter Email');
      setTimeout(() => setStatus(''), 3000);
      return false;
    }
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)){
      setStatus('Error: Email Invalid');
      setTimeout(() => setStatus(''), 3000);
      return false;
    }
    if (!password){
      setStatus('Error: Enter Password');
      setTimeout(() => setStatus(''), 3000);
      return false;
    }
    if (password.length < 8){
      setStatus('Error: Password Too Short');
      setTimeout(() => setStatus(''), 3000);
      return false;
    }
    return true;
}

  function handleCreate(){
    console.log(name,email,password);
    if (!validate(name,     'name'))     return;
    if (!validate(email,    'email'))    return;
    if (!validate(password, 'password')) return;
    ctx.users.unshift({name,email,password,balance:100});
    setShow(false);
  }    

  function clearForm(){
    setName('');
    setEmail('');
    setPassword('');
    setShow(true);
  }

  return (
   <center>
    <Card
      bgcolor="info"
      header="Create Account"
      status={status}
      body={show ? (  
              <>
              Name<br/>
              <input type="input" className="form-control" id="name" placeholder="Enter name" value={name} onChange={e => setName(e.currentTarget.value)} /><br/>
              Email address<br/>
              <input type="input" className="form-control" id="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.currentTarget.value)}/><br/>
              Password<br/>
              <input type="password" className="form-control" id="password" placeholder="Enter password" value={password} onChange={e => setPassword(e.currentTarget.value)}/><br/>
              <button type="submit" disabled={disable} className="btn btn-light" onClick={handleCreate}>Create Account</button>
              </>
            ):(
              <>
              <h5>Success</h5>
              <button type="submit" className="btn btn-light" onClick={clearForm}>Add another account</button>
              </>
            )}
    />
    </center>
  )
}