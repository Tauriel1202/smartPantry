const {MongoClient} = require('mongodb');

describe('insert', () => {
    let connection;
    let db;

    beforeAll(async () => {
        connection = await MongoClient.connect(global.__MONGO_URI__, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        db = await connection.db(global.__MONGO_DB_NAME__);
    });

    afterAll(async () => {
        await connection.close();
    });

    it('should insert a doc into collection', async () => {
        const food = db.collection('food');

        const mockFood = {
          _id: 'some-food-id',
          cat: 'some-category',
          itemName: 'some-name',
          stock: 10,
          inCart: false};
        await food.insertOne(mockFood);

        const insertedFood = await food.findOne({_id: 'some-food-id'});
        expect(insertedFood).toEqual(mockFood);
    });
});

const food = require("./controllers/food");

test("get all food", () => {
  expect(food.getAllFood).toBeDefined();
} );

test("add one new food", () => {
  expect(food.addFood).toBeDefined();
});

test("get one - inCart", () => {
  expect(food.getFoodByInCart).toBeDefined();
} );

test("get one - cat", () => {
    expect(food.getFoodByCat).toBeDefined();
} );

test("get one - itemName", () => {
    expect(food.getFoodByItemName).toBeDefined();
} );

test("update one - id", () => {
    expect(food.updateFood).toBeDefined();
} );

test("delete one - id", () => {
    expect(food.deleteFood).toBeDefined();
} );

