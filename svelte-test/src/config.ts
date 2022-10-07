import configFile from "../src/config.json";

interface Config {
    newsApiBaseUrl: string;
}

const config: Config = {
    newsApiBaseUrl: "http://localhost:3000"//configFile.newsApiBaseUrl
};

export {config};