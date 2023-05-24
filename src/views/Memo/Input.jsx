import styled from 'styled-components';
import React, {useEffect, useState} from 'react';
import axios from "axios";

const Form = ({ memos, setListMemo }) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleTitleChange = event => {
        setTitle(event.target.value);
    };

    const handleContentChange = event => {
        setContent(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log('Title submitted: ', title);
        console.log('Content submitted: ', content);
        await axios.post('http://localhost:3000/api/memo/', {
            title: title,
            content: content
        });
        const post = {
            title: title,
            content: content
        }
        setListMemo([...memos, post]);
    }

    return (
         <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection:'column', alignItems:'center', marginTop:'5%' }}  >
            <DivForm>
                <InputTitle onChange={(e) => handleTitleChange(e)} />
                <Input onChange={(e) => handleContentChange(e)} />
            </DivForm>
             <Button type="submit">Envoyer</Button>
         </form>
    );
};

const InputTitle = styled.input`
  width: 450px;
  height: 30px;
  padding: 10px;
  font-size: 18px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: none;
`;

const Input = styled.input`
  width: 450px;
  height: 300px;
  margin-top: 30%;
  padding: 10px;
  font-size: 18px;
  border: 1px solid #ccc;
  border-radius: 4px;
  
`;

const Button = styled.button`
  background-color: #d3f36a;
  width: 50%;
  color: black;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #b5de2e;
  }
`;

const DivForm = styled.div `
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export default Form;
