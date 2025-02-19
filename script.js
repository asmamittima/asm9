document.getElementById('textToImageForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const text = document.getElementById('textInput').value;

    // Create a canvas element
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    // Set canvas dimensions
    canvas.width = 400;
    canvas.height = 200;

    // Draw text on the canvas
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#000000';
    ctx.font = '20px Arial';
    ctx.fillText(text, 10, 50);

    // Convert canvas to image
    const img = new Image();
    img.src = canvas.toDataURL('image/png');

    // Display the image
    const imageOutput = document.getElementById('imageOutput');
    imageOutput.innerHTML = '';
    imageOutput.appendChild(img);
});
