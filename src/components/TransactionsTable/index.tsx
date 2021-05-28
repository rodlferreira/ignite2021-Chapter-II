import { useEffect } from 'react';
import { api } from '../../services/api';
import { Container } from './styles';

export function TransationsTable() {

    useEffect(() => {
        api.get('transations')
        .then(response => console.log(response.data))
    }, []);


    return(
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Titulo</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Desenvolvimento de Website</td>
                        <td className="deposit">R$ 12.000,00</td>
                        <td>Desenvolvimento</td>
                        <td>20/02/2021</td>
                    </tr>
                </tbody>

                <tbody>
                    <tr>
                        <td>Desenvolvimento de Website</td>
                        <td className="withdraw">- R$ 12.000,00</td>
                        <td>Desenvolvimento</td>
                        <td>20/02/2021</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    );
}