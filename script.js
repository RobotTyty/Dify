// Replace with your Dify API key and endpoint
const API_KEY = 'app-TQPEj77t6fhmE8u12lO4G12H';
const API_ENDPOINT = 'https://api.dify.ai/v1/completion-messages';

// DOM Elements
const targetLanguage = document.getElementById('targetLanguage');
const codeInput = document.getElementById('codeInput');
const codeOutput = document.getElementById('codeOutput');
const convertButton = document.getElementById('convertButton');
const clearButton = document.getElementById('clearButton');
const copyButton = document.getElementById('copyButton');

// Event Listeners
convertButton.addEventListener('click', convertCode);
clearButton.addEventListener('click', clearAll);
copyButton.addEventListener('click', copyToClipboard);

async function convertCode() {
    const code = codeInput.value.trim();
    const language = targetLanguage.value;
    
    if (!code) {
        alert('Please enter some code to convert');
        return;
    }

    convertButton.disabled = true;
    convertButton.textContent = 'Converting...';
    codeOutput.textContent = 'Converting...';

    try {
        const response = await fetch(API_ENDPOINT, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${API_KEY}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                inputs: {
                    Target_code: language,
                    default_input: code
                },
                query: "Convert this code to " + language + ": " + code,
                response_mode: "blocking",
                user: "web-user"
            })
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || 'Conversion failed');
        }

        const data = await response.json();
        console.log('API Response:', data); // Debug log

        if (data.answer) {
            codeOutput.textContent = data.answer;
        } else if (data.text) {
            codeOutput.textContent = data.text;
        } else if (data.message) {
            codeOutput.textContent = data.message;
        } else {
            console.error('Unexpected API response format:', data);
            throw new Error('Unexpected API response format');
        }
    } catch (error) {
        console.error('Error:', error);
        codeOutput.textContent = `Error: ${error.message}`;
    } finally {
        convertButton.disabled = false;
        convertButton.textContent = 'Convert Code';
    }
}

function clearAll() {
    codeInput.value = '';
    codeOutput.textContent = '';
}

async function copyToClipboard() {
    const code = codeOutput.textContent;
    if (!code) return;

    try {
        await navigator.clipboard.writeText(code);
        const originalText = copyButton.textContent;
        copyButton.textContent = 'Copied!';
        setTimeout(() => {
            copyButton.textContent = originalText;
        }, 2000);
    } catch (err) {
        console.error('Failed to copy:', err);
    }
} 