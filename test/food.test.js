const { MongoClient } = require("mongodb");
const food = require("../controllers/food");
const base = require("../dataBase/connect");

describe("insert", () => {
  it("should add one food item", async () => {
    const food = base.connectToBase("food");

    const mockFood = {
      cat: "cat",
      itemName: "food",
      stock: 1,
      inCart: false,
    };
    await food.insertOne(mockFood);

    const insertedFood = await food.findOne({ itemName: "food" });
    expect(insertedFood).toEqual(mockFood);
  });
});

test("get all food", () => {
  expect(food.getAllFood).toBeDefined();
});

test("add one new food", () => {
  expect(food.addFood).toBeDefined();
});

test("get one - inCart", () => {
  expect(food.getFoodByInCart).toBeDefined();
});

test("get one - cat", () => {
  expect(food.getFoodByCat).toBeDefined();
});

test("get one - itemName", () => {
  expect(food.getFoodByItemName).toBeDefined();
});

test("update one - id", () => {
  expect(food.updateFood).toBeDefined();
});

test("delete one - id", () => {
  expect(food.deleteFood).toBeDefined();
});
