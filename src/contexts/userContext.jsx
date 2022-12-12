import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../services/api";

export const userContexts = createContext({});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [background, setBackground] = useState(true);

  useEffect(() => {
    const loadUser = async () => {
      const token = localStorage.getItem("@TOKEN");
      if (!token) {
        setLoading(false);
        return;
      }
      try {
        const { data } = await api.get("/profile", {
          headers: {
            authorization: `Bearer ${token}`,
          },
        });
        setUser(data);
      } catch (error) {
        localStorage.clear();
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    loadUser();
  }, []);

  const loginApi = async (data) => {
    try {
      const response = await api.post("sessions", data);
      const { token, user: userResponse } = response.data;
      setUser(userResponse);

      localStorage.clear();
      localStorage.setItem("@TOKEN", token);
      localStorage.setItem("@USERID", userResponse.id);
      api.defaults.headers.common.authorization = `Bearer ${token}`;
      toast.success("Login realizado com sucesso");
      setTimeout(() => {
        setBackground(false);
        navigate("/profile");
      }, 3000);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const registerApi = async (data) => {
    try {
      setLoading(true);
      const response = await api.post("users", data);

      toast.success("Conta criada com sucesso");
      setTimeout(() => {
        navigate("/");
      }, 3000);
    } catch (error) {
      console.log(error.response);
      toast.error(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <userContexts.Provider
      value={{
        user,
        loginApi,
        registerApi,
        loading,
        background,
        setBackground,
      }}
    >
      {children}
    </userContexts.Provider>
  );
};
