import {
  BookmarkIcon,
  ChatIcon,
  DotsHorizontalIcon,
  EmojiHappyIcon,
  HeartIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/outline";

function post(props: any) {
  return (
    <div className="bg-white my-7 border rounded-sm">
      <div className="flex items-center p-5">
        <img
          src={props.userImg}
          className="rounded-full h-12 w-12 object-containt border p-1 mr-3"
          alt=""
        />
        <p className="flex-1 font-bold">{props.userName}</p>
        <DotsHorizontalIcon className="h-5" />
      </div>

      <img src={props.img} className="object-cover w-full " alt="" />

      {/* button  */}
      <div className="flex justify-between pt-4 px-4">
        <div className="flex space-x-4">
          <HeartIcon className="btn" />
          <ChatIcon className="btn" />
          <PaperAirplaneIcon className="btn rotate-45" />
        </div>
        <BookmarkIcon className="btn" />
      </div>
      {/* captions */}
      <p className="p-5 truncate">
        <span className="font-bold mr-1">{props.userName}</span>
        {props.caption}
      </p>

      <form className="flex items-center p-4">
        <EmojiHappyIcon className="h-7" />
        <input
          type="text"
          placeholder="add comment here ..."
          className="border-none flex-1 outline-none focus:ring-0 p-1"
        />
        <button className="font-semibold text-blue-400">Post</button>
      </form>
    </div>
  );
}

export default post;
