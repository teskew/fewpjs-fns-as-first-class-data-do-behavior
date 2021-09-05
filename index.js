/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

function greet(time){
     const hourInString = time.split(":");
    const hourInInt = parseInt(hourInString, 10);
  if (hourInInt < 12)
   {
  return displayMessage('Good Morning');
   }
  else if (hourInInt >= 12 && hourInInt <= 17) 
  {
  return displayMessage('Good Afternoon');
  }
  else {
  
  return displayMessage('Good Evening');
  }

}
/* Write your implementation of displayMessage() */
function displayMessage(msg) {
const element = document.getElementById('greeting');
element.innerText = msg;
return msg;
}