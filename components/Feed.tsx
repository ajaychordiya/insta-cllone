import Miniprofile from "./Miniprofile";
import Posts from "./Posts";
import Stories from "./Stories";
import Suggestion from "./Suggestion";

function Feed() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 md:max-w-3xl xl:grid-col-3 xl:max-w-6xl mx-auto">
      <section className="cols-span-2">
        <Stories />
        <Posts />
      </section>

      <section className="hidden xl:inline-grid md:col-span-1">
        <div className="fixed top-20">
          <Miniprofile />
          <Suggestion />
        </div>
      </section>
    </div>
  );
}

export default Feed;
