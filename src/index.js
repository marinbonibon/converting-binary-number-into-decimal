const str = prompt("Enter binary number, please", "");

function convert (str) {
  const powOfTwo = str.length - 1;
  const splitArr = str.split("");
  let result = 0;

  for (let i = 0; i < str.length; i++)  {

    if(splitArr[i] === "1" || splitArr[i] === "0") {
      result += splitArr[i] * Math.pow(2, powOfTwo - i);

    } else {
      return "It's not a binary number";
    }
  }

  return result;
}

(function () {
  const p = document.createElement("p");
  p.innerText = "Result is: " + convert(str);
  document.body.appendChild(p);
})();
