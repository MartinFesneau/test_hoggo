require('dotenv').config()

const rewriteSource = () => {
  const key = process.env.API_KEY
  const rewriteButton = document.querySelector("#rewrite-button")
  
  if (rewriteButton) {
    const content = document.querySelector('#source-content').innerHTML
    rewriteButton.addEventListener("click", () => {
      const loading = document.querySelector(".spinner-border")
      loading.classList.remove("d-none")
      const data = JSON.stringify({
        "language": "fr",
        "strength": 3,
        "text": `${content}`
      });
      
      const xhr = new XMLHttpRequest();
      xhr.withCredentials = true;
      
      xhr.addEventListener("readystatechange", function () {
        if (this.readyState === this.DONE) {
          const data = JSON.parse(this.responseText);
          
          const rewriteCon = document.querySelector(".rewrite-container")
          // avoid multiple click on button          
          if ( rewriteCon.innerText == "") {
            loading.classList.add("d-none")
            rewriteCon.insertAdjacentHTML("afterbegin", 
            `
            <div class="card mt-3">
              <div class=""card-body>
                <p class="card-text p-2">${data.rewrite}</p>
              </div>
            </div>
            `
            )
          }
        }
      });
      
      xhr.open("POST", "https://rewriter-paraphraser-text-changer-multi-language.p.rapidapi.com/rewrite");
      xhr.setRequestHeader("content-type", "application/json");
      xhr.setRequestHeader("x-rapidapi-key", key);
      xhr.setRequestHeader("x-rapidapi-host", "rewriter-paraphraser-text-changer-multi-language.p.rapidapi.com");

      xhr.send(data);
    
    })
  };
  }


export { rewriteSource };