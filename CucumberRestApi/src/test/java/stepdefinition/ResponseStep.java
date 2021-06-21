package stepdefinition;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import io.restassured.response.ValidatableResponse;
import org.apache.commons.lang3.StringUtils;

import java.util.Map;

import static org.hamcrest.Matchers.equalTo;

public class ResponseStep {
    private final Consts consts;
    private ValidatableResponse json;

    public ResponseStep(Consts consts) {
        this.consts = consts;
        json = consts.response.then();
       // System.out.println("REs:"+json.);
    }

    @Then("I see the status code is (\\d+)")
    public void seeStatuscode(int statusCode) {
        json.statusCode(statusCode);
    }

    @And("I see the following sent response$")
    public void verifyResponse(Map<String, String> responseFields) {
        for (Map.Entry<String, String> tags : responseFields.entrySet()) {
            if (StringUtils.isNumeric(tags.getValue())) {
                json.body(tags.getKey(), equalTo(Integer.parseInt(tags.getValue())));
            } else {
                json.body(tags.getKey(), equalTo(tags.getValue()));
            }
        }
    }

    @And("^I see the response for username \"([^\"]*)\" and name \"([^\"]*)\" tags$")
    public void responseAddedUsernameAndNameFields(String username, String name) {
        json = consts.response.then().statusCode(Integer.parseInt("200"));
        json.assertThat().body("username[1]", equalTo(username));
        json.assertThat().body("name[1]", equalTo(name));
    }

}
