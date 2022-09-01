import { useFormik } from 'formik';
import validationSchema from './validation';

function Signup() {

  const { handleSubmit, handleChange, handleBlur, values, errors, touched } = useFormik({
    initialValues: {
      // firstName: 'Cengiz',
      // lastName: 'Durmuş',
      email: '',
      password: '',
      passwordConfirm: ''
      // gender: 'male',
      // hobies: [],
      // country: "Turkey"
    },
    onSubmit: values => {
      console.log(values);
    },
    validationSchema,
  });

  return (
    <div>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        {/* <label htmlFor="firstName">First Name</label>
        <input name='firstName' value={values.firstName} onChange={handleChange}></input>

        <br />
        <br />

        <label htmlFor="lastName">Last Name</label>
        <input name='lastName' value={values.lastName} onChange={handleChange}></input>

        <br />
        <br /> */}

        <label htmlFor="email">Email</label>
        <input name='email' value={values.email} onChange={handleChange} onBlur={handleBlur}></input>

        {errors.email && touched.email && <div className='error' >{errors.email}</div>}

        <br />
        <br />

        <label>Password</label>
        <input name='password' value={values.password} onChange={handleChange} onBlur={handleBlur}></input>

        {errors.password && touched.password && <div className='error' >{errors.password}</div>}

        <br />
        <br />

        <label>Password Confirm</label>
        <input name='passwordConfirm' value={values.passwordConfirm} onChange={handleChange} onBlur={handleBlur}></input>

        {errors.passwordConfirm && touched.passwordConfirm && <div className='error' >{errors.passwordConfirm}</div>}

        {/* <span>Male</span>
        <input type="radio" name='gender' value="male" onChange={handleChange} checked={values.gender === "male"}></input>
        <span>Female</span>
        <input type="radio" name='gender' value="female" onChange={handleChange} checked={values.gender === "female"}></input>

        <br />
        <br />

        <div>
          Football
          <input type="checkbox" name='hobies' value="Football" onChange={handleChange} ></input>
        </div>

        <div>
          Cinema
          <input type="checkbox" name='hobies' value="Cinema" onChange={handleChange} ></input>
        </div>

        <div>
          Music
          <input type="checkbox" name='hobies' value="Music" onChange={handleChange} ></input>
        </div>

        <br />

        <select name="country" value={values.country} onChange={handleChange}>
          <option value="turkey">Turkey</option>
          <option value="england">England</option>
          <option value="usa">USA</option>
        </select> */}

        <br />
        <br />

        <button type="submit">Submit</button>

        <br />
        <br />
        {JSON.stringify(values)}
      </form>
    </div>
  )
}

export default Signup