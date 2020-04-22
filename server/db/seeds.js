use guests;
db.dropDatabase();

db.bookings.insertMany([
  {
    name: "Jack",
    room: 47,
    date: "2017-06-01"
  },
  {
    name: "Victor",
    room: 35,
    date: "2017-01-22"
  },
  {
    name: "Isa",
    room: 22,
    date: "2018-08-15"
  }
]);
