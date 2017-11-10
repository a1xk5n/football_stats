export const send = (controllerName, requestBody) =>
    fetch(`${location.origin}${controllerName}`, {
        method: 'POST',
        headers: {
            Accept: 'application/json, text/plain, */*',
            'Content-Type': 'application/json',
        },
        mode: 'cors',
        cache: 'default',
        body: JSON.stringify(requestBody),
    });
