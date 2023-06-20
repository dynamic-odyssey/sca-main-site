migrate((db) => {
  const collection = new Collection({
    "id": "10f1ubqv9y24zqb",
    "created": "2023-06-20 14:36:14.127Z",
    "updated": "2023-06-20 14:36:14.127Z",
    "name": "mail_subscribers",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "a9r8fmry",
        "name": "email",
        "type": "email",
        "required": false,
        "unique": false,
        "options": {
          "exceptDomains": null,
          "onlyDomains": null
        }
      }
    ],
    "indexes": [
      "CREATE UNIQUE INDEX `idx_hnEqyCq` ON `mail_subscribers` (`email`)"
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("10f1ubqv9y24zqb");

  return dao.deleteCollection(collection);
})
