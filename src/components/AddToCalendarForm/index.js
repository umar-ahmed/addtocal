import "date-fns";
import { Form, Field } from "formik";
import React from "react";
import DateFnsUtils from "@date-io/date-fns";

import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker
} from "@material-ui/pickers";

import { Container, FormActions } from "./AddToCalendarForm.styles";

const DatePickerField = ({ field, form, ...other }) => {
  const currentError = form.errors[field.name];

  return (
    <KeyboardDatePicker
      clearable
      disablePast
      fullWidth
      name={field.name}
      value={field.value}
      format="dd/MM/yyyy"
      margin="normal"
      inputVariant="outlined"
      helperText={currentError}
      error={Boolean(currentError)}
      KeyboardButtonProps={{
        "aria-label": "change date"
      }}
      onError={error => {
        // handle as a side effect
        if (error !== currentError) {
          form.setFieldError(field.name, error);
        }
      }}
      // if you are using custom validation schema you probably want to pass `true` as third argument
      onChange={date => form.setFieldValue(field.name, date, false)}
      {...other}
    />
  );
};

const TimePickerField = ({ field, form, ...other }) => {
  const currentError = form.errors[field.name];

  return (
    <KeyboardTimePicker
      clearable
      disablePast
      fullWidth
      name={field.name}
      value={field.value}
      margin="normal"
      inputVariant="outlined"
      helperText={currentError}
      error={Boolean(currentError)}
      KeyboardButtonProps={{
        "aria-label": "change date"
      }}
      onError={error => {
        // handle as a side effect
        if (error !== currentError) {
          form.setFieldError(field.name, error);
        }
      }}
      // if you are using custom validation schema you probably want to pass `true` as third argument
      onChange={date => form.setFieldValue(field.name, date, false)}
      {...other}
    />
  );
};

export default function AddToCalendarForm({
  errors,
  handleChange,
  resetForm,
  values: { title, description, start, end, location }
}) {
  const commonProps = {
    fullWidth: true,
    onChange: handleChange,
    margin: "normal",
    variant: "outlined"
  };

  function handleFormClearClick() {
    resetForm();
  }

  return (
    <Container>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Form>
          <TextField
            error={errors.title}
            helperText={errors.title}
            label="Title"
            name="title"
            value={title}
            {...commonProps}
          />
          <TextField
            multiline
            rows={4}
            error={errors.description}
            helperText={errors.description}
            label="Description"
            name="description"
            value={description}
            {...commonProps}
          />

          <Box display="flex" container justify="space-around">
            <Box flexGrow={1} mr={2}>
              <Field
                name="start"
                label="Start Date"
                component={DatePickerField}
              />
            </Box>
            <Box flexGrow={1}>
              <Field
                name="start"
                label="Start Time"
                component={TimePickerField}
              />
            </Box>
          </Box>

          <Box display="flex" container justify="space-around">
            <Box flexGrow={1} mr={2}>
              <Field name="end" label="End Date" component={DatePickerField} />
            </Box>
            <Box flexGrow={1}>
              <Field name="end" label="End Time" component={TimePickerField} />
            </Box>
          </Box>

          <TextField
            error={errors.location}
            helperText={errors.location}
            label="Location"
            name="location"
            value={location}
            {...commonProps}
          />
          <FormActions>
            <Button onClick={handleFormClearClick}>Clear Form</Button>
            <Button color="primary" type="submit" variant="contained">
              Generate Links
            </Button>
          </FormActions>
        </Form>
      </MuiPickersUtilsProvider>
    </Container>
  );
}
