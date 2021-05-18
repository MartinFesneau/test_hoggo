const rewriteSource = () => {
  const rewriteButton = document.querySelector("#rewrite-button")
  
  if (rewriteButton) {
    const content = document.querySelector('.source-content').innerHTML
    rewriteButton.addEventListener("click", () => {
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
            rewriteCon.insertAdjacentHTML("afterbegin", 
            `
            <div class="card mt-3">
              <p class="card-text">${data.rewrite}</p>
            </div>
            `
            )
          }
        }
      });
      
      xhr.open("POST", "https://rewriter-paraphraser-text-changer-multi-language.p.rapidapi.com/rewrite");
      xhr.setRequestHeader("content-type", "application/json");
      xhr.setRequestHeader("x-rapidapi-key", "23ee61465amshed758ac58ac04c4p198dd6jsneddfe2c93df8");
      xhr.setRequestHeader("x-rapidapi-host", "rewriter-paraphraser-text-changer-multi-language.p.rapidapi.com");
      xhr.send(data);
    
    })
  };
  }


export { rewriteSource };