import React, {useState} from 'react';
import styled from 'styled-components';
import Pagination from 'react-js-pagination';

const Table = ({ students }) => {
    const [activePage, setActivePage] = useState(1);
    const itemsPerPage = 13;

    const handlePageChange = (pageNumber) => {
        setActivePage(pageNumber);
    };

    const indexOfLastItem = activePage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = students.slice(indexOfFirstItem, indexOfLastItem);

    return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
            <StyledTable>
                <thead>
                <tr>
                    <th>Nom</th>
                    <th>Prénom</th>
                    <th>Age</th>
                    <th>Classe</th>
                </tr>
                </thead>
                <tbody>
                {currentItems.map((student, index) => (
                    <tr key={index}>
                        <td>{student.nom}</td>
                        <td>{student.prenom}</td>
                        <td>{student.age}</td>
                        <td>{student.classe}</td>
                    </tr>
                ))}
                </tbody>
            </StyledTable>
            <PaginationWrapper>
                <Pagination
                    activePage={activePage}
                    itemsCountPerPage={itemsPerPage}
                    totalItemsCount={students.length}
                    pageRangeDisplayed={5}
                    onChange={handlePageChange}
                />
            </PaginationWrapper>
        </div>
    );
};

const StyledTable = styled.table`
    font-family: 'AvenirBook', sans-serif;
    background-color: white;
    border-collapse: collapse;
    width: 100%;
    margin: 0;
    padding: 16px;
    
    & tr:nth-child(even) {
        background-color: #f9f9f9;
    }
  
    & th {
      padding: 16px;
    }

    & th, & td {
      width: 20%;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      padding: 16px;
    }
    
    & td {
      padding: 16px;
      color: black;
      text-align: center;
    }
`;

const PaginationWrapper = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 16px;
    margin-left: 16px;
  
  .pagination {
    display: flex; 
    list-style-type: none;
    padding-inline-start: 0;
  }

  .pagination li {
    padding: 4px 8px; // Ajout d'un petit padding
    margin: 0 3px;
    border: 1px solid #ccc;
    border-radius: 4px;
    cursor: pointer;
  }

  .pagination li a {
    color: #333; // Couleur personnalisée pour le texte des boutons
    text-decoration: none;
  }

  .pagination li.active {
    border: 1px solid blue; // Couleur personnalisée pour l'arrière-plan des boutons actifs ou survolés
  }

  .pagination li.disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }
`;

export default Table;
