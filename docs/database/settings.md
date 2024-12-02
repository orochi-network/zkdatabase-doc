---
sidebar_position: 2
---

# Get Database Settings

The `setting` method retrieves the configuration and metadata of the current database, including cryptographic and ownership details.

---

### Syntax
```ts
const settings = await zkdb.setting();
```

---

### Returns

- **`Promise<DatabaseSetting>`**  
  An object containing the current database settings.

  **`DatabaseSetting` Type Definition**:
  ```ts
  export type DatabaseSetting = {
    publicKey: string;
    merkleHeight: number;
    databaseOwner: string;
  };
  ```

  - **`publicKey`**: `string`  
    The public key associated with the database for cryptographic operations.
  - **`merkleHeight`**: `number`  
    The height of the Merkle tree used in the database, which determines the structure of cryptographic proofs.
  - **`databaseOwner`**: `string`  
    The owner of the database, identified by their public key or unique identifier.

---

### Example

#### **Retrieving Database Settings**
```ts
const settings = await zkdb.setting();

console.log('Public Key:', settings.publicKey);
console.log('Merkle Height:', settings.merkleHeight);
console.log('Database Owner:', settings.databaseOwner);
```

---