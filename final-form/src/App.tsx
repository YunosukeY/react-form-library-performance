import React from "react";
import { Button, Grid, TextField } from "@mui/material";
import { Form, Field } from "react-final-form";
import { range } from "lodash";

const MyForm = () => (
  <Form
    onSubmit={(values) => console.log(values)}
    render={({ handleSubmit }) => (
      <form onSubmit={handleSubmit}>
        <Grid container direction="column" spacing={1}>
          {range(10).map((v) => (
            <Grid item key={v}>
              <Field name={`f${v}`}>
                {({ input }) => <TextField label={v} {...input} />}
              </Field>
            </Grid>
          ))}
        </Grid>
        <Button type="submit">Submit</Button>
      </form>
    )}
  />
);

export default MyForm;
