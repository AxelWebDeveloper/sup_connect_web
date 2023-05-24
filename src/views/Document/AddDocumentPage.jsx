import React, { useState } from 'react';
import styled from 'styled-components';
import Select from 'react-select';

const AddDocumentPage = () => {
    const [title, setTitle] = useState('');
    const [message, setMessage] = useState('');
    const [file, setFile] = useState(null);
    const [selectedOption, setSelectedOption] = useState(null);

    const options = [
        { value: 'email1@example.com', label: 'Email 1' },
        { value: 'email2@example.com', label: 'Email 2' },
        { value: 'email3@example.com', label: 'Email 3' }
    ];

    const handleSubmit = (e) => {
        e.preventDefault();

        if (file) {
            console.log('Titre:', title);
            console.log('Message:', message);
            console.log('Fichier:', file);
            console.log('Destinataire:', selectedOption);

            setTitle('');
            setMessage('');
            setFile(null);
            setSelectedOption(null);
        }
    };

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        setFile(selectedFile);
    };

    const handleSelectChange = (selectedOption) => {
        setSelectedOption(selectedOption);
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Input
                type="text"
                placeholder="Titre du document"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <Input
                type="text"
                placeholder="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            />
            <SelectWrapper>
                <Select
                    options={options}
                    value={selectedOption}
                    onChange={handleSelectChange}
                    placeholder="Sélectionnez un e-mail"
                />
            </SelectWrapper>
            <Input
                type="file"
                accept=".jpg, .pdf"
                onChange={handleFileChange}
            />
            <Button type="submit" disabled={!title || !message || !file || !selectedOption}>
                Envoyer le document
            </Button>
        </Form>
    );
};

const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: auto;
  align-items: center;
`;

const Input = styled.input`
  width: 150%;
  height: 100%;
  padding: 10px;
  border: none;
  border-radius: 10px;
  margin-bottom: 3%;
`;

const SelectWrapper = styled.div`
  width: 150%;
  margin-top: 2%;
  margin-bottom: 3%;
`;

const Button = styled.button`
  padding: 10px;
  width: 300px;
  background-color: ${props => props.hasFile ? '#4F60FC' : 'rgba(153, 160, 230, 0.65)'};
  color: white;
  margin-top: 2%;
`;

export default AddDocumentPage;
