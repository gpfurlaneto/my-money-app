import React, { Component } from 'react'
import { Field } from 'redux-form'
import Grid from '../common/layout/grid'

class CreditList extends Component {

    renderRows() {
        return (
            <tr>
                <td><Field name='credits[0].name' component='input' /></td>
                <td><Field name='credits[0].value' component='input' /></td>
                <td></td>
            </tr>
        )
    }

    render() {
        return (
            <Grid cols='12 6'>
                <fieldset>
                    <legend>Créditos</legend>
                    <table>
                        <thead>
                            <th>Nome</th>
                            <th>Valor</th>
                            <th>Ações</th>
                        </thead>
                        <tbody>
                            {this.renderRows()}
                        </tbody>
                    </table>
                </fieldset>
            </Grid>
        )
    }
}

export default CreditList