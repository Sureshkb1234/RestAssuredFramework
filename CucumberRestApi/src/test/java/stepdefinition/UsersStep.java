package stepdefinition;


import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;

import static io.restassured.RestAssured.get;
import static io.restassured.RestAssured.given;

public class UsersStep {
    private final Consts consts;
    private String uri;
    private RequestSpecification request;
    private Response response;

    public UsersStep(Consts consts) {
        this.consts = consts;
    }

    @Given("^I create the service to see list of users$")
    public void iHaveAServiceToRequestListOfUsers() {
        request = given();
        uri= consts.url+"/users";
        get(uri).then().assertThat().statusCode(200);

    }

    @When("^I get the list of users$")
    public void requestListOfUsers() {
        response = request.get(uri);
        consts.response = response;
    }

}
