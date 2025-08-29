export const store = {
    data: {},
    subscribers: [],

    subscribe: (fn) => {
        store.subscribers.push(fn);
        fn(store.data);
        return () => {
            store.subscribers = store.subscribers.filter(sub => sub !== fn);
        };
    },

    update: (partialData) => {
        Object.assign(store.data, partialData);
        store.subscribers.forEach(fn => fn(store.data));
    },
};