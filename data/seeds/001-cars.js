exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("cars")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("cars").insert([
        {
          id: 1,
          VIN: "12345ghjk7890",
          make: "Ford",
          model: "F150",
          mileage: "100,000",
          transmission: "manual",
          title: "salvage"
        },
        {
          id: 2,
          VIN: "12645bbgf8890",
          make: "Tesla",
          model: "Model 3",
          mileage: "90,000",
          transmission: "automatic",
          title: "clean"
        },
        {
          id: 3,
          VIN: "2645thgf88907",
          make: "Kia",
          model: "Sorrento",
          mileage: "40,000",
          transmission: "automatic",
          title: "clean"
        }
      ]);
    });
};
