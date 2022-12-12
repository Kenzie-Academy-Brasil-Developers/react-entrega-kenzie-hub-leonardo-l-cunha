import { useState } from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { createContext } from "react";
import { toast } from "react-toastify";
import { api } from "../services/api";
import { userContexts } from "./userContext";

export const techContext = createContext({});

export const TechProvider = ({ children }) => {
  const { user } = useContext(userContexts);
  const [tech, setTech] = useState(user.techs);
  const [openModal, setOpenModal] = useState(false);
  const [modalEdit, setModalEdit] = useState(false);
  const [editTech, setEditTech] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {}, [tech]);
  const createTech = async (body) => {
    const token = localStorage.getItem("@TOKEN");

    const resolveAfter1Sec = new Promise((resolve) =>
      setTimeout(resolve, 1000)
    );
    toast.promise(resolveAfter1Sec, {
      pending: "Carregando",
    });

    try {
      const response = await api.post("/users/techs", body, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      setTech([...tech, response.data]);
      setOpenModal(false);

      toast.promise(resolveAfter1Sec, {
        success: "Tecnologia  Criada",
      });
    } catch (error) {
      console.error(error);
      toast.error(error.response.data.message);
    } finally {
      setOpenModal(false);
    }
  };

  const putEditTech = async (id, body) => {
    const token = localStorage.getItem("@TOKEN");

    const resolveAfter1Sec = new Promise((resolve) =>
      setTimeout(resolve, 1000)
    );
    toast.promise(resolveAfter1Sec, {
      pending: "Carregando",
    });
    setLoading(true);
    try {
      const response = await api.put(`/users/techs/${id}`, body, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      console.log(response.data);
      const indexItem = tech.findIndex((item) => {
        return item.id === id;
      });
      tech[indexItem] = response.data;
      setTech(tech);
      setModalEdit(false);

      toast.promise(resolveAfter1Sec, {
        success: "Tecnologia  Atualizada",
      });
    } catch (error) {
      console.error(error);
      toast.promise(resolveAfter1Sec, {
        error: error.message,
      });
    } finally {
      setLoading(false);
    }
  };
  const deleteTech = async (id) => {
    const token = localStorage.getItem("@TOKEN");

    const resolveAfter1Sec = new Promise((resolve) =>
      setTimeout(resolve, 1000)
    );
    toast.promise(resolveAfter1Sec, {
      pending: "Carregando",
    });
    setLoading(true);
    try {
      const response = await api.delete(`/users/techs/${id}`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });

      const newList = tech.filter((list) => {
        return list.id !== id;
      });
      setTech(newList);
      toast.promise(resolveAfter1Sec, {
        success: "Tecnologia  excluida",
      });
    } catch (error) {
      console.error(error);
      toast.promise(resolveAfter1Sec, {
        error: error,
      });
    } finally {
      setLoading(false);
    }
  };
  return (
    <techContext.Provider
      value={{
        createTech,
        tech,
        setTech,
        openModal,
        setOpenModal,
        modalEdit,
        setModalEdit,
        editTech,
        setEditTech,
        putEditTech,
        deleteTech,
        loading,
      }}
    >
      {children}
    </techContext.Provider>
  );
};
