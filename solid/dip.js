const tracker = {
  getTracks() {
    console.log("some track");
  },
};

class YandexMusicApi {
  getTracks() {
    console.log("some yandex track");
  }
}

class SpotifyApi {
  getTracks() {
    console.log("some spotify track");
  }
}

class MusicClient {
  constructor(client) {
    this.client = client;
  }

  getTracks() {
    this.client.getTracks();
  }
}

Object.assign(YandexMusicApi.prototype, tracker);
Object.assign(SpotifyApi.prototype, tracker);

const MusicApp = () => {
  const API = new MusicClient(new SpotifyApi());

  API.getTracks();
};

MusicApp();
