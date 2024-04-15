import React, {  useState } from 'react'
import style from './AddMaster.module.css'
import MyInput from '../../../UI/MyInput/MyInput';
import { addMasters } from '../../../store/mastersSlice';
import MyButton from '../../../UI/MyButton/MyButton';
import { useDispatch } from "react-redux";

const AddMasterModal = ({ modal, setModal }) => {
  const dispatch = useDispatch();

  const [name, setName] = useState('')
  const [second_name, setSecond_Name] = useState('')
  const [description, setDescription] = useState('')
  const [image, setImage] = useState(null)
  const [errorMessage, setErrorMessage] = useState('')

  const handleAdd = () => {
    if(name === "" || second_name === "") {
      setErrorMessage("Заполните все обязательные поля!");
    } else {
      const formData = new FormData();
      formData.append('name', name);
      formData.append('second_name', second_name);
      formData.append('description', description);
      formData.append('image', image);
      dispatch(addMasters(formData));
      setModal(false);
      setName('');
      setSecond_Name('');
      setDescription('');
      setImage(null)
      setErrorMessage("");
    }

  };
  
  const selectFile = e => {
    setImage(e.target.files[0])
  }

  return (
    <div>
        <div className={style.modal} onClick={() => setModal(!modal)}>
          <div className={style.modal_body} onClick={e => e.stopPropagation()}>
            <span className={style.close} onClick={() => setModal(!modal)}>
              &times;
            </span>
            <h2>Добавить нового мастера</h2>
            <div className={style.modal_content}>
              <div>
                <span>Имя</span>
                <MyInput value={name} onChange={e => setName(e.target.value)} />
              </div>
              <div>
                <span>Фамилия</span>
                <MyInput value={second_name} onChange={e => setSecond_Name(e.target.value)} />
              </div>
              <div>
                <span>Описание</span>
              <MyInput
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
              </div>
              <div>
                <span>Изображение</span>
              <MyInput
                type='file'
                onChange={selectFile}
              />
              </div>
            </div>
            <div className={style.error}>{errorMessage}</div>
            <MyButton onClick={handleAdd}>Добавить</MyButton>
          </div>
        </div>   
    </div>
  )
}

export default AddMasterModal