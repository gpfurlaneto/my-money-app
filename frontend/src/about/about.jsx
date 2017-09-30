import React from 'react'
import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import Row from '../common/layout/row'
import Grid from '../common/layout/grid'

export default props => (
    <div>
        <ContentHeader title='About' small='My Money'/>
        <Content>
            <Row>
                <Grid cols='12'>
                    This application was developed during a course about:<br/>
                    <li>React + Redux to frontend;</li> 
                    <li>Node, Express and MongoDB to backend;</li>
                    <br/>
                    <b4>To read more about the course, click </b4>
                    <a target='blank' href="https://www.cod3r.com.br/portal/courses/curso-de-react-+-redux:-fundamentos-e-duas-apps-do-absoluto-zero-18" >here</a>.
                    <br/>
                    The source code is available on Github: <a target='blank' href="https://github.com/gpfurlaneto/my-money-app">https://github.com/gpfurlaneto/my-money-app</a>
                    <br/>
                    <br/>
                    Created by <a target='blank' href="https://br.linkedin.com/in/guilhermefurlaneto/en">Guilherme Furlaneto</a>.
                </Grid>
            </Row>
        </Content>
    </div>
)