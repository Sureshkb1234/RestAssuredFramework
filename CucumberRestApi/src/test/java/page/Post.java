package page;

import com.google.gson.GsonBuilder;

public final class Post {
    private final String title;
    private final String body;
    private final Integer userId;

    public Post(String title, String body,Integer userId) {
		this.title = title;
        this.body = body;
        this.userId = userId;
    }

    public String toStringJson() {
        return new GsonBuilder().create().toJson(this);
    }
}
