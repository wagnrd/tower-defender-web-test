const formatDate = (timestamp: number): string => new Date(timestamp).toLocaleDateString();

type LoadingState = "loading" | "error" | "done";

export {
    formatDate
};

export type {
    LoadingState
};