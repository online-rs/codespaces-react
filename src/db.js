import { openDB } from 'idb';

const dbPromise = openDB('images-db', 1, {
  upgrade(db) {
    if (!db.objectStoreNames.contains('images')) {
      const store = db.createObjectStore('images', {
        keyPath: 'id',
        autoIncrement: true,
      });
      store.createIndex('name', 'name', { unique: false });
    }
  },
});

export const addImage = async (image) => {
  const db = await dbPromise;
  await db.add('images', image);
};

export const getImages = async () => {
  const db = await dbPromise;
  return await db.getAll('images');
};

export const deleteImage = async (id) => {
  const db = await dbPromise;
  await db.delete('images', id);
};

export const updateImage = async (image) => {
  const db = await dbPromise;
  await db.put('images', image);
};
