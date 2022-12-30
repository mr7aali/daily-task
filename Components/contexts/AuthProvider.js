import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from "firebase/auth";
import app from "../firebase/firebase.config";
import { useRouter } from "next/router";

export const AuthContext = createContext();
const auth = getAuth(app);


const AuthProvider = ({ children }) => {
    
    const [user, setUser] = useState('ali');
    const[loading ,setLoading]= useState(true);
    const [editId,seteditId]= useState(null);
    const router = useRouter();

    const gotoNewRout = (r) => {

        router.push(r);
    } 
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const logIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }
    const singWithGoogle = () => {
        setLoading(true);
        const provider = new GoogleAuthProvider();
        return signInWithPopup(auth, provider);
    }
    const LogOut=()=>{
        return signOut(auth);
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => unsubscribe();
    }, [])
    const authInfo = {loading,gotoNewRout,  createUser, logIn,singWithGoogle, user,LogOut,editId,seteditId }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;