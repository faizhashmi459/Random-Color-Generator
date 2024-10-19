const getColor = () => {
  // Hex Color
  const randomNumber = Math.floor(Math.random() * 16777215);
  const randomColor = `#${randomNumber.toString(16)}`;
  document.body.style.backgroundColor = randomColor;
  document.querySelector("#color-code").innerText = randomColor;

  //Copy to Clipboard
  navigator.clipboard.writeText(randomColor);
};

//Event Call
document.querySelector("#btn").addEventListener("click", getColor);

//Initial Call
getColor();
