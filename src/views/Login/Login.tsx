import React, { Fragment } from 'react'
import { Row, Col, Button, Badge, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import Logo from './logo-survi.png'

const Login = () => {
  return (
    <Fragment>
      <Row>
        <Col xs={6}></Col>
        <Col xs={6} className="bg-white">
          <div className="mt-5 w-75 vh-100 d-flex flex-column">
            <div className="mt-5 ml-5">
              {/*This logo is not official, I need the logo in svg*/}
              <Image src={Logo} />
            </div>

            <div className="mx-4 pl-5 my-auto">
              <div className="mb-5">
                <h5>Inicia Sesión</h5>
              </div>

              <Link to="/login" className="text-decoration-none">
                <Button variant="primary" className="py-3" block>
                  <i className="fas fa-envelope"></i> Ingresa con correo
                </Button>
              </Link>

              <div className="mb-5">
                <Button variant="light" className="py-3 my-3" block>
                  <i className="fab fa-google"></i> Ingresa con Google
                </Button>
              </div>

              <div className="mb-2 text-center">
                <a href="@" className="text-decoration-none text-dark">
                  ¿No tienes cuenta?
                </a>
              </div>
              <div className="mb-5">
                <Link to="/register" className="text-decoration-none">
                  <Button variant="outline-dark" className="py-3" block>
                    Crear cuenta
                  </Button>
                </Link>
              </div>

              <div className="text-center">
                <small>
                  <Badge pill variant="light">
                    Powered by Survi
                  </Badge>
                </small>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Fragment>
  )
}

export default Login
