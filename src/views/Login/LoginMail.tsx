import React, { Fragment } from 'react'
import { Col, Navbar, Button, Row, Image, Card, Form } from 'react-bootstrap'
import { Formik } from 'formik'
import * as yup from 'yup'
import { Link } from 'react-router-dom'
import Logo from './logo-survi.png'

const LoginSchema = yup.object().shape({
  email: yup
    .string()
    .email('Debes ingresar un correo válido')
    .max(50, 'El largo máximo es de 50 carácteres')
    .required('El correo es obligatorio'),
  password: yup
    .string()
    .min(8, 'La contraseña debe tener mínimo 8 carácteres')
    .max(20, 'El largo máximo es de 20 carácteres')
    .required('La contraseña es obligatoria')
})

const LoginMail = () => {
  return (
    <Fragment>
      <Row className="bg-white">
        <Col>
          <Navbar bg="white" variant="light">
            <Navbar.Brand>
              <Image src={Logo} width="160" height="30" />
            </Navbar.Brand>
          </Navbar>
        </Col>
      </Row>

      <Row className="justify-content-center mt-4">
        <Card border="light" className="shadow-sm mt-5">
          <Card.Body>
            <div className="text-center mt-4 mb-5">
              <Card.Title>
                <h5>Inicia Sesión</h5>
              </Card.Title>
              <Card.Text>Ingresa tus datos para comenzar</Card.Text>
            </div>
            <div className="mx-5 clearfix">
              <Formik
                initialValues={{ email: '', password: '' }}
                validationSchema={LoginSchema}
                onSubmit={(values, { resetForm }) => {
                  setTimeout(() => {
                    console.log(values)
                    resetForm()
                  }, 300)
                }}
              >
                {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  isValid
                }) => (
                  <Form method="POST" noValidate onSubmit={handleSubmit}>
                    <Form.Group controlId="formBasicEmail">
                      <Form.Label>
                        <strong>CORREO ELECTRÓNICO</strong>
                      </Form.Label>
                      <Form.Control
                        type="email"
                        name="email"
                        placeholder="Ingresa tu correo electrónico"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                        isValid={touched.email && !errors.email}
                        isInvalid={touched.email && !!errors.email}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.email}
                      </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                      <Form.Label>
                        <strong>CONTRASEÑA</strong>
                      </Form.Label>
                      <Form.Control
                        type="password"
                        name="password"
                        placeholder="Ingresa tu contraseña"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password}
                        isValid={touched.password && !errors.password}
                        isInvalid={touched.password && !!errors.password}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.password}
                      </Form.Control.Feedback>
                    </Form.Group>
                    <div className="text-info float-right mb-4">
                      <p>
                        <small>
                          <a href="#">¿Olvidaste tu contraseña?</a>
                        </small>
                      </p>
                    </div>
                    <br />
                    <div className="float-left mr-4 mb-4">
                      <Link to="/register" className="text-decoration-none">
                        <Button variant="link" type="submit">
                          Crear cuenta
                        </Button>
                      </Link>
                    </div>
                    <div className="float-right ml-4 mb-4">
                      <Button
                        variant="primary"
                        type="submit"
                        className="px-3"
                        disabled={!isValid}
                      >
                        Ingresar
                      </Button>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </Card.Body>
        </Card>
      </Row>
    </Fragment>
  )
}

export default LoginMail
