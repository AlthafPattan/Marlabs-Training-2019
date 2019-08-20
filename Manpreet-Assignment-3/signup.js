function Password(text){
  var pwd= /^[A-Za-z]\w{8,32}$/;
  if(inputtxt.value.match(passw))
{
alert('Correct, try another...')
return true;
}
else
{
alert('Wrong...!')
return false;
}

}
