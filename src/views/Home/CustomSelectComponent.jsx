import React, {useState} from 'react';
import Select from 'react-select';
import styled from 'styled-components';

const CustomSelect = styled(Select)`
  .custom-icon {
    display: inline-block;
    margin-right: 5px;
  }

  .custom-select-container {
    width: 300px; /* Modifier la largeur selon vos besoins */
  }
  
`;

const StyledButton = styled.button`
  /* Styles personnalisés pour le bouton */
  border: none;
  border-radius: 4px;
  padding: 10px;
  width: 250px;
  background-color: ${props => props.hasFile ? '#4F60FC' : 'rgba(153, 160, 230, 0.65)'};
  color: white;
  margin-top: 5%;
  margin-left: 30px;
  margin-bottom: 30px;
`;

// Options pour le Select
const options = [
    { value: 'L1PARIS', label: 'L1 PARIS', icon: '👨‍🏫' },
    { value: 'L2PARIS', label: 'L2 PARIS', icon: '👨‍🏫' },
    { value: 'L3PARIS', label: 'L3 PARIS', icon: '👨‍🏫' },
];

// Fonction pour formater l'option avec une icône
const formatOptionLabel = ({ label, icon }) => (
    <div>
        <span className="custom-icon">{icon}</span>
        {label}
    </div>
);
const CustomSelectComponent = () => {
    const [selectedOption, setSelectedOption] = useState(null);

    const handleSelectChange = (option) => {
        setSelectedOption(option);
    };



    return (
        <div>
            <CustomSelect
                options={options}
                formatOptionLabel={formatOptionLabel}
                onChange={handleSelectChange}
                placeholder="Choisissez votre classe"
            />
        </div>
    );
};

export default CustomSelectComponent;

