const blogPosts = [
    {
        id: 'first-post',
        title: 'My First Blog Post!',
        content: '<p>Hello world! Welcome to my new blog.</p>',
        category: 'General',
        date: '2023-11-01',
        author: 'You',
        readTime: 2,
        featured: true
    },  // <-- COMMA here (not semicolon)
    {
        id: 'second-post',
        title: 'My Second Post!',
        content: '<p>More content here. It works!</p>',
        category: 'Updates',
        date: '2023-11-02',
        author: 'You',
        readTime: 1,
        featured: true
    }   // <-- NO comma after the last post
];      // <-- Semicolon ONLY at the very end
