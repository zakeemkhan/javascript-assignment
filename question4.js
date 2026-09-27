// Question 4: Objects & Methods

const post = {
  username: "capetown_coder",
  caption: "Sunset over Table Mountain 🌅",
  likes: 120,
  comments: ["Beautiful!", "Wow, what a view", "Need to visit soon"],

  // Regular function (not an arrow) so `this` refers to the post object
  addLike() {
    this.likes += 1;
    console.log(`Liked! Total likes: ${this.likes}`);
  },
};

console.log("=== Question 4: Social Media Post ===");
console.log(`Likes before: ${post.likes}`);
post.addLike();
post.addLike();
post.addLike();
console.log(`Likes after: ${post.likes}`);

// Object destructuring
const { username, caption } = post;
console.log(`\nUsername: ${username}`);
console.log(`Caption: ${caption}`);

console.log("\nComments:");
post.comments.forEach((comment, i) => console.log(`  ${i + 1}. ${comment}`));
