import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setUser, setToken } from "@redux/slices/Auth";
import { Toaster } from "react-hot-toast";
import Navbar from "@components/navbar/Navbar";
import Footer from "@components/footer/Footer";

const Layout = ({ children }) => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  // Getting User from localstorage
  useEffect(() => {
    if (typeof window !== undefined && !user) {
      let user,
        token = null;
      try {
        user = JSON.parse(localStorage.getItem("user"));
        token = localStorage.getItem("token");
      } catch (error) {
        console.log(error);
      }
      if (user && token) {
        dispatch(setUser(user));
        dispatch(setToken(token));
      }
    }
  }, []);
  return (
    <div>
      <Toaster />
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
