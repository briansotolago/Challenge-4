// Select the section element to display blog posts
const section = document.querySelector("section");
// Retrieve blogs from localStorage or initialize as an empty array
const blogs = JSON.parse(localStorage.getItem("blogs")) || [];

// Function to load blogs and display them on the page
function loadBlogs() {
    // Clear the section before loading new blogs
    section.textContent = "";

    // Loop through all blog posts and create articles dynamically
    blogs.forEach(blog => {
        // Create article element for each blog post
        const article = document.createElement("article");
        const h3 = document.createElement("h3"); // Title element
        const hr = document.createElement("hr"); // Horizontal rule for separation
        const pSentence = document.createElement("p"); // Element for blog content
        const pPost = document.createElement("p"); // Element for posting information

        // Set the content for the title and blog
        h3.textContent = blog.title;
        pSentence.classList.add("sentence"); // Add class for styling
        pSentence.textContent = blog.content; // Blog content
        pPost.innerHTML = `Posted By: <span>${blog.username}</span>`; // Username

        // Append elements to the article
        article.appendChild(h3);
        article.appendChild(hr);
        article.appendChild(pSentence);
        article.appendChild(pPost);
        // Append the article to the section
        section.appendChild(article);
    });
}

// Call loadBlogs function to display blogs on page load
loadBlogs();
