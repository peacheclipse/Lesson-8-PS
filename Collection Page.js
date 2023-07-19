<script>
    function redirectToFinalBalance() {
      var isValidEmail = function2();

      if (isValidEmail) {
        window.location.href = "FinalBalance.html"
      
    }
  

  
  function function2 (validate){
    var emailinput = document.getElementById('email');
    var email = emailinput.value;

    
   var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  }
if (!emailRegex.test(email)) {
  alert('Please enter a valid email address.')
  return false

  

return true;
}
  
</script>