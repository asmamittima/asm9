// Text File to Image Conversion
document.getElementById('textFileForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const fileInput = document.getElementById('textFileInput');
    const file = fileInput.files[0];

    if (!file) {
        alert('Please upload a text file.');
        return;
    }

    const reader = new FileReader();
    reader.onload = function (event) {
        const text = event.target.result;

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

        // Add download link
        const downloadLink = document.getElementById('downloadLink');
        downloadLink.href = img.src;
        downloadLink.style.display = 'block';
    };
    reader.readAsText(file);
});

// Image File to Text Conversion
document.getElementById('imageFileForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const fileInput = document.getElementById('imageFileInput');
    const file = fileInput.files[0];

    if (!file) {
        alert('Please upload an image file.');
        return;
    }

    const reader = new FileReader();
    reader.onload = function (event) {
        const img = new Image();
        img.src = event.target.result;

        img.onload = function () {
            // Use Tesseract.js for OCR (Optical Character Recognition)
            Tesseract.recognize(
                img,
                'eng', // Language
                {
                    logger: info => console.log(info),
                }
            ).then(({ data: { text } }) => {
                // Display extracted text
                const textOutput = document.getElementById('textOutput');
                textOutput.textContent = text;

                // Add download link
                const downloadTextLink = document.getElementById('downloadTextLink');
                const blob = new Blob([text], { type: 'text/plain' });
                downloadTextLink.href = URL.createObjectURL(blob);
                downloadTextLink.style.display = 'block';
            });
        };
    };
    reader.readAsDataURL(file);
});
