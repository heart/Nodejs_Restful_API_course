const request = require('supertest');

const app = require('../src/app')

const mockData = {
    success: true,
    error: "",
    total: 100,
    page: 1,
    count: 5,
    resturants:[
        { name:"ไก่ทอดป้าดา" , id:"XXAACC", photo:"a.jpg" },
        { name:"ไก่ทอดป้าดา" , id:"XXAACC", photo:"a.jpg" },
        { name:"ไก่ทอดป้าดา" , id:"XXAACC", photo:"a.jpg" },
        { name:"ไก่ทอดป้าดา" , id:"XXAACC", photo:"a.jpg" },
        { name:"ไก่ทอดป้าดา" , id:"XXAACC", photo:"a.jpg" }
    ]
}

describe('GET /resturant', function() {
    it('responds with json and success=true', function(done) {
        return request(app)
        .get('/resturant')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .then(response => {
            expect(response.body).toEqual( mockData )
            done()
        })
    });
  });