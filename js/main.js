document.getElementById('generateButton').addEventListener('click', async () => {
    const link = document.getElementById('linkInput').value;
    if (!link) {
        alert("Please enter a valid link!");
        return;
    }

    // Call to shorten the link, defaulting to a mock version
    let shortenedLink;
    try {
        shortenedLink = await shortenLink(link);
    } catch (error) {
        alert("Error shortening the link.");
        return;
    }

    // Display the shortened link
    const resultContainer = document.getElementById('resultContainer');
    const linkElement = document.createElement('div');
    linkElement.className = 'shortened-link';
    linkElement.innerHTML = `Shortened Link: <a href="${shortenedLink}" target="_blank">${shortenedLink}</a>`;
    resultContainer.appendChild(linkElement);
});

// Function to shorten link using either a mock implementation or real API
async function shortenLink(link) {
    const useMock = true; // Toggle to false to use real API
    if (useMock) {
        return mockShorten(link);
    } else {
        return await realShorten(link);
    }
}

// Mock shortening function (for demonstration)
function mockShorten(url) {
    const hash = Math.random().toString(36).substr(2, 8);
    return `https://mock.ly/${hash}`;
}

// Real API shortening function using Bitly or other service
async function realShorten(url) {
    const response = await fetch(config.apiEndpoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${config.apiKey}`
        },
        body: JSON.stringify({ long_url: url })
    });

    if (!response.ok) {
        throw new Error("Failed to shorten the link");
    }

    const data = await response.json();
    return data.link;
}