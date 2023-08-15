migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("10f1ubqv9y24zqb")

  collection.createRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("10f1ubqv9y24zqb")

  collection.createRule = null

  return dao.saveCollection(collection)
})
