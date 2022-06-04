import { Faker, faker } from "@faker-js/faker";
import { useEffect, useState } from "react";

interface Suggestion {
  name: string;
  email: string;
  address: string;
  bio: string;
  image: string;
}

function suggestion() {
  const [suggestions, setSuggestions] = useState<Suggestion[]>([]);

  const createSuggestion = () => {
    return {
      name: faker.name.findName(),
      email: faker.internet.email(),
      address: faker.address.streetAddress(),
      bio: faker.lorem.sentence(),
      image: faker.image.avatar(),
    };
  };

  const createSuggestions = (numUsers = 5) => {
    return Array.from({ length: numUsers }, createSuggestion);
  };

  useEffect(() => {
    let fakeUsers = createSuggestions(5);
    console.log(fakeUsers);
    setSuggestions(fakeUsers);
  }, []);
  return (
    <div className="mt-4 ml-10">
      <div className="flex justify-between text-sm mb-5">
        <h3 className="text-sm font-bold text-gray-400">suggestion for you</h3>
        <button className="text-blue-600 font-semibold">See All</button>
      </div>

      {suggestions.map((profile) => {
        return (
          <div
            key={profile.email}
            className="flex items-center justify-between mt-3"
          >
            <img
              src={profile.image}
              className="w-10 h-10 rounded-full border p-[2px]"
            />
            <div className="flex-1 mt-4">
              <h2 className="font-semibold text-sm">{profile.name}</h2>
              <h3 className="text-sm text-gray-400 truncate">{profile.bio}</h3>
            </div>

            <button className="text-blue-600 font-semibold">Follow</button>
          </div>
        );
      })}
    </div>
  );
}

export default suggestion;
