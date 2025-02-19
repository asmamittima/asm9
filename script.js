// AI Text-to-Image Conversion
document.getElementById('aiTextToImageForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const textInput = document.getElementById('aiTextInput').value;

    if (!textInput) {
        alert('Please enter some text.');
        return;
    }

    // Get selected image size
    const imageSize = document.getElementById('imageSize').value.split('x');
    const width = parseInt(imageSize[0]);
    const height = parseInt(imageSize[1]);

    // Show loading indicator
    const aiImageOutput = document.getElementById('aiImageOutput');
    aiImageOutput.innerHTML = '<p>Loading...</p>';

    // Call DeepAI API
    fetch('https://api.deepai.org/api/text2img', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Api-Key': 'YOUR_DEEPAI_API_KEY' // Replace with your DeepAI API key
        },
        body: JSON.stringify({
            text: textInput,
            width: width,
            height: height
        })
    })
    .then(response => response.json())
    .then(data => {
        const imageUrl = data.output_url;

        // Display the generated image
        aiImageOutput.innerHTML = `<img src="${imageUrl}" alt="Generated Image" style="max-width: 100%;">`;

        // Add download link
        const aiDownloadLink = document.getElementById('aiDownloadLink');
        aiDownloadLink.href = imageUrl;
        aiDownloadLink.style.display = 'block';
    })
    .catch(error => {
        console.error('Error:', error);
        aiImageOutput.innerHTML = '<p>Error generating image. Please try again.</p>';
    });
});
