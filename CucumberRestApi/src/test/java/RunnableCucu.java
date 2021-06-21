import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;

@CucumberOptions
(plugin = {"html:target/cucumber-html-report", "json:target/cucumber-json-report.json"},
        features = {"src/test/features/"},
        		tags = "@test",
        glue = "stepdefinition"
        )
public class RunnableCucu extends AbstractTestNGCucumberTests {
}
