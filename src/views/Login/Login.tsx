import React, { Fragment } from 'react'
import { Row, Col, Button, Badge, Image, Container } from 'react-bootstrap'
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'

import Logo from './logoSurvi.png'

const Login = () => {
  return (
    <Container>
      <Row className="justify-content-center text-center">
        <Col></Col>
        <Col xs={5} className="bg-white px-5">
          <div className="my-5">
            <Image src={Logo} /> {/*este logo no es oficial, necesito el logo en svg */}
          </div>

          <div className="mb-4 mt-5 float-left">
            <h5>Inicia Sesión</h5>
          </div>

          <div>
            <Link to="/login" className="text-light">
              <Button variant="primary" className="px-5 py-3 my-3" block>
                <div className="d-flex justify-content-center">
                  <div className="mr-2">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div>Ingresa con correo</div>
                </div>
              </Button>
            </Link>
          </div>
          <div className="mb-5">
            <Button variant="light" className="px-5 py-3 my-3" block>
              <div className="d-flex justify-content-center">
                <div className="mr-2">
                  <i className="fab fa-google"></i>
                </div>
                <div>Ingresa con Google</div>
              </div>
            </Button>
          </div>

          <div className="mt-5">
            <p>¿No tienes cuenta?</p>
          </div>
          <div className="mb-5">
            <Button variant="outline-dark" className="py-3" block>
              <div className="d-flex justify-content-center">
                <div>Crear cuenta</div>
              </div>
            </Button>
          </div>

          <div className="mb-5">
            <small>
              <Badge pill variant="light">
                Powered by Survi
              </Badge>
            </small>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default Login
