export class Musician {
    constructor(albumsUrl) {
        this.albumsUrl = albumsUrl;
    }
    async getAlbums() {
        let data = await fetch(this.albumsUrl);
        let albums = await data.json();
        console.log('task10==========', albums);
    }
}