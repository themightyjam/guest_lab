use guests;
db.dropDatabase();

db.bookings.insertMany([
  {
    name: "Jack",
    room: 47,
    email: "j_jarvis_esquire@aol.com",
    date: "2017-06-01",
    checked_in: "no"

  },
  {
    name: "Victor",
    room: 35,
    email: "VicVon@craigelang.org",
    date: "2017-01-22",
    checked_in: "yes"
  },
  {
    name: "Isa",
    room: 22,
    email: "noseybee@hotmail.com",
    date: "2018-08-15",
    checked_in: "yes"
  }
]);
