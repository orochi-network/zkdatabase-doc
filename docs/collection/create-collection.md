---
sidebar_position: 1
---

# Create a Collection

The `create` method allows you to create a new collection in the database with an associated schema, optional index fields, permissions, and a group name. Collections are used to organize and structure data within a database.

---

### Syntax
```ts
const success = await zkdb.create(schema, index, permission, groupName);
```

---

### Parameters

- **`type`**: `T`  
  The schema definition for the collection. The schema must implement the `SchemaInterface` and define the structure of documents within the collection.

- **`index`** *(optional)*: `IndexField[]` or `string[]`  
  Specifies the index fields for the collection. Indexes optimize query performance by ordering the data based on the specified fields.

  **`IndexField` Type Definition**:
  ```ts
  export type IndexField = {
    name: string;
    sorting: Sorting;
  };
  ```

  **`Sorting`**: `'ASC' | 'DESC'`  
  Specifies the order of the index field, either ascending (`'ASC'`) or descending (`'DESC'`).

  You can provide either:
  - An array of field names (`string[]`) with default ascending order.
  - An array of `IndexField` objects with custom sorting.

- **`permission`** *(optional)*: `Permission`  
  The permissions for accessing the collection. If not specified, it defaults to a private policy.

  **Permissions**:
  - `Permission.policyPrivate()` (default): Only the database owner can access the collection.
  - `Permission.policyPublic()`: Everyone has access to the collection.
  - `Permission.policyStrict()`: Restricts access based on specific policies.

- **`groupName`** *(optional)*: `string`  
  Assigns the collection to a specific group for organizational or permission-related purposes.

---

### Returns

- **`Promise<boolean>`**  
  - Returns `true` if the collection is successfully created.
  - Returns `false` or throws an error if the creation fails.

---

### Example

#### **Creating a Collection with Default Settings**
```ts
class User extends Schema.create({
  name: CircuitString,
  age: UInt64,
}) {}

const success = await zkdb.create(schema);

if (success) {
  console.log('Collection created successfully!');
} else {
  console.log('Failed to create the collection.');
}
```

#### **Creating a Collection with Index and Permissions**
```ts
class User extends Schema.create({
  name: CircuitString,
  age: UInt64,
}) {}

const success = await zkdb.create(schema, [{ name: 'name', sorting: 'DESC' }], Permission.policyPublic());

if (success) {
  console.log('Collection with index and public permissions created successfully!');
} else {
  console.log('Failed to create the collection.');
}
```

#### **Creating a Collection in a Specific Group**
```ts
class User extends Schema.create({
  name: CircuitString,
  age: UInt64,
}) {}

const success = await zkdb.create(schema, ['name'], Permission.policyPrivate(), 'AdminGroup');

if (success) {
  console.log('Collection in AdminGroup created successfully!');
} else {
  console.log('Failed to create the collection.');
}
```

---

### Notes

1. **Indexes**:
   - Providing string field names automatically assigns ascending (`'ASC'`) sorting.
   - Use `IndexField` to customize sorting order for each field.

2. **Permissions**:
   - Permissions can be combined using the `Permission` API for granular control.
   - Ensure the required permission policies are compatible with the collection's use case.

3. **Schema Validation**:
   - The schema must conform to the `SchemaInterface` and be validated before creating the collection.

4. **Error Handling**:
   - Handle errors appropriately to ensure the collection is not accidentally duplicated or misconfigured.