// Select elements from the form for user input
const blogFormEl = document.querySelector("#blog-form");
const usernameEl = document.querySelector("#username");
const titleEl = document.querySelector("#title");
const contentEl = document.querySelector("#content");
// Retrieve blogs from localStorage or initialize as an empty array
const blogs = JSON.parse(localStorage.getItem("blogs")) || [];

// Add event listener for form submission
blogFormEl.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission

    // Check if all fields are filled
    if (!usernameEl.value || !titleEl.value || !contentEl.value) {
        alert("Please fill in all fields before submitting the form."); // Alert user
        return; // Stop the form from being submitted
    }

    // Create a new blog object with user input
    const newBlog = {
        username: usernameEl.value,
        title: titleEl.value,
        content: contentEl.value,
    };

    // Add the new blog to the blogs array
    blogs.push(newBlog);
    // Save updated blogs array to localStorage
    localStorage.setItem("blogs", JSON.stringify(blogs));
    // Redirect to blog.html after submission
    document.location.replace("blog.html");
});
