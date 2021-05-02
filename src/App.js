import logo from './logo.svg';
import './App.css';

import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { useEffect, useState } from 'react';
import { PersonaService } from './service/PersonaService';
import {Panel} from 'primereact/panel';

function App() {

  const [personas, setPersonas] = useState([]);

  useEffect(() => {
    let personaService = new PersonaService();
    personaService.getAll().then(res => setPersonas(res));
  });

  return (
    <div style={{width:'80%', margin: '0 auto', marginTop: '20px'}}>
       <Panel header="React CRUD App">
          <DataTable value={personas}>
            <Column field="id" header="ID"></Column>
            <Column field="nombre" header="Nombre"></Column>
            <Column field="apellido" header="Apellido"></Column>
            <Column field="direccion" header="Dirección"></Column>
            <Column field="telefono" header="Teléfono"></Column>
        </DataTable>
      </Panel>
    </div>
  );
}

export default App;
