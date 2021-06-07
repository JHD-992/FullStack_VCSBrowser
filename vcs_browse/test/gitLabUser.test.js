let expect = require ( 'chai' ).expect;
let request = require ( 'request' );

describe( 'Status and content' , function () {
    describe ( 'GitLabUser' , function () {
        it( 'status' , function (done){
            request( 'http://localhost:3001/gitLabUsers?search=joe' ,
                function (error, response, body) {
                    expect(response.statusCode).to.equal( 200 );
                    done();
                });
        });

        it( 'content' , function (done) {
            request( 'http://localhost:3001/gitLabUsers?search=joe' ,
                function (error, response, body) {
                    expect(body).to.not.equal( ' ' );
                    done();
                });
        });
    });
});