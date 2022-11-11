import configJson from "../src/config.json";

interface Testing {
    enableArticlePadding?: boolean;
}

interface Config {
    basePath: string;
    newsApiBaseUrl: string;
    testing?: Testing;
}

const configFile: Config = configJson;

const config: Config = {
    testing: {
        enableArticlePadding: false
    },
    basePath: "/",
    ...configFile
};

export { config };