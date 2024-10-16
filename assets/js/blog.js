const section = document.querySelector("section");
const blogs = JSON.parse(localStorage.getItem("blogs")) || [];

function loadBlogs() {
    section.textContent = "";

    // Loop through all blog posts and create articles dynamically
    blogs.forEach(blog => {
        const article = document.createElement("article");
        const h3 = document.createElement("h3");
        const hr = document.createElement("hr");
        const pSentence = document.createElement("p");
        const pPost = document.createElement("p");

        h3.textContent = blog.title;
        pSentence.classList.add("sentence");
        pSentence.textContent = blog.content;
        pPost.innerHTML = `Posted By: <span>${blog.username}</span>`;

        article.appendChild(h3);
        article.appendChild(hr);
        article.appendChild(pSentence);
        article.appendChild(pPost);
        section.appendChild(article);
    });
}

loadBlogs();
