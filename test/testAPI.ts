import { doesNotMatch } from 'assert';
import chai from 'chai'
import chaiHttp from 'chai-http'
import app from '../src/server'

chai.use(chaiHttp);
chai.should();

describe('API Index Endpoint', () => {

    it('should get welcome message', done => {
        chai.request(app)
            .get("/")
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.message.should.include('Welcome to the Scientist API');
                done();
            })
    });
});


describe('API Scientists Endpoint', () => {

    const marieCurie = {
        firstName: "Marie",
        lastName: "Curie",
        nationality: "polish",
        fields: [
            "chemistry",
            "physics",
            "radioactivity"
        ],
        nobelPrize: true,
        DOB: "1867-11-07",
    }

    it('Should Not Create Scientist with incomplete information', done => {
        chai.request(app)
            .post("/scientist/")
            .type('application/json')
            .send(marieCurie)
            .end((err, res) => {
                res.should.have.status(400);
                done();
            })
    })


})