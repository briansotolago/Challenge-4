const blogFormEl = document.querySelector("#blog-form");
const usernameEl = document.querySelector("#username");
const titleEl = document.querySelector("#title");
const contentEl = document.querySelector("#content");
const blogs = JSON.parse(localStorage.getItem("blogs")) || [];

blogFormEl.addEventListener("submit", function (event) {
    event.preventDefault();

    // Check if all fields are filled
    if (!usernameEl.value || !titleEl.value || !contentEl.value) {
        alert("Please fill in all fields before submitting the form.");
        return; // Stop the form from being submitted
    }

    const newBlog = {
        username: usernameEl.value,
        title: titleEl.value,
        content: contentEl.value,
    };

    blogs.push(newBlog);
    localStorage.setItem("blogs", JSON.stringify(blogs));
    document.location.replace("blog.html");
});
