const request = require("supertest");
const app = require("../../server/server");
const  Routes  = require("../constants");
var expect = require('chai').expect;
const config = require("../../config/constants");

describe("Follow Tests", () => {

    //SECTION Fine login
    it("Fine follow", function(done) {
        request(app)
            .post(Routes.follow)
            .send(config.FineFollow)
            .set("Accept", "application/json")
            .set('authorization', config.AuthToken)
            .end(function(err, response) {
                if (err) {
                    return err;
                }
                expect(response.statusCode).to.equal(202);
                done();
            });
    });
    //SECTION login with not valid user 
    it("Bad follow while authorized", function(done) {
        request(app)
            .post(Routes.follow)
            .send(config.BadFollow)
            .set("Accept", "application/json")
            .set('authorization', config.AuthToken)
            .end(function(err, response) {
                if (err) {
                    return err;
                };
                expect(response.statusCode).to.equal(422);
                done();
            });
    });

    //SECTION login with not valid user 
    it("Bad follow while unauthorized", function(done) {
            request(app)
                .post(Routes.follow)
                .send(config.BadFollow)
                .set("Accept", "application/json")
                .end(function(err, response) {
                    if (err) {
                        return err;
                    };
                    expect(response.statusCode).to.equal(401);
                    done();
                });
        });
    //SECTION login with not valid user 
    it("fine follow while unauthorized", function(done) {
            request(app)
                .post(Routes.follow)
                .send(config.FineFollow)
                .set("Accept", "application/json")
                .end(function(err, response) {
                    if (err) {
                        return err;
                    };
                    expect(response.statusCode).to.equal(401);
                    done();
                });
            });
    //SECTION login with not valid user 
    it("fine follow while authorized , User doesn't exist", function(done) {
        request(app)
            .post(Routes.follow)
            .send(config.MissingFollow)
            .set("Accept", "application/json")
            .end(function(err, response) {
             if (err) {
                return err;
                };
                expect(response.statusCode).to.equal(401);
                done();
            });
        });    
});