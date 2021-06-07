let expect = require ( 'chai' ).expect;
let request = require ( 'request' );

describe( 'Status and content' , function () {
    describe ( 'Index page' , function () {
        it( 'status' , function (done){
            request( 'http://localhost:3001/index' ,
                function (error, response, body) {
                    expect(response.statusCode).to.equal( 200 );
                    done();
                });
        });

        it( 'content' , function (done) {
            request( 'http://localhost:3001/index' ,
                function (error, response, body) {
                    expect(body).to.equal( 'Succesful Connection' );
                    done();
                });
        });
    });
});