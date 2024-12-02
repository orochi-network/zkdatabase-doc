---
sidebar_position: 10
---

# Ownership

The `DocumentOwnership` and `CollectionOwnership` classes implement the same interface, enabling a consistent way to manage ownership and permissions for both individual documents and entire collections within a ZK database.

---

## Shared Interface

Both `DocumentOwnership` and `CollectionOwnership` provide the following methods for ownership and permission management:

### Methods

#### **`changeGroup(groupName: string): Promise<void>`**
Assigns the ownership of the document or collection to a specific group.

**Parameters:**
- **`groupName`**: The group to which ownership will be transferred.

---

#### **`changeOwner(userName: string): Promise<void>`**
Assigns the ownership of the document or collection to a specific user.

**Parameters:**
- **`userName`**: The user to whom ownership will be transferred.

---

#### **`setPermission(permission: Permission): Promise<OwnershipAndPermission>`**
Sets the permission policy for the document or collection.

**Parameters:**
- **`permission`**: The new permission policy.

**Returns:**
- **`OwnershipAndPermission`**: Contains ownership and permission details, including the group and user names, and the applied permission policy.

---

#### **`getPermission(): Promise<OwnershipAndPermission>`**
Retrieves the current permission and ownership configuration for the document or collection.

**Returns:**
- **`OwnershipAndPermission`**: Contains ownership and permission details.

---

## Differences Between `DocumentOwnership` and `CollectionOwnership`

- **Scope**:
  - `DocumentOwnership` applies to individual documents within a collection.
  - `CollectionOwnership` applies to entire collections.

- **Usage**:
  - `DocumentOwnership` requires the `docId` of the specific document.
  - `CollectionOwnership` operates without referencing individual documents, targeting the entire collection.

---

## Example: Unified Usage

### DocumentOwnership
```ts
const documentOwnership = zkdb.database('my-db').collection('my-collection').findOne({}).ownership;

await documentOwnership.changeGroup('AdminGroup');
await documentOwnership.changeOwner('User123');
const permissions = await documentOwnership.setPermission(Permission.policyPublic());
const currentPermissions = await documentOwnership.getPermission();
```

### CollectionOwnership
```ts
const documentOwnership = zkdb.database('my-db').collection('my-collection').ownership;

await collectionOwnership.changeGroup('AdminGroup');
await collectionOwnership.changeOwner('User123');
const permissions = await collectionOwnership.setPermission(Permission.policyPrivate());
const currentPermissions = await collectionOwnership.getPermission();
```

---