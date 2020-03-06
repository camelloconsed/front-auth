import React, { Fragment } from 'react'
import { Row, Col, Button, Badge, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import Logo from './logo-survi.png'

const Login = () => {
  return (
    <Fragment>
      <Row>
        <Col xs={6}></Col>
        <Col xs={6} className="bg-white px-5 vh-100">
          <Row>
            <Col xs={6}>
              <div className="my-5">
                {/*This logo is not official, I need the logo in svg*/}
                <Image src={Logo} />
              </div>

              <div className="">
                <div className="mb-4 mt-5 float-left">
                  <h5>Inicia Sesión</h5>
                </div>

                <div>
                  <Link to="/login" className="text-light text-decoration-none">
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

                <div className="mt-5 mb-3 text-center">
                  <a href="#" className="text-decoration-none text-dark">
                    ¿No tienes cuenta?
                  </a>
                </div>
                <div className="mb-5">
                  <Button variant="outline-dark" className="py-3" block>
                    <div className="d-flex justify-content-center">
                      <div>Crear cuenta</div>
                    </div>
                  </Button>
                </div>

                <div className="text-center">
                  <small>
                    <Badge pill variant="light">
                      Powered by Survi
                    </Badge>
                  </small>
                </div>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Fragment>
  )
}

export default Login
