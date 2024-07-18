import { useEffect, useState } from "react";
const url = "https://api.github.com/users/QuincyLarson";

const MultipleReturnsFetchData = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const resp = await fetch(url);
        if (!resp.ok) {
          setIsError(true);
          setIsLoading(false);

          return;
        }

        const user = await resp.json();
        setUser(user);
        console.log(resp);
      } catch (error) {
        setIsError(true);
        console.log(error);
      }
      setIsLoading(false);
    };

    fetchUser();
  }, []);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>There is an error ...</h2>;
  }
  const { avatar_url, name, company, bio, location } = user;
  // if u are destructuring e.g above do it after the condition bcos the useState is set as null
  return (
    <div>
      <img
        style={{ width: "150px", borderRadius: "25px" }}
        src={avatar_url}
        alt={name}
      />
      <h2>{name}</h2>
      <h2>works at {company}</h2>
      <p>{bio}</p>
      <p>{location}</p>
    </div>
  );
};
export default MultipleReturnsFetchData;
