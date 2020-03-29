import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { Formik } from 'formik'
import * as yup from 'yup'
import {
  Container,
  Col,
  Navbar,
  Row,
  Image,
  Card,
  Form,
  Alert,
  Button,
  Spinner
} from 'react-bootstrap'
import {
  FETCH_FORGOT_PASSWORD,
  GET_FORGOT_PASSWORD_STATUS
} from '../../state/password/types'
import Logo from './../../images/logo-survi.png'
import ValidationMessages from '../../helpers/constants/validationMessages'
import { PASSWORD } from '../../config/constants'

const forgotPasswordSchema = yup.object().shape({
  email: yup
    .string()
    .email(ValidationMessages.email)
    .max(40, ValidationMessages.emailMax)
    .required(ValidationMessages.emailRequired),
})

const emailHandleChange = (
  e: { target: { value: string } },
  setFieldValue: (field: string, value: any, shouldValidate: boolean) => void
) => {
  const emailFormatted = e.target.value.trim()
  setFieldValue('email', emailFormatted, false)
}

const displayAlert = (emailStatus: number, resetEmailStatus: any) => {
  switch (emailStatus) {
    case PASSWORD.EMAIL_STATUS.SUCCESS:
      return (
        <Alert variant="success" onClose={()=> resetEmailStatus()} dismissible>
          <p className="mb-0">El enlace fue enviado con éxito</p>
        </Alert>
      )
    case PASSWORD.EMAIL_STATUS.ERROR:
      // TODO: error message by error code
      return (
        <Alert variant="danger" onClose={()=> resetEmailStatus()} dismissible>
          <p className="mb-0">Error al enviar el correo</p>
        </Alert>
      )
  }
}

const displayLoader = (emailStatus: number) => {
  if (emailStatus === PASSWORD.EMAIL_STATUS.WAITING) {
    return <Spinner className="ml-3" animation="border" size="sm" />
  }
}

const disableAutoComplete = () => <input type="email" name="email" style={{display: 'none'}} />

const RecoverPassword: React.FC<React.ComponentState> = props => {
  const { emailStatus, forgotPassword, resetEmailStatus } = props
  return (
    <Fragment>
      <Navbar bg="white" variant="light" className="shadow-sm">
        <Navbar.Brand>
          <Image src={Logo} width="160" height="24" />
        </Navbar.Brand>
      </Navbar>
      <Container>
        <Row className="mt-4">
          <Col sm="6" className="mx-auto">

            { displayAlert(emailStatus, resetEmailStatus) }

            <Card className="shadow-sm border-0">
              <Card.Body className="py-5">
                <Formik
                  initialValues={{ email: '' }}
                  validationSchema={forgotPasswordSchema}
                  onSubmit={values => {
                    forgotPassword(values.email)
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
                    setFieldValue
                  }) => (
                    <Form method="POST" autoComplete="off" noValidate onSubmit={handleSubmit}>
                      <Form.Row>
                        <Col sm="8" className="mx-auto">
                          <h5 className="text-center">Recupera tu contraseña</h5>
                          <p className="text-center mb-5">
                            Para recuperar tu contraseña, ingresa el correo electrónico
                            asociado a tu cuenta
                          </p>
                        </Col>
                      </Form.Row>
                      <Form.Row className="mb-4">
                        <Form.Group controlId="formBasicEmail" className="col-sm-8 mx-auto">
                          <Form.Label>Correo electrónico</Form.Label>
                          <Form.Control
                            type="text"
                            name="email"
                            autoComplete="off"
                            placeholder="Ingresa tu correo"
                            onChange={(e: any) => {
                              handleChange(e)
                              emailHandleChange(e, setFieldValue)
                            }}
                            onBlur={handleBlur}
                            value={values.email}
                            isValid={touched.email && !errors.email}
                            isInvalid={touched.email && (!!errors.email)}
                          />
                        </Form.Group>
                      </Form.Row>
                      <Form.Row>
                        <Col sm="8" className="col-sm-8 mx-auto">
                          <Button
                            variant="primary"
                            type="submit"
                            className="btn-block"
                            disabled={emailStatus === PASSWORD.EMAIL_STATUS.WAITING || !isValid}
                          >
                            Enviar enlace
                            { displayLoader(emailStatus) }
                          </Button>
                        </Col>
                      </Form.Row>
                      { disableAutoComplete() }
                    </Form>
                  )}
                </Formik>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  )
}

const stateToProps = (state: { password: { emailStatus: number }}) => ({
  emailStatus: state.password.emailStatus
})

const actions = (dispatch: (action: { type: string; payload: any }) => any) => ({
  forgotPassword: (email: string) => dispatch({
    type: FETCH_FORGOT_PASSWORD, payload: email
  }),
  resetEmailStatus: () => dispatch({
    type: GET_FORGOT_PASSWORD_STATUS, payload: PASSWORD.EMAIL_STATUS.NONE
  })
})

export default connect(stateToProps, actions)(RecoverPassword)
