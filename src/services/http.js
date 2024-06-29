const baseUrl = 'https://citytag.yuminstall.top/api/interface';

export const http = async ({ url, method, body, contentType }) => {
    const headers = {};

    // Apenas defina 'Content-Type' se não for 'multipart/form-data'
    if (contentType !== 'multipart/form-data') {
        headers['Content-Type'] = contentType;
    }

    const response = await fetch(`${baseUrl}/${url}`, {
        method,
        body: contentType === 'multipart/form-data' ? body : JSON.stringify(body),
        headers,
    });

    return response.json();
};
