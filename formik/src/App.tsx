import React from "react";
import { Button, Grid, TextField } from "@mui/material";
import { FastField, FieldInputProps, Formik } from "formik";
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
              <FastField name={`f${v}`}>
                {({ field }: { field: FieldInputProps<`f${typeof v}`> }) => (
                  <TextField label={v} {...field} />
                )}
              </FastField>
            </Grid>
          ))}
        </Grid>
        <Button type="submit">Submit</Button>
      </form>
    )}
  </Formik>
);

export default Basic;
