migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("op6d6pxjq6b1nd6")

  collection.createRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("op6d6pxjq6b1nd6")

  collection.createRule = null

  return dao.saveCollection(collection)
})
