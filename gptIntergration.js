/*
async function evaluateTitleIdea() {
    const titleIdea = document.getElementById('title-idea').value.trim();

    if (!titleIdea) {
        alert("Please enter a title idea.");
        return;
    }

    const url = 'https://cheapest-gpt-4-turbo-gpt-4-vision-chatgpt-openai-ai-api.p.rapidapi.com/v1/chat/completions';
    const options = {
        method: 'POST',
        headers: {
            'x-rapidapi-key': '4359430725msh8d26b3e2762caeap17a7c0jsne4725fc6f216',
            'x-rapidapi-host': 'cheapest-gpt-4-turbo-gpt-4-vision-chatgpt-openai-ai-api.p.rapidapi.com',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            messages: [
                {
                    role: 'user',
                    content: `Based on the content of this YouTube video ($${titleIdea}), generate 5 catchy and engaging titles that could increase viewership, keep it straight forward use 2 ":" and others just be full sentences.`
                }
            ],
            model: 'gpt-4o',
            max_tokens: 100,
            temperature: 0.7
        })
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();

        const feedback = result.choices[0].message.content.split('\n');
        const evaluationResultsContainer = document.getElementById('evaluation-results');
        evaluationResultsContainer.innerHTML = ''; 
        feedback.forEach(item => {
            if (item.trim()) {
                const evaluationItem = document.createElement('div');
                evaluationItem.className = 'evaluation-item';
                evaluationItem.innerText = item;
                evaluationResultsContainer.appendChild(evaluationItem);
            }
        });
    } catch (error) {
        console.error('Error evaluating title:', error);
        alert('An error occurred while evaluating the title. Please try again later.');
    }
}

document.getElementById('evaluate-button').addEventListener('click', evaluateTitleIdea);


//generate titles

function extractVideoId(url) {
    const videoIdMatch = url.match(/(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/watch\?v=|youtu\.be\/)([^\s&?]+)/);
    //const videoIdMatch = url.match(/(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/watch\?v=|youtu\.be\/)([^\s&]+)/);
    return videoIdMatch ? videoIdMatch[1] : null;
}

async function fetchVideoTitle(videoLink) {
    const apiKey = 'AIzaSyCR5xGqQ9FwlUgcfCNaoaJ187w_NPotoLw'; 
    const videoId = extractVideoId(videoLink);
    
    if (!videoId) {
        alert("Invalid YouTube link.");
        return null;
    }

    const url = `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=${apiKey}`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        if (data.items.length === 0) {
            alert("Video not found.");
            return null;
        }
        return data.items[0].snippet.title;
    } catch (error) {
        console.error('Error fetching video title:', error);
        alert('An error occurred while fetching the video title.');
        return null;
    }
}

async function handleGenerateTitles() {
    const videoLink = document.getElementById('video-link').value.trim();
    const videoTitle = await fetchVideoTitle(videoLink);

    if (!videoTitle) {
        return;
    }

    document.getElementById('video-title-display').innerText = `Original Title: ${videoTitle}`;

    await generateTitlesFromTitle(videoTitle);
}

async function generateTitlesFromTitle(videoTitle) {
    const url = 'https://cheapest-gpt-4-turbo-gpt-4-vision-chatgpt-openai-ai-api.p.rapidapi.com/v1/chat/completions';
    const options = {
        method: 'POST',
        headers: {
            'x-rapidapi-key': '4359430725msh8d26b3e2762caeap17a7c0jsne4725fc6f216', 
            'x-rapidapi-host': 'cheapest-gpt-4-turbo-gpt-4-vision-chatgpt-openai-ai-api.p.rapidapi.com',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            messages: [
                {
                    role: 'user',
                    //content: `Based on the content of this YouTube video title: "${videoTitle}", generate 5 catchy and engaging titles that could increase viewership.`
            content: `Based on the content of this YouTube video (${videoTitle}), generate 5 catchy and engaging titles that could increase viewership, keep it straight forward use 1 ":" and others just be full sentences.`

                }
            ],
            model: 'gpt-4o',
            max_tokens: 100,
            temperature: 0.7
        })
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();

        const titles = result.choices[0].message.content.split('\n');
        const resultsContainer = document.getElementById('results');
        resultsContainer.innerHTML = ''; 
        titles.forEach(title => {
            if (title.trim()) {
                const resultItem = document.createElement('div');
                resultItem.className = 'result-item';
                resultItem.innerText = title;
                resultsContainer.appendChild(resultItem);
            }
        });
    } catch (error) {
        console.error('Error generating titles:', error);
        alert('An error occurred while generating titles. Please try again later.');
    }
}

document.getElementById('generate-button').addEventListener('click', handleGenerateTitles);
*/
