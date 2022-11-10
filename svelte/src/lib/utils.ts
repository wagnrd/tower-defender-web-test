type LoadingState = "loading" | "error" | "done";

function formatDate(timestamp: number): string {
    return new Date(timestamp).toLocaleDateString();
}

export { formatDate };

export type { LoadingState };