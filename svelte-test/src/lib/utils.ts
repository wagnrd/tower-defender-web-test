const formatDate = (timestamp: number): string => new Date(timestamp).toLocaleDateString();

export {
    formatDate
};