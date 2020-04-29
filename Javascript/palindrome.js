function palindrome(str)
{
    var output = str
  .split("")
  .reverse()
  .join("")
  if(output==str)
    console.log("palindrome")
  else
    console.log("not a palindrome")
}
palindrome("madam")
palindrome("car")
