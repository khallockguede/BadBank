function Home(){
  return (
    <center>
    <Card
      bgcolor="primary"
      txtcolor="white"
      header="Bad Bank"
      title="Welcome"
      text="Use the navigation bar to complete your transaction"
      body={(<img src="bank.png" className="img-fluid" alt="Responsive image"/>)}
    />    
    </center>
  );  
}
