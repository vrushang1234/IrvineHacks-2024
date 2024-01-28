// cohere-example.js
const apiKey = 'AIzaSyAF_bsdgfJEvW_b18kKr1sueVcklgf3bt0';
const apiUrl = "https://generativelanguage.googleapis.com/vibeta/models/gemini-pro:generateContent?key=AIzaSyAF_bsdgfJEvW_b18kKr1sueVcklgf3bt0"
async function cohereRequest() {
    try {
        const response = await fetch(apiUrl, {
            method: 'POST', // or 'GET' depending on the API
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`,
            },
            body: JSON.stringify({
                contents:
                {
                    role: 'USER',
                    parts: []
                            {
                    // Union field data can be only one of the following:
                    text: "give leetcode problems on dynamic programming",
                    "fileData": {

                    }
                }
                        
        tools: [
                {
                    "functionDeclarations": [
                        {
                            "name": string,
                            "description": string,
                            "parameters": {
                                object(OpenAPI Object Schema)
                            }
                        }
                    ]
                }
            ],
                "safetySettings": [
                {
                    "category": enum(HarmCategory),
                    "threshold": enum(HarmBlockThreshold)
                }
            ],
                "generationConfig": {
                "temperature": number,
                "topP": number,
                "topK": number,
                "candidateCount": integer,
                "maxOutputTokens": integer,
                "stopSequences": [
                    string
                ]
            }

        // Additional parameters specific to the endpoint
    }),

    });

    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const result = await response.json();
    displayResult(result);
} catch (error) {
    console.error('Error making Cohere API request:', error.message);
}
}

function displayResult(result) {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `<p><strong>API Response:</strong> ${JSON.stringify(result)}</p>`;
    console.log(result.generations[0].text)
}
