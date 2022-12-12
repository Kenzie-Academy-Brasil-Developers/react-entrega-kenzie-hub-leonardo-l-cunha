import { useContext } from "react";
import { useForm } from "react-hook-form";
import { techContext } from "../../contexts/TechContext";
import { Button } from "../Button";
import { Input } from "../Input";
import { Modal, ModalBox, ModalEdit, ModalForm } from "./style";

export const AddModal = () => {
  const { createTech, openModal, setOpenModal } = useContext(techContext);
  const { register, handleSubmit } = useForm({});

  const onSubmit = (data) => {
    createTech(data);
    setOpenModal(false);
  };
  return (
    <Modal>
      <ModalBox>
        <div>
          <h3>Cadastrar Tecnologia</h3>
          <button onClick={() => setOpenModal(!openModal)}>X</button>
        </div>
        <ModalForm onSubmit={handleSubmit(onSubmit)}>
          <Input
            name="name"
            type="text"
            placeholder="Nome da tecnologia"
            children="Nome"
            register={register("title")}
          />
          <label htmlFor="">Selecionar status</label>
          <select {...register("status")}>
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediário">Intermediário</option>
            <option value="Avançado">Avançado</option>
          </select>
          <Button type="submit" children="Cadastrar Tecnologia" />
        </ModalForm>
      </ModalBox>
    </Modal>
  );
};
export const ModalDelEdit = () => {
  const { modalEdit, setModalEdit, putEditTech, editTech, deleteTech } =
    useContext(techContext);
  const { register, handleSubmit } = useForm({});

  const onSubmit = (data) => {
    putEditTech(editTech.id, data);
    setModalEdit(false);
  };
  const deleteTec = () => {
    deleteTech(editTech.id);
    setModalEdit(false);
  };
  return (
    <ModalEdit>
      <ModalBox>
        <div>
          <h3>Tecnologia Detalhes</h3>
          <button onClick={() => setModalEdit(!modalEdit)}>X</button>
        </div>
        <ModalForm onSubmit={handleSubmit(onSubmit)}>
          <Input
            name="name"
            type="text"
            placeholder={editTech.title}
            children="Nome"
            readOnly={true}
          />
          <select {...register("status")}>
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediário">Intermediário</option>
            <option value="Avançado">Avançado</option>
          </select>
          <div>
            <button type="submit">Salvar alterações</button>
            <button onClick={deleteTec}>Excluir</button>
          </div>
        </ModalForm>
      </ModalBox>
    </ModalEdit>
  );
};
