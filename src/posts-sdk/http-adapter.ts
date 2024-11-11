export class HttpAdapter {
    baseUrl: string;
    
    constructor(url: string) {
        this.baseUrl = url
    }

    async get(path: string) {
        const rawResponse = await fetch(`${this.baseUrl}${path}`);
        const jsonResponse = await rawResponse.json();
        return jsonResponse;
    }
}