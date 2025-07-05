const blogPosts = [
    {
        id: 'first-post',
        title: 'My First Blog Post!',
        content: content: `
    <p>Hello world! Welcome to my new blog.</p>
    
    <!-- PDF Attachment Example -->
    <div class="attachment-card">
        <a href="#">📥 Download PDF Guide</a> (Example link - replace # with real PDF link)
    </div>
    
    <!-- Game Attachment Example -->
    <div class="attachment-card">
        <a href="#">🎮 Play Interactive Game</a> (Example link)
    </div>
`,
        category: 'General',
        date: '2023-11-01',
        author: 'You',
        readTime: 2,
        featured: true
    },
    {
        id: 'second-post',
        title: 'My Second Post!',
        content: '<p>More content here. It works!</p>',
        category: 'Updates',
        date: '2023-11-02',
        author: 'You',
        readTime: 1,
        featured: true
    }
];
