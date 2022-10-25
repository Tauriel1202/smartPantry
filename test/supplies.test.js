const supplies = require("../controllers/supplies");
const base = require("../dataBase/connect");

describe("insert", () => {
  it("should add a supply", async () => {
    const supply = base.connectToBase("supplies");

    const mockSupply = {
      itemName: "testSupply",
      stock: 1,
      inCart: false,
      color: "testColor",
    };
    await supply.insertOne(mockSupply);

    const insertedSupply = await supply.findOne({
      itemName: "testSupply",
    });

    expect(insertedSupply).toEqual(mockSupply);
  });
});

test("get all supplies", () => {
  expect(supplies.getAllSupplies).toBeDefined();
});

test("add one new order", () => {
  expect(supplies.addSupply).toBeDefined();
});

test("get one - color", () => {
  expect(supplies.getSupplyByColor).toBeDefined();
});

test("get one - inCart", () => {
  expect(supplies.getSupplyByInCart).toBeDefined();
});

test("get one - itemName", () => {
  expect(supplies.getSupplyByItemName).toBeDefined();
});

test("update one - id", () => {
  expect(supplies.updateSupply).toBeDefined();
});

test("delete one - id", () => {
  expect(supplies.deleteSupply).toBeDefined();
});
