const mongoose = require('mongoose')
const LocalDB = require('../../config/config').LocalDB;
const {MongoClient} = require('mongodb');

describe('insert', () => {
  let connection;
  let db;

  beforeAll(async () => {
    connection = await MongoClient.connect(LocalDB, {
      useNewUrlParser: true,
    });
    db = await connection.db(global.__MONGO_DB_NAME__);
  });

  afterAll(async () => {
    await connection.close();
    await db.close();
  });

  it('should insert a doc into users collection', async () => {
    const users = db.collection('users');
    if (randID){randID = Math.floor(Math.random() *100000)}
    var randID = Math.floor(Math.random() *100000)

    const mockUser = {_id: randID.toString(), name: 'TEST USER Data'};
    await users.insertOne(mockUser);

    const insertedUser = await users.findOne({_id: randID.toString()});
    expect(insertedUser).toEqual(mockUser);
  });
  it('should insert a doc into comments collection', async () => {
    const users = db.collection('comments');
    var randID = Math.floor(Math.random() *100000)

    const mockUser = {_id: randID.toString(), name: 'TEST USER Data'};
    await users.insertOne(mockUser);

    const insertedUser = await users.findOne({_id: randID.toString()});
    expect(insertedUser).toEqual(mockUser);
  });

  it('should insert a doc into lessons collection', async () => {
    const users = db.collection('lessons');
    var randID = Math.floor(Math.random() *100000)

    const mockUser = {_id: randID.toString(), name: 'TEST USER Data'};
    await users.insertOne(mockUser);

    const insertedUser = await users.findOne({_id: randID.toString()});
    expect(insertedUser).toEqual(mockUser);
  });

  it('should insert a doc into courses collection', async () => {
    const users = db.collection('courses');
    var randID = Math.floor(Math.random() *100000)

    const mockUser = {_id: randID.toString(), name: 'TEST USER Data'};
    await users.insertOne(mockUser);

    const insertedUser = await users.findOne({_id: randID.toString()});
    expect(insertedUser).toEqual(mockUser);
  });

});