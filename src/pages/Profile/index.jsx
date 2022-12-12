import { useContext, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import { AddModal, ModalDelEdit } from "../../components/Addmodal";
import { Header } from "../../components/Header";
import { techContext } from "../../contexts/TechContext";
import { Container } from "../../styles/containet";
import { LiStyle, MainStyle, SectionStyle, UlStyle } from "./style";
export const Profile = () => {
  const {
    tech,
    openModal,
    setOpenModal,
    modalEdit,
    setModalEdit,
    setEditTech,
  } = useContext(techContext);

  const editDel = (data) => {
    setEditTech(data);
    setModalEdit(!modalEdit);
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Container>
        {openModal && <AddModal />}

        <Header />
        <MainStyle>
          {modalEdit && <ModalDelEdit />}
          <SectionStyle>
            <div>
              <h1>Tecnologias</h1>
              <button
                onClick={() => {
                  setOpenModal(!openModal);
                }}
              >
                +
              </button>
            </div>
            <UlStyle>
              {tech.map((element, index) => (
                <LiStyle key={index} onClick={() => editDel(element)}>
                  <h3>{element.title}</h3>
                  <div>
                    <span>{element.status}</span>
                  </div>
                </LiStyle>
              ))}
            </UlStyle>
          </SectionStyle>
        </MainStyle>
      </Container>
    </>
  );
};
