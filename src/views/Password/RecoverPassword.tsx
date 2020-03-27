import React, { Fragment } from 'react'
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
  Button
} from 'react-bootstrap'
import Logo from './../../images/logo-survi.png'
import ValidationMessages from '../../helpers/constants/validationMessages'

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

const displayAlert = (status: boolean) => {
  if (status) {
    return (
    <Alert variant="success" dismissible>
      <p className="mb-0">El enlace fue enviado con éxito</p>
    </Alert>
    )
  }
}

const disableAutoComplete = () => <input type="email" name="email" style={{display: 'none'}} />

const RecoverPassword = () => {
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

            { displayAlert(true) }

            <Card className="shadow-sm border-0">
              <Card.Body className="py-5">
                <Formik
                  initialValues={{ email: '' }}
                  validationSchema={forgotPasswordSchema}
                  onSubmit={(values, { setSubmitting }) => {
                    // TODO: dispatch forgot password
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
                            disabled={isSubmitting || !isValid}
                          >
                            Enviar enlace
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

export default RecoverPassword
