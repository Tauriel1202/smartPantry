const users = require("../controllers/users");
const base = require("../dataBase/connect");

describe("insert", () => {
  it("should add a user", async () => {
    const user = base.connectToBase("users");

    const mockUser = {
      username: "user",
      email: "testemail@deleteme.later"
    };
    await user.insertOne(mockUser);

    const insertedUser = await user.findOne({
      username: "user"
    });

    expect(insertedUser).toEqual(mockUser);
  });
});

test("get all users", () => {
  expect(users.getAllUsers).toBeDefined();
});

test("add one new order", () => {
  expect(users.addUser).toBeDefined();
});

test("get one - username", () => {
  expect(users.getUserByUsername).toBeDefined();
});

test("update one - id", () => {
  expect(users.updateUser).toBeDefined();
});

test("delete one - id", () => {
  expect(users.deleteUser).toBeDefined();
});