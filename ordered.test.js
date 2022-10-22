const ordered = require("./controllers/ordered");


test("get all orders", () => {
    expect(ordered.getAllOrders).toBeDefined();
  } );
  
  test("add one new order", () => {
    expect(ordered.addOrder).toBeDefined();
  });
  
  test("get one - id", () => {
    expect(ordered.getOrderByOrderId).toBeDefined();
  } );
  
  test("get one - date", () => {
      expect(ordered.getOrderByDateOrdered).toBeDefined();
  } );
  
  test("get one - eta", () => {
      expect(ordered.getOrderByEta).toBeDefined();
  } );
  
  test("update one - id", () => {
      expect(ordered.updateOrder).toBeDefined();
  } );
  
  test("delete one - id", () => {
      expect(ordered.deleteOrder).toBeDefined();
  } );
  

