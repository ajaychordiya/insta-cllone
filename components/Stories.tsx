import { Faker, faker } from "@faker-js/faker";
import { useEffect, useState } from "react";
import Story from "./Story";

interface User {
  name: string;
  email: string;
  address: string;
  bio: string;
  image: string;
}
function Stories() {
  const [user, setUser] = useState<User[]>([]);

  const createUser = () => {
    return {
      name: faker.name.findName(),
      email: faker.internet.email(),
      address: faker.address.streetAddress(),
      bio: faker.lorem.sentence(),
      image: faker.image.avatar(),
    };
  };

  const createUsers = (numUsers = 5) => {
    return Array.from({ length: numUsers }, createUser);
  };

  useEffect(() => {
    let fakeUsers = createUsers(20);
    console.log(fakeUsers);
    setUser(fakeUsers);
  }, []);
  return (
    <div
      className="flex space-x-2 p-6 bg-white mt-8 border-gray-200 border rounded-sm overflow-x-scroll 
    scrollbar-thin scrollbar-thumb-black
    "
    >
      {/* <div>{JSON.stringify(user)}</div> */}
      {user.map((u) => {
        return <Story key={u.email} img={u.image} name={u.name} />;
      })}
    </div>
  );
}

export default Stories;
