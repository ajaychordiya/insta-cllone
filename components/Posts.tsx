import Post from "./post";

function Posts() {
  const dummyData = [
    {
      id: "123",
      userImg: "/insta.png",
      userName: "ajay",
      img: "/insta.png",
      caption:
        "spermiogram characteristics and the morphometric descriptors is necessary to effectively develop sperm cryopreservation.",
    },
    {
      id: "124",
      userImg: "/insta.png",
      userName: "ajay",
      img: "/insta.png",
      caption:
        "spermiogram characteristics and the morphometric descriptors is necessary to effectively develop sperm cryopreservation.",
    },
  ];
  return (
    <div>
      {dummyData.map((post) => {
        return (
          <Post
            key={post.id}
            userImg={post.userImg}
            userName={post.userName}
            caption={post.caption}
            img={post.img}
          />
        );
      })}
    </div>
  );
}

export default Posts;
