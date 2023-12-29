import React from "react";
import { Button, Grid, TextField } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { range } from "lodash";

export default function App() {
  const { control, handleSubmit } = useForm();

  return (
    <form onSubmit={handleSubmit((data) => console.log(data))}>
      <Grid container direction="column" spacing={1}>
        {range(10).map((v) => (
          <Grid item key={v}>
            <Controller
              control={control}
              name={`${v}`}
              render={({ field }) => <TextField label={v} {...field} />}
            />
          </Grid>
        ))}
      </Grid>
      <Button type="submit">Submit</Button>
    </form>
  );
}
