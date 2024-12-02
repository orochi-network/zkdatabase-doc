---
sidebar_position: 2
---

# Connect to ZK Database

The `connect` method initializes a new instance of the `ZKDatabaseClient` to interact with a ZK database server. It supports different authentication methods depending on the environment (Node.js or browser).

---

### Syntax
```ts
const zkdb = await ZKDatabaseClient.connect(connectionURL);
```

---

### Parameters

- **`connectionURL`**: `string`  
  A URL specifying the connection details, including protocol, host, authentication method, and database name.

---

### URL Format

#### **Node.js Example**  
Use a private key for authentication:
```plaintext
zkdb+https://username:private-key@test-serverless.zkdatabase.org/graphql?db=my-db
```

#### **Browser Example**  
Use the Auro Wallet for authentication:
```plaintext
zkdb+https://username@test-serverless.zkdatabase.org/graphql?db=my-db
```

**URL Components**:
- **Protocol**: Must start with `zkdb+`.
- **Host**: Specifies the ZK database server.
- **Authentication**:
  - Node.js: Include the private key as the password (Base58-encoded).
  - Browser: Omit the password or use `auro-wallet`.
- **Path**: The GraphQL API path.
- **Query Parameters**: Specify the target database using `db`.

---

### Returns

- **`Promise<ZKDatabaseClient>`**  
  An instance of `ZKDatabaseClient` configured with the provided connection details.

---

### Example

#### **Connecting in Node.js**
Authenticate using a private key:
```ts
const zkdb = await ZKDatabaseClient.connect(
  'zkdb+https://username:EKEGu8rTZbfWE1HWLxWtDnjt8gchvGxYM4s5q3KvNRRfdHBVe6UU@test-serverless.zkdatabase.org/graphql?db=my-db'
);
```

#### **Connecting in the Browser**
Authenticate using the Auro Wallet:
```ts
const zkdb = await ZKDatabaseClient.connect(
  'zkdb+https://username@test-serverless.zkdatabase.org/graphql?db=my-db'
);
```

---

### Additional Information

- **Node.js Environment**:  
  In Node.js, the method configures a signer using the provided private key and establishes authentication using the `Authenticator` class.

- **Browser Environment**:  
  In browsers, the method integrates with the Auro Wallet for signing transactions and local storage for session management.

**Note**: If the environment or URL is invalid, the method throws an error.