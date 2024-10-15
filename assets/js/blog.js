const section= document.querySelector("section"); 
const blogs=JSON.parse(localStorage.getItem("blogs")) || [];
function loadBlogs(){
    section.textContent="";

    /*
         <article>
                 <h3>blog title</h3>
                 <hr>
                 <p class="sentence">this is first blog</p>

                 <p>Posted By: <span>Phil</span></p>
            </article>
*/

//  first iteration
section.innerHTML=`<article>
                 <h3>${blogs[0].title}</h3>
                 <hr>
                 <p class="sentence">${blogs[0].content}</p>

                 <p>Posted By: <span>${blogs[0].username}</span></p>
            </article>`

 section.innerHTML +=`<article>
                 <h3>${blogs[1].title}</h3>
                 <hr>
                 <p class="sentence">${blogs[1].content}</p>

                 <p>Posted By: <span>${blogs[1].username}</span></p>
            </article>`

//   let article = document.createElement("article");
//   let h3 = document.createElement("h3");
//   let hr= document.createElement("hr");
//   let pSentence= document.createElement("p");
//   let pPost= document.createElement("p");
//   h3.textContent=blogs[0].title;
//   pSentence.classList.add("sentence");
//   pSentence.textContent=blogs[0].content;
//   pPost.innerHTML="Posted By: <span>" + blogs[0].username+"</span>";
//   article.appendChild(h3);
//   article.appendChild(hr);
//   article.appendChild(pSentence);
//   article.appendChild( pPost);
//   section.appendChild(article);


// second iteration

// article = document.createElement("article");
// h3 = document.createElement("h3");
// hr= document.createElement("hr");
// pSentence= document.createElement("p");
// pPost= document.createElement("p");
// h3.textContent=blogs[1].title;
// pSentence.classList.add("sentence");
// pSentence.textContent=blogs[1].content;
// pPost.innerHTML="Posted By: <span>" + blogs[1].username+"</span>";
// article.appendChild(h3);
// article.appendChild(hr);
// article.appendChild(pSentence);
// article.appendChild( pPost);
// section.appendChild(article);


}

loadBlogs();