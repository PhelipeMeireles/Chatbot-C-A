function getResponses(valid_auth_tokens, requests) {
    const responses = [];

    for (let i = 0; i < requests.length; i++) {
        const request = requests[i];
        const [requestType, requestURL] = request.split(' ');

        let isValid = false;

        for (let j = 0; j < valid_auth_tokens.length; j++) {
            const validToken = valid_auth_tokens[j];
            if (requestURL.includes(validToken)) {
                isValid = true;
                break;
            }
        }

        if (isValid) {
            const queryParams = new URLSearchParams(requestURL.split('?')[1]);
            const paramsArray = Array.from(queryParams.entries()).map(([key, value]) => key + ',' + value);
            responses.push("VALID," + paramsArray.join(','));
        } else {
            responses.push("INVALID");
        }
    }

    return responses.join('\n');
}

// Exemplo de uso
const ValidTokens = ["et51u8i9p1q7", "b8nn5j4om76v", "r5b019lmlp09"];
const Requests = ["GET https://example.com/?token=et51u8i9p1q7&id=2e3rt&name=alex", "POST https://example.com/?token=r5b019lmlp09&csrf=ia+09&id=u78we&name=evan"];

const result = getResponses(ValidTokens, Requests);
console.log(result);