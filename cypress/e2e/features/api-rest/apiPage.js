export default class ApiPage {

    static getUserById(userId) {
        cy.request(`/users/${userId}`).then((response) => {
            cy.log(JSON.stringify(response.body.data.email));
            cy.log(JSON.stringify(response.headers));
        });
    }

    static nonExistUser(userId) {
        cy.request({url: '/users/' + userId, method: 'GET', failOnStatusCode: false}).as('nonEsist');
        cy.get('@nonEsist').then((res) => {
            expect(res.status).to.equal(404);
        })
    }

    static validateHeaders() {
        cy.request("/users/2").as('user');
        cy.get("@user").its("headers").its('content-type').should("include","application/json");
    }

    static validateBody() {
        cy.request("/users/2").as('user');
        // cy.get("@user").its("body").its('data').should("include","email");
        cy.get("@user").then((response) =>{
            // expect(response.body).as("data");
            cy.log(expect("response.body.data"));
            expect(response.body.data).to.not.be.null;
            // expect("response.body.data").to.have.property("id");
            expect(response.body.data).to.have.property('email');
            expect(response.body.data.id).equal(2);
        });
    }
    
    static apiStatus() {
        cy.request("/users/2").as('user');
        cy.get("@user").then((response) =>{
            expect(response.status).to.eql(200);
        });
    }

    static loginRequest(email, password) {
        cy.request({
            url: "/login",
            method: 'POST',
            body: { email: email, password: password },
            failOnStatusCode: false,
        }).as('loginRequest');
        cy.get("@loginRequest").its('status').should('equal', 200);
        cy.get("@loginRequest").then((res) => {
            expect(res.body.token).to.equal("QpwL5tke4Pnpja7X4");
        });
    }

}