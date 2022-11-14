import configJson from "../config.json";

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
    /* eslint-disable @typescript-eslint/ban-ts-comment */
    // @ts-ignore
    basePath: "/",
    ...configFile
};

export { config };