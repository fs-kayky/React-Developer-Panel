

export const useStorageDb = () => ({
    setItem: (key: string, value: string) => {
        return localStorage.setItem(key, value);
    },
    getItem: (key: string): string => {
        const dataLocalStorage = localStorage.getItem(key)
        if (dataLocalStorage) {
            return dataLocalStorage;
        } else {
            return '';
        }

    },
    removeItem: (key: string) => {
        return localStorage.removeItem(key);
    }
})