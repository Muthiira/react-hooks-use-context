import React,{useState} from "react";

// create the context
const UserContext = React.createContext();

// create a provider component
function UserProvider({ children }) {
	const [user, setUser] = useState(null);
  // the value prop of the provider will be our context data
  // this value will be available to child components of this provider

  const currentUser = {
    name: "Duane",
    interests: ["Coding", "Biking", "Words ending in 'ing'"],
  };
  return (
    // <UserContext.Provider value={currentUser}>{children}</UserContext.Provider>
	<UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

export { UserContext, UserProvider };
