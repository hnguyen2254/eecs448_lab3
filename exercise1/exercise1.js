function validate()
{
  let insert = document.getElementById("insert").value + "";
  let verify = document.getElementById("verify").value + "";


  if(insert.length < 8 || verify.length < 8)
  {
    alert("Passwords are not long enough");
  }
  else if(insert != verify)
  {
    alert("Passwords do not match. Sorry homie.");
  }
  else
  {
    alert("Successful password creation!")
  }
}
