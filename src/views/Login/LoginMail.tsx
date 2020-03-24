import React, { Fragment, useState } from 'react'
import { Col, Navbar, Button, Row, Image, Card, Form } from 'react-bootstrap'
import { Formik } from 'formik'
import * as yup from 'yup'
import { Link } from 'react-router-dom'
import Logo from './logo-survi.png'
import Messages from '../../helpers/constants/errorMessages'
import { FETCH_TOKEN } from '../../state/accessToken/types'
import { connect } from 'react-redux'
import { Errors } from '../../state/errors/reducer'
import errorCodes from '../../helpers/constants/errorCodes'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

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
toast.configure()

const onEmailChange = (
  e: { target: { value: string } },
  setFieldValue: (field: string, value: any, shouldValidate: boolean) => void
) => {
  const emailFormatted = e.target.value.trim()
  setFieldValue('email', emailFormatted, false)
}

const LoginMail: React.FC<React.ComponentState> = props => {
  const [shown, setShown] = useState(false)
  const switchShown = () => setShown(!shown)
  const hasError = props.error.error.error

  const invalidError = () => {
    toast.error('Correo o email incorrectos', {
      position: 'top-center',
      autoClose: 3500
    })
  }
  const internalError = () => {
    toast.error('Error interno del servidor', {
      position: 'top-center',
      autoClose: 3500
    })
  }

  switch (hasError) {
    case errorCodes.INVALID_CREDENTIALS:
      invalidError()
      break
    case errorCodes.INTERNAL_ERROR:
      internalError()
      break
    default:
      break
  }

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
                onSubmit={(values, { setSubmitting }) => {
                  props.getToken(values)
                  setSubmitting(false)
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
                  isSubmitting,
                  setFieldValue
                }) => (
                  <Form method="POST" noValidate onSubmit={handleSubmit}>
                    <Form.Group controlId="formBasicEmail">
                      <Form.Label>
                        <strong>CORREO ELECTRÓNICO</strong>
                      </Form.Label>
                      <Form.Control
                        type="text"
                        name="email"
                        placeholder="Ingresa tu correo electrónico"
                        onChange={(e: any) => {
                          onEmailChange(e, setFieldValue)
                        }}
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
                        <Link
                          to="/recoverpassword"
                          className="text-decoration-none text-info"
                        >
                          ¿Olvidaste tu contraseña?
                        </Link>
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

const data = (state: Errors) => ({
  error: state.error
})

const actions = (dispatch: (arg0: { type: string; payload: any }) => any) => ({
  getToken: (credentials: any) => dispatch({ type: FETCH_TOKEN, payload: credentials })
})

export default connect(data, actions)(LoginMail)
