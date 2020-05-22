const request = require("supertest");
const app = require("../../server/server");
const { RouteNames } = require("../../constants/constants");
var expect = require('chai').expect;
const config = require("../../config/constants");

//SECTION Updating User info Tests
describe('Update Tests', () => {

    it("update user while not autorized", (done) => {
        request(app)
            .post(RouteNames.update)
            .send(config.ValidLoginUser)
            .set("Accept", "application/json")
            .end(function(err, response) {
                if (err) {
                    return err;
                };
                expect(response.statusCode).to.equal(401);
                done();
            });
    });

    it("update user while Route not found", (done) => {
        request(app)
            .post(RouteNames.user)
            .send(config.ValidLoginUser)
            .set("Accept", "application/json")
            .set('authorization', config.AuthToken)
            .end(function(err, response) {
                if (err) {
                    return err;
                };
                expect(response.statusCode).to.equal(404);
                done();
            });
    });
    it("update user while Route not found", (done) => {
        request(app)
            .post(RouteNames.update)
            .send(config.ValidLoginUser)
            .set("Accept", "application/json")
            .set('authorization', config.AuthToken)
            .end(function(err, response) {
                if (err) {
                    return err;
                };
                expect(response.statusCode).to.equal(200);
                done();
            });
    });
});