import configFile from "../src/config.json";

interface Config {
    newsApiBaseUrl: string;
}

const config: Config = {
    newsApiBaseUrl: configFile.newsApiBaseUrl
};

export { config };