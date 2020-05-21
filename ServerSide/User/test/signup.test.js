const request = require("supertest");
const app = require("../../server/server");
const Routes = require("../constants");
var expect = require('chai').expect;
const config = require("../../config/constants");

//NOTE specs with no expectations within just pass.

describe('Registeration Tests', () => {

    //SECTION Fine Registeration
    it("FINE REGISTERATION", (done) => {
        request(app)
            .post(Routes.AddUser)
            .send(config.ValidUser)
            .end(function(err, response) {
                if (err) {
                    return err;
                }

                expect(response.statusCode).to.equal(202);
                done();
            });
    });

    //SECTION Bad Registeration
    it("Bad Registeration", function(done) {
        request(app)
            .post(Routes.AddUser)
            .send(config.NotValidUser)
            .end(function(err, response) {
                if (err) {
                    return err;
                }
                expect(response.statusCode).to.equal(422);
                done();
            });
    })
    it("Register already registered", function(done) {
        request(app)
            .post(Routes.AddUser)
            .send(config.ValidLoginUser)
            .end(function(err, response) {
                if (err) {
                    return err;
                }
                expect(response.statusCode).to.equal(422);
                done();
            });


    });
    it("Registeration with already exists", function(done) {
        request(app)
            .post(Routes.AddUser)
            .send(config.ValidLoginUser)
            .end(function(err, response) {
                if (err) {
                    return err;
                };
                expect(response.statusCode).to.equal(422);
                done();
            });
    });
});