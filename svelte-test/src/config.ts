import configFile from "../src/config.json";

interface Config {
    newsApiBaseUrl: string;
    enableArticlePadding: boolean;
}

const config: Config = {
    newsApiBaseUrl: configFile.newsApiBaseUrl,
    enableArticlePadding: configFile.enableArticlePadding ?? false
};

export { config };