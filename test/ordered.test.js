const ordered = require("../controllers/ordered");
const base = require("../dataBase/connect");

describe("insert", () => {
  it("should add an order", async () => {
    const order = base.connectToBase("ordered");

    const mockOrder = {
      itemName: "testOrder",
      quantityOrdered: 1,
      color: "testColor",
      dateOrdered: "mm/dd/yy",
      eta: "mm/dd/yy",
      price: 10,
      gift: true,
    };
    await order.insertOne(mockOrder);

    const insertedOrder = await order.findOne({
      itemName: "testOrder",
    });

    expect(insertedOrder).toEqual(mockOrder);
  });
});

test("get all orders", () => {
  expect(ordered.getAllOrders).toBeDefined();
});

test("add one new order", () => {
  expect(ordered.addOrder).toBeDefined();
});

test("get one - id", () => {
  expect(ordered.getOrderByOrderId).toBeDefined();
});

test("get one - date", () => {
  expect(ordered.getOrderByDateOrdered).toBeDefined();
});

test("get one - eta", () => {
  expect(ordered.getOrderByEta).toBeDefined();
});

test("update one - id", () => {
  expect(ordered.updateOrder).toBeDefined();
});

test("delete one - id", () => {
  expect(ordered.deleteOrder).toBeDefined();
});
