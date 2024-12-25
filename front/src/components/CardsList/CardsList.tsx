import { Link } from 'react-router-dom';
import { FlexboxGrid, Table } from 'rsuite';
import { ShortWeapon } from '../State/useListStore';
import './icon.css'
import CacheImage from '../CacheImage/CacheImage';

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
        virtualized={true}
      >
        <Column width={250} fixed>
          <HeaderCell>Icon</HeaderCell>
          <Cell>
            {rowData => (
              <Link to={`/weapon/${rowData.id}`}>
                <div className="icon-container">
                  <CacheImage src={"https://www.bungie.net" + rowData.icon} className="icon" alt="icon" />
                  <CacheImage src={"https://www.bungie.net" + rowData.watermark} className="watermark" alt="watermark" />
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