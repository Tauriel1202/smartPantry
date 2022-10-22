const food = require("../controllers/food");

test("get all food", () => {
  expect(food.getAllFood).toBeDefined();
} );

// test("add one new food", () => {
//   expect(food.addFood).toBeDefined();
// });

// test("get one - inCart", () => {
//   expect(food.getFoodByInCart).toBeDefined();
// } );

// test("get one - cat", () => {
//     expect(food.getFoodByCat).toBeDefined();
// } );

// test("get one - itemName", () => {
//     expect(food.getFoodByItemName).toBeDefined();
// } );

// test("update one - id", () => {
//     expect(food.updateFood).toBeDefined();
// } );

// test("delete one - id", () => {
//     expect(food.deleteFood).toBeDefined();
// } );

