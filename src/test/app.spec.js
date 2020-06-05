import chai from 'chai'
import chaiHttp from 'chai-http'
import server from '../../app'

const should = chai.should()
chai.use(chaiHttp)

describe('---- Enter the test ----', () => {
    it('it should be able to run GET req', (done) => {
        chai.request(server)
        .get('/')
        .end((err, res) => {
            if(err) {
                done(err)
                process.exit(1)
            } else {
                res.should.have.status(200)
                
                res.body.meta.status.should.be.a('boolean')
                res.body.meta.message.should.be.a('string')
                res.body.meta.code.should.be.a('number')

                done()
            }
        })
    })
})