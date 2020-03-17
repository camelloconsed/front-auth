import React, { Fragment, useState } from 'react'
import { Col, Navbar, Button, Row, Image, Card, Form } from 'react-bootstrap'
import { Formik } from 'formik'
import * as yup from 'yup'
import { Link } from 'react-router-dom'
import Logo from './logo-survi.png'
import Messages from '../constants/errorMessages'

const LoginSchema = yup.object().shape({
  email: yup
    .string()
    .email(Messages.email)
    .max(40, Messages.emailMax)
    .required(Messages.emailRequired),
  password: yup
    .string()
    .min(8, Messages.passwordMin)
    .max(20, Messages.passwordMax)
    .required(Messages.passwordRequired)
})

const LoginMail = () => {
  const [shown, setShown] = useState(false)
  const switchShown = () => setShown(!shown)

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
                onSubmit={(values, { setSubmitting, resetForm }) => {
                  setTimeout(() => {
                    console.log(values)
                    setSubmitting(false)
                    resetForm()
                  }, 500)
                }}
              >
                {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  isValid,
                  isSubmitting
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
                        type={shown ? 'text' : 'password'}
                        name="password"
                        placeholder="Ingresa tu contraseña"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password}
                        isValid={touched.password && !errors.password}
                        isInvalid={touched.password && !!errors.password}
                      />
                      <span className="field-icon text-muted" onClick={switchShown}>
                        {shown ? (
                          <i className="fas fa-eye-slash"></i>
                        ) : (
                          <i className="fas fa-eye"></i>
                        )}
                      </span>
                      <Form.Control.Feedback type="invalid">
                        {errors.password}
                      </Form.Control.Feedback>
                      <small className="form-text float-right mb-4">
                        <a href="#" className="text-decoration-none text-info">
                          ¿Olvidaste tu contraseña?
                        </a>
                      </small>
                    </Form.Group>

                    <br />
                    <div className="float-left mr-4 my-5">
                      <Link to="/register" className="text-decoration-none">
                        <Button variant="link" type="submit">
                          Crear cuenta
                        </Button>
                      </Link>
                    </div>
                    <div className="float-right ml-4 my-5">
                      <Button
                        variant="primary"
                        type="submit"
                        className="px-3"
                        disabled={isSubmitting || !isValid}
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
