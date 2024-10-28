// Deezer API base URL
const deezerAPI = 'https://api.deezer.com/search?q=';

// Get song list element
const songList = document.getElementById('song-list');

// Add event listeners to mood buttons
document.querySelectorAll('.mood-button').forEach(button => {
    button.addEventListener('click', () => {
        const mood = button.getAttribute('data-mood');
        fetchSongsFromAPI(mood);
    });
});

// Function to fetch songs based on mood from Deezer API
async function fetchSongsFromAPI(mood) {
    try {
        // Clear previous song list
        songList.innerHTML = 'Loading...';

        // Fetch songs from Deezer API
        const response = await fetch(`${deezerAPI}${mood}`);
        const data = await response.json();

        // Display the fetched songs
        displaySongs(data);
    } catch (error) {
        console.error('Error fetching songs:', error);
        songList.innerHTML = 'Error fetching songs. Try again later.';
    }
}

// Function to display the fetched songs
function displaySongs(data) {
    // Clear loading text
    songList.innerHTML = '';

    // Check if we have any results
    if (data.data && data.data.length > 0) {
        data.data.forEach(song => {
            const li = document.createElement('li');
            li.innerHTML = `
                <a href="${song.link}" target="_blank">
                    ${song.title} by ${song.artist.name}
                </a>`;
            songList.appendChild(li);
        });
    } else {
        songList.innerHTML = 'No songs found for this mood.';
    }
}
