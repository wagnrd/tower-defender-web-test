import configJson from "../src/config.json";

interface Testing {
    enableArticlePadding?: boolean;
}

interface Config {
    newsApiBaseUrl: string;
    testing?: Testing;
}

const configFile: Config = configJson;

const config: Config = {
    ...configFile,
    testing: {
        enableArticlePadding: configFile?.testing?.enableArticlePadding ?? false
    }
};

export { config };