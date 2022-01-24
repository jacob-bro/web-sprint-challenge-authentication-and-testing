const model = require("./jokes/model.js")
const db = require("../data/dbConfig.js")

const dummy = {name:"test"}

beforeAll(async ()=>{
  await db.migrate.rollback();
  await db.migrate.latest()
})
beforeEach(async () =>{
  await db("users").truncate();
})
afterAll(async ()=>{
  await db.destroy()
})


// Write your tests here
test('sanity', () => {
  expect(true).toBe(true)
})

describe("Model Tests",()=>{
  describe("Test One",=>{
    it("add user to database",async ()=>{
      let all
      await model.add(dummy)
      all = await db("users")
      expect(all).toHaveLength(1)
    })
  })
})
