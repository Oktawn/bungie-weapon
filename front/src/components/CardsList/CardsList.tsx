import { Link } from 'react-router-dom';
import { FlexboxGrid, Table } from 'rsuite';
import { ShortWeapon } from '../State/useListStore';
import './icon.css'

const { Column, HeaderCell, Cell } = Table;

function CardsList({ listWeapon }: { listWeapon: ShortWeapon[] }) {
  return (
    listWeapon.length > 0 &&
    <FlexboxGrid justify="center">
      <Table
        height={400}
        width={500}
        data={listWeapon}
        rowHeight={96}
        showHeader={false}
      >
        <Column width={250} fixed>
          <HeaderCell>Icon</HeaderCell>
          <Cell>
            {rowData => (
              <Link to={`/weapon/${rowData.id}`}>
                <div className="icon-container">
                  <img src={"https://www.bungie.net" + rowData.icon} className="icon" alt="icon" />
                  <img src={"https://www.bungie.net" + rowData.watermark} className="watermark" alt="watermark" />
                </div>
              </Link>
            )}
          </Cell>
        </Column>
        <Column width={250}>
          <HeaderCell>Name</HeaderCell>
          <Cell>
            {rowData => (
              <Link to={`/weapon/${rowData.id}`} className="result-item">
                {rowData.name}
              </Link>
            )}
          </Cell>
        </Column>
      </Table>
    </FlexboxGrid>
  );
}
export default CardsList

/* 
import React from 'react';
import { Link } from 'react-router-dom';
import { Table } from 'rsuite';
import 'rsuite/dist/styles/rsuite-default.css';
import './MyComponent.css'; // Создайте файл CSS для стилей

const { Column, Cell } = Table;

const MyComponent: React.FC<{ searchRes: any[] }> = ({ searchRes }) => {
  return (
    searchRes.length > 0 &&
    <Table
      height={400}
      data={searchRes}
      rowHeight={60}  // Высота строки, чтобы изображения умещались
    >
      <Column width={50} align="center" fixed>
        <Cell dataKey="id" />
      </Column>
      <Column width={200} fixed>
        <Cell>
          {rowData => (
            <div className="icon-container">
              <img src={"https://www.bungie.net" + rowData.icon} className="icon" alt="icon" />
              <img src={"https://www.bungie.net" + rowData.watermark} className="watermark" alt="watermark" />
            </div>
          )}
        </Cell>
      </Column>
      <Column width={200}>
        <Cell>
          {rowData => (
            <Link to={`/weapon/${rowData.id}`} className="result-item">
              {rowData.name}
            </Link>
          )}
        </Cell>
      </Column>
    </Table>
  );
};

export default MyComponent;
 */

