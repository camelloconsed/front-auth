import React, { Fragment } from 'react'
import { Col, Navbar, Button, Row, Image, Card, Form } from 'react-bootstrap'
import { Formik } from 'formik'
import * as yup from 'yup'
import { Link } from 'react-router-dom'
import Logo from './logo-survi.png'

const RegisterSchema = yup.object().shape({
  name: yup
    .string()
    .min(3, 'El nombre debe tener mínimo 3 carácteres')
    .max(30, 'El largo máximo es de 30 carácteres')
    .required('El nombre es obligatorio'),
  lastName: yup
    .string()
    .min(3, 'El apellido debe tener mínimo 3 carácteres')
    .max(50, 'El largo máximo es de 50 carácteres')
    .required('El apellido es obligatorio'),
  email: yup
    .string()
    .email('Debes ingresar un correo válido')
    .max(50, 'El largo máximo es de 50 carácteres')
    .required('El correo es obligatorio'),
  password: yup
    .string()
    .min(8, 'La contraseña debe tener mínimo 8 carácteres')
    .max(20, 'El largo máximo es de 20 carácteres')
    .required('La contraseña es obligatoria'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Las constraseñas deben coincidir')
    .min(8, 'La contraseña debe tener mínimo 8 carácteres')
    .max(20, 'El largo máximo es de 20 carácteres')
    .required('La contraseña es obligatoria')
})

const SignIn = () => {
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
        <Card border="light" className="shadow-sm my-5">
          <Card.Body>
            <div className="mx-4">
              <div className="text-center my-3">
                <Card.Title>
                  <h5>Crea tu cuenta</h5>
                </Card.Title>
                <div className="mb-5">
                  <Card.Text>
                    Ingresa tu información personal para crear tu cuenta
                  </Card.Text>
                </div>
              </div>
              <div className="mx-4 clearfix">
                <Formik
                  initialValues={{ name: '', lastName: '', email: '', password: '', confirmPassword:'' }}
                  validationSchema={RegisterSchema}
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
                    <Form method="POST" onSubmit={handleSubmit}>
                      <Form.Group controlId="formBasicName">
                        <Form.Label>
                          <strong>NOMBRE</strong>
                        </Form.Label>
                        <Form.Control
                          type="text"
                          name="name"
                          placeholder="Ingresa tu nombre"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.name}
                          isValid={touched.name && !errors.name}
                          isInvalid={touched.name && !!errors.name}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.name}
                        </Form.Control.Feedback>
                      </Form.Group>

                      <Form.Group controlId="formBasicLastName">
                        <Form.Label>
                          <strong>APELLIDO</strong>
                        </Form.Label>
                        <Form.Control
                          type="text"
                          name="lastName"
                          placeholder="Ingresa tus apellidos"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.lastName}
                          isValid={touched.lastName && !errors.lastName}
                          isInvalid={touched.lastName && !!errors.lastName}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.lastName}
                        </Form.Control.Feedback>
                      </Form.Group>

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
                          placeholder="Crea tu contraseña"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.password}
                          isValid={touched.password && !errors.password}
                          isInvalid={touched.password && !!errors.password}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.password}
                        </Form.Control.Feedback>
                        <small className="form-text text-muted">
                          Tu contraseña debe tener entre 8-20 caracteres
                        </small>
                      </Form.Group>

                      <Form.Group controlId="formBasicPassword1">
                        <Form.Label>
                          <strong>CONTRASEÑA</strong>
                        </Form.Label>
                        <Form.Control
                          type="password"
                          name="confirmPassword"
                          placeholder="Repite tu contraseña"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.confirmPassword}
                          isValid={touched.confirmPassword && !errors.confirmPassword}
                          isInvalid={touched.confirmPassword && !!errors.confirmPassword}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.confirmPassword}
                        </Form.Control.Feedback>
                      </Form.Group>

                      <div className="float-left mr-4 my-4">
                        <Link to="/" className="text-decoration-none">
                          <Button variant="link" type="submit">
                            Volver
                          </Button>
                        </Link>
                      </div>
                      <div className="float-right ml-4 my-4">
                        <Button
                          variant="primary"
                          type="submit"
                          className="px-3"
                          disabled={!isValid}
                        >
                          Continuar
                        </Button>
                      </div>
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
          </Card.Body>
        </Card>
      </Row>
    </Fragment>
  )
}

export default SignIn
