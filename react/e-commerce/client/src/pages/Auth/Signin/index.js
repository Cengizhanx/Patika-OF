import React from 'react'
import { Flex, Box, Heading, FormControl, FormLabel, Input, Button } from "@chakra-ui/react";
import { useFormik } from "formik";
import { userLogin } from '../../../firebase';
import { useAuth } from "../../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { Toaster } from 'react-hot-toast';
import validationSchema from './validations'

function Signin() {

  const { login } = useAuth();
  const navigate = useNavigate()

  const formik = useFormik({
    initialValues: {
      email: "",
      password: ""
    },
    onSubmit: async (values) => {
      const user = await userLogin(values.email, values.password)

      if (user) {
        login(user)
        navigate('/', {
          replace: true
        })
        console.log(user);
      }
      else return

    },
    validationSchema,

  })
  return (
    <div>
      <Flex align="center" width="full" justifyContent="center">
        <Box pt="10">

          <Box textAlign="center">
            <Heading>Sign In</Heading>
          </Box>

          <Box my="5" textAlign="left">

            <form onSubmit={formik.handleSubmit}>

              <FormControl>
                <FormLabel>E-mail</FormLabel>
                <Input name='email' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} isInvalid={formik.touched.email && formik.errors.email} />
              </FormControl>

              <FormControl mt="4">
                <FormLabel>Password</FormLabel>
                <Input name='password' type="password" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.password} isInvalid={formik.touched.password && formik.errors.password} />
              </FormControl>

              <Button mt="4" width="full" type='submit'>
                Sign In
              </Button>

              <Toaster position="top-right"></Toaster>
            </form>

          </Box>

        </Box>
      </Flex>
    </div>
  )
}

export default Signin