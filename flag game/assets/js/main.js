const row = document.querySelector(".row");
const btn=document.querySelector(".btn")
const country=document.querySelector("#country")
const p=document.getElementsByTagName("p")
const input=document.getElementsByTagName("input")
const flag=document.getElementsByClassName("flag")
const word=document.getElementsByClassName("word")
const aloneFlag=document.getElementById("only")




fetch('https://api.disneyapi.dev/character')
.then(response => response.json())
.then(data => {
    const randomCharacter = data.data[Math.floor(Math.random() *data.data.length)];
    only.src = randomCharacter.imageUrl;
    word.textContent = randomCharacter.name;
    console.log(word.textContent)
})
.then(
    row.innerHTML+=`<div class="flag"><img src="" style="margin-left: 170px;" id="only"> </div>
        <p class="word"></p>
        <div class="confirm">
        <label for="country">Result:</label>
        <input type="text" id="country" placeholder="please enter the name of character">
        <button class="btn btn-outline-primary" onclick="save()">Submit</button>
    </div>`
)

function save() {
    var write = document.querySelector("#country").value;
    var character = word.textContent;
  
    if (write === character && write.length > 0) {
      alert("Well done it`s so awesome");
    } else if (write.length > 0) {
      alert("OHHHH!! you are fail");
    }
  }  
   
   


