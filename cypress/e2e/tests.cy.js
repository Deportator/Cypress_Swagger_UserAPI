const {
  id,
  username,
  firstName,
  lastName,
  email,
  password,
  phone,
  userStatus,
} = require("../fixtures/user.json");

describe("tests", () => {
  it("Should create a new user", () => {
    cy.createUser(
      id,
      username[0],
      firstName,
      lastName,
      email,
      password,
      phone,
      userStatus
    ).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.message).to.eql("880088");
    });
  });

  it("Should update name", () => {
    cy.createUser(
      id,
      username[0],
      firstName,
      lastName,
      email,
      password,
      phone,
      userStatus
    );
    cy.updateUser(
      id,
      username[1],
      firstName,
      lastName,
      email,
      password,
      phone,
      userStatus
    ).then((response) => {
      expect(response.status).to.eq(200);
    });
  });

  it("Should delete user", () => {
    cy.createUser(
      id,
      username[0],
      firstName,
      lastName,
      email,
      password,
      phone,
      userStatus
    );
    cy.deleteUser(username).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.message).to.eql("Deportator");
    });
  });
});
