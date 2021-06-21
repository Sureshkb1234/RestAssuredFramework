package stepdefinition;

import static io.restassured.RestAssured.given;
import static org.hamcrest.Matchers.equalTo;

import java.util.List;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;
import io.restassured.RestAssured;
import io.restassured.http.ContentType;
import io.restassured.path.json.JsonPath;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;
import page.Comment;

public class CommentsStep {
    private final Consts consts;
    private String uri;
    private RequestSpecification request;
    private Response response;

    public CommentsStep(Consts consts) {
        this.consts = consts;
    }

    @Given("^I make the end point comment url$")
    public void endPointComment() {
        request = given();
    }

    @When("^I post a comment \"([^\"]*)\" on post with title \"([^\"]*)\"$")
    public void postCommentOnPostTitleAndAuthor(String comment, String title) {
        JsonPath jsonPath = RestAssured.given().param("q", title).get(consts.url + "/posts").jsonPath();
        List<Integer> post_id = jsonPath.getList("id");
        uri=consts.url+"/posts/1/comments";
        System.out.println("Comme:"+uri);
        Comment newComment = new Comment(comment, post_id.get(0));
        consts.response = request.contentType(ContentType.JSON).body(newComment.toStringJson()).when().post(uri);
        System.out.println("comments01::"+newComment.toStringJson());
    }
    @And("^I see the response includes my comment \"([^\"]*)\"$")
    public void responseAddMyComment(String comment) {
        consts.response.then().statusCode(Integer.parseInt("201")).assertThat().body("body", equalTo(comment));
    }
}
