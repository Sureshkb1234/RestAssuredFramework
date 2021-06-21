package stepdefinition;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;
import io.restassured.http.ContentType;
import page.Post;

import static io.restassured.RestAssured.given;

public class PostStep {
    private final Consts consts;
    private String uri;

    public PostStep(Consts consts) {
        this.consts = consts;
    }

    @Given("^I send posts request$")
    public void iHaveAnEndPointPosts() {
        uri = String.format("%s/%s", consts.url, "posts");
    }

    @When("^I send post with title \"([^\"]*)\" and body \"([^\"]*)\" and userId (\\d+)$")
    public void postWithTitleAndAuthor(String title, String body,Integer userId) {
        Post newPost = new Post(title, body,userId);
        consts.response = given().contentType(ContentType.JSON).body(newPost.toStringJson()).when().post(uri);
        ;
    }
}
