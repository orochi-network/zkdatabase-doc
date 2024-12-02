---
sidebar_position: 2
---

# Indexes

The `ZKCollectionIndex` interface provides methods to manage indexes within a ZK collection. Indexes enhance query performance by organizing data based on specific fields and sorting orders.

---

## Methods

### **`list(): Promise<string[]>`**
Lists all indexes currently defined in the collection.

**Returns**:
- **`Promise<string[]>`**: An array of index names.

---

### **`create(index: IndexField[]): Promise<boolean>`**
Creates a new index in the collection based on the provided fields.

**Parameters**:
- **`index`**: An array of `IndexField` objects defining the fields to index and their sorting order.

**`IndexField` Type Definition**:
```ts
export type IndexField = {
  name: string;  // The name of the field to index.
  sorting: Sorting;  // The sorting order: 'ASC' or 'DESC'.
};

export type Sorting = 'ASC' | 'DESC';
```

**Returns**:
- **`Promise<boolean>`**: Returns `true` if the index was successfully created.

---

### **`drop(indexName: string): Promise<boolean>`**
Removes an existing index from the collection.

**Parameters**:
- **`indexName`**: The name of the index to delete.

**Returns**:
- **`Promise<boolean>`**: Returns `true` if the index was successfully removed.

---

## Example Usage

### Listing Indexes
```ts
const indexes = await zkdb.database('my-db').collection('my-collection').index.list();
console.log('Indexes:', indexes);
```

---

### Creating an Index
```ts
const success = await zkdb.database('my-db').collection('my-collection').index.create([
  { name: 'createdAt', sorting: 'DESC' },
  { name: 'updatedAt', sorting: 'ASC' }
]);

if (success) {
  console.log('Index created successfully!');
} else {
  console.log('Failed to create index.');
}
```

---

### Dropping an Index
```ts
const success = await zkdb.database('my-db').collection('my-collection').index.drop('createdAt_index');

if (success) {
  console.log('Index dropped successfully!');
} else {
  console.log('Failed to drop index.');
}
```

---