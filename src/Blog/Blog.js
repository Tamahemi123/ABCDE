<!DOCTYPE html>
<html>
<head>
    <title>Simple Blog</title>
</head>
<body>
    <h1>Welcome to My Blog</h1>

    <div id="blog-posts">
        <!-- Blog posts will be displayed here -->
    </div>

    <script>
        // Sample data for blog posts (you can replace this with your own data)
        const blogPosts = [
            { title: "Post 1", content: "This is the content of post 1." },
            { title: "Post 2", content: "This is the content of post 2." },
            { title: "Post 3", content: "This is the content of post 3." }
        ];

        // Function to display blog posts
        function displayBlogPosts() {
            const blogPostsContainer = document.getElementById("blog-posts");
            
            for (const post of blogPosts) {
                const postElement = document.createElement("div");
                postElement.innerHTML = `<h2>${post.title}</h2><p>${post.content}</p>`;
                blogPostsContainer.appendChild(postElement);
            }
        }

        // Call the function to display blog posts
        displayBlogPosts();
    </script>
</body>
</html>
