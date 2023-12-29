import React from "react";
import { Button, Grid, TextField as MuiTextField } from "@mui/material";
import { Formik } from "formik";
import { range } from "lodash";

const initialValues = {
  f0: "",
  f1: "",
  f2: "",
  f3: "",
  f4: "",
  f5: "",
  f6: "",
  f7: "",
  f8: "",
  f9: "",
};

const TextField = React.memo(MuiTextField);

const Basic = () => (
  <Formik
    initialValues={initialValues}
    onSubmit={(values) => console.log(values)}
  >
    {({ values, handleChange, handleSubmit }) => (
      <form onSubmit={handleSubmit}>
        <Grid container direction="column" spacing={1}>
          {range(10).map((v) => (
            <Grid item key={v}>
              <TextField
                label={v}
                name={`f${v}`}
                value={values[`f${v}` as keyof typeof initialValues]}
                onChange={handleChange}
              />
            </Grid>
          ))}
        </Grid>
        <Button type="submit">Submit</Button>
      </form>
    )}
  </Formik>
);

export default Basic;
