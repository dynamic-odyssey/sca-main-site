migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("op6d6pxjq6b1nd6")

  collection.name = "contact_us_messages"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("op6d6pxjq6b1nd6")

  collection.name = "contact_requests"

  return dao.saveCollection(collection)
})
