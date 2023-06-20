migrate((db) => {
  const collection = new Collection({
    "id": "op6d6pxjq6b1nd6",
    "created": "2023-06-20 14:35:54.911Z",
    "updated": "2023-06-20 14:35:54.911Z",
    "name": "contact_requests",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "gqvofjd0",
        "name": "name",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "rnomf7fk",
        "name": "email",
        "type": "email",
        "required": false,
        "unique": false,
        "options": {
          "exceptDomains": null,
          "onlyDomains": null
        }
      },
      {
        "system": false,
        "id": "eailsf4l",
        "name": "subject",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "scsnerw0",
        "name": "message",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
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
  const collection = dao.findCollectionByNameOrId("op6d6pxjq6b1nd6");

  return dao.deleteCollection(collection);
})
