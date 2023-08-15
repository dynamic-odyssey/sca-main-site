migrate((db) => {
  const collection = new Collection({
    "id": "kkseiirz8ytscxw",
    "created": "2023-08-10 18:28:59.187Z",
    "updated": "2023-08-10 18:28:59.187Z",
    "name": "parent_committee",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "7lf3rj0n",
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
        "id": "ttkomtvt",
        "name": "email",
        "type": "email",
        "required": false,
        "unique": false,
        "options": {
          "exceptDomains": [],
          "onlyDomains": []
        }
      },
      {
        "system": false,
        "id": "z1bpje1m",
        "name": "cell",
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
        "id": "89mslqik",
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
  const collection = dao.findCollectionByNameOrId("kkseiirz8ytscxw");

  return dao.deleteCollection(collection);
})
