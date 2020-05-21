const request = require("supertest");
const app = require("../../server/server");
const Routes = require("../constants");
var expect = require('chai').expect;
const config = require("../../config/constants");

describe("Login Tests", () => {

    //SECTION Fine login
    it("Fine Login", function(done) {
        request(app)
            .post(Routes.Login)
            .send(config.ValidLoginUser)
            .end(function(err, response) {
                if (err) {
                    return err;
                };
                expect(response.statusCode).to.equal(202);
                done();
            });
    });
    //SECTION login with not valid user 
    it("Bad Login", function(done) {
        request(app)
            .post(Routes.Login)
            .send(config.BadLoginUser)
            .set("Accept", "application/json")
            .end(function(err, response) {
                if (err) {
                    return err;
                };
                expect(response.statusCode).to.equal(422);
                done();
            });
    });
});