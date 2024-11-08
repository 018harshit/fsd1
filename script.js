document.getElementById('githubForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const usernames = document.getElementById('usernames').value.split(',').map(username => username.trim()).slice(0, 10); // Get up to 10 usernames
    const userDetailsDiv = document.getElementById('userDetails');
    userDetailsDiv.innerHTML = '';
    usernames.forEach(username => {
        fetch(`https://api.github.com/users/${username}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`User  "${username}" not found`);
                }
                return response.json();
            })
            .then(data => {
            
                userDetailsDiv.innerHTML += `
                    <div class="user-card">
                        <h2>${data.login}</h2>
                        <img src="${data.avatar_url}" alt="${data.login}" width="100">
                        <p><strong>Bio:</strong> ${data.bio || 'No bio available'}</p>
                        <p><strong>Public Repos:</strong> ${data.public_repos}</p>
                        <p><strong>Followers:</strong> ${data.followers}</p>
                        <p><strong>Following:</strong> ${data.following}</p>
                        <p><a href="${data.html_url}" target="_blank">View Profile on GitHub</a></p>
                    </div>
                `;
            })
            .catch(error => {
                userDetailsDiv.innerHTML += `<p style="color: red;">${error.message}</p>`;
            });
    });
});
