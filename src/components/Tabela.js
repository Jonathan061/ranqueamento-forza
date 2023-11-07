import React from 'react';
import './Tabela.css'
import {Table} from 'react-bootstrap'

class Tabela extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            nicks : []
        }
    }

    render(){
        return(
            <Table className='container table table-dark table-striped'>
                <thead>
                    <tr>
                        <th>Colocação</th>
                        <th>Nick</th>
                        <th>Pontuação</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>StereOnline x</td>
                        <td>100</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Pulminhas</td>
                        <td>100</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>QueirozExe</td>
                        <td>100</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>Godah2449</td>
                        <td>100</td>
                    </tr>
                </tbody>
            </Table>
        )
    }
}

export default Tabela