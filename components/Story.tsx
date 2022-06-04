function Story(props: any) {
  return (
    <div>
      <img
        className="h-14 w-14 rounded-full p-[1.5px] border-red-500 border-2 object-contain cursor-pointer hover:scale-110"
        src={props.img}
        alt={props.name}
      />
      <p className="text-xs w-14 truncate text-center">{props.name}</p>
    </div>
  );
}

export default Story;
