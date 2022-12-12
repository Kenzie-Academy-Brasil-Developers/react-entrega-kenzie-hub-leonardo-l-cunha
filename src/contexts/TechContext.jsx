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
  const [loading, setLoading] = useState(true);

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
      setLoading(true);
      toast.promise(resolveAfter1Sec, {
        success: "Tecnologia  Criada",
      });
    } catch (error) {
      console.error(error);
      toast.promise(resolveAfter1Sec, {
        error: error,
      });
    } finally {
      setOpenModal(false);

      setLoading(true);
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
    console.log(tech);

    try {
      const response = await api.put(`/users/techs/${id}`, body, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      console.log(response.data);
      setTech([...tech, { status: response.data.status }]);
      setModalEdit(false);
      setLoading(false);
      toast.promise(resolveAfter1Sec, {
        success: "Tecnologia  Atualizada",
      });
    } catch (error) {
      console.error(error);
      toast.promise(resolveAfter1Sec, {
        error: error,
      });
    } finally {
      setLoading(true);
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

    try {
      const response = await api.delete(`/users/techs/${id}`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      setTech([...tech, response.data]);
      toast.promise(resolveAfter1Sec, {
        success: "Tecnologia  excluida",
      });
    } catch (error) {
      console.error(error);
      toast.promise(resolveAfter1Sec, {
        error: error,
      });
    } finally {
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
      }}
    >
      {children}
    </techContext.Provider>
  );
};
