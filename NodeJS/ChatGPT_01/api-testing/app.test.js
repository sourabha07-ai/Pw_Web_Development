const request = require("supertest");
const app = require("./app");

describe("Users API", () => {

  test("GET all users should return 200", async () => {
    const response = await request(app)
      .get("/api/users");

    expect(response.statusCode).toBe(200);
    expect(response.body).toBeInstanceOf(Array);
    expect(response.body.length).toBeGreaterThan(0);
  });

  test("GET user by ID should return user", async () => {
    const response = await request(app)
      .get("/api/users/1");

    expect(response.statusCode).toBe(200);
    expect(response.body.name).toBe("Rahul");
  });

  test("GET invalid user should return 404", async () => {
    const response = await request(app)
      .get("/api/users/999");

    expect(response.statusCode).toBe(404);
    expect(response.body.message).toBe("User not found");
  });

  test("POST user should create a new user", async () => {
    const response = await request(app)
      .post("/api/users")
      .send({ name: "Sourabha" });

    expect(response.statusCode).toBe(201);
    expect(response.body.name).toBe("Sourabha");
  });

  test("POST empty name should return 400", async () => {
    const response = await request(app)
      .post("/api/users")
      .send({ name: "" });

    expect(response.statusCode).toBe(400);
  });

});