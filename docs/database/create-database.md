---
sidebar_position: 1
---

# Create a New ZK Database

The `create` method initializes a new Zero-Knowledge (ZK) database with the specified configuration. It sets up the database on the server using the provided `merkleHeight`, which determines the height of the Merkle tree used for the database.

---

### Syntax
```ts
const success = await zkdb.create(config);
```

---

### Parameters

- **`config`**: `ZKDatabaseConfig`  
  An object specifying the configuration for the new database.

  **`ZKDatabaseConfig` Type Definition**:
  ```ts
  export interface ZKDatabaseConfig {
    merkleHeight: number;
  }
  ```

  - **`merkleHeight`**: `number`  
    The height of the Merkle tree for the database. This impacts the size and efficiency of the cryptographic proof structure.

---

### Returns

- **`Promise<boolean>`**  
  - Returns `true` if the database is successfully created.
  - Returns `false` or throws an error if the creation fails.

---

### Example

#### **Creating a New Database**
```ts
const zkdb = ZKDatabaseClient.connect(connectionURL);

const success = await zkdb.create({ merkleHeight: 16 });

if (success) {
  console.log('Database created successfully!');
} else {
  console.log('Failed to create the database.');
}
```

---

### Notes

- The `merkleHeight` parameter directly affects the structure of the Merkle tree, which is fundamental to the database's cryptographic proof system.

**Ensure that the server supports the specified `merkleHeight` to avoid configuration errors.**