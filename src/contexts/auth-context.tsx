import { onAuthStateChanged } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../../firebaseConfig";

const AuthContext = createContext<any>(null);

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
	const [user, setUser] = useState<any>(null);
	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			if (user) {
				setUser(user);
        // console.log(user)
			}
		});
	}, []);
	const values = { user };
	return (
		<AuthContext.Provider value={values}>{children}</AuthContext.Provider>
	);
};

const useAuth = () => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within a AuthProvider')
  }
  return context
}

export {AuthProvider, useAuth}
