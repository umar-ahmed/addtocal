import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Formik } from "formik";
import * as Yup from "yup";
import { format } from "date-fns";

import Container from "@material-ui/core/Container";

import App from "./components/App";
import AppHeader from "./components/AppHeader";
import AddToCalendarForm from "./components/AddToCalendarForm";
import ResultCard from "./components/ResultCard";

function Root() {
  const [results, setResults] = useState(null);

  const values = {
    title: "",
    description: "",
    start: Date.now(),
    end: Date.now(),
    location: ""
  };

  function handleSubmit(values) {
    const { title, description, start, end, location } = values;

    const startGoogle = format(new Date(start), "yyyyMMdd'T'hhmmss");
    const endGoogle = format(new Date(end), "yyyyMMdd'T'hhmmss");
    const google = encodeURI(
      `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${startGoogle}/${endGoogle}&details=${description}&location=${location}`
    );

    const startOutlook = format(new Date(end), "yyyy-MM-dd'T'hh:mm:ss");
    const endOutlook = format(new Date(end), "yyyy-MM-dd'T'hh:mm:ss");
    const outlook = encodeURI(
      `https://outlook.live.com/calendar/0/deeplink/compose?path=/calendar/action/compose&rru=addevent&startdt=${startOutlook}&enddt=${endOutlook}&subject=${title}&body=${description}&location=${location}`
    );

    setResults({ google, outlook });
  }

  const schema = Yup.object().shape({
    title: Yup.string().required(),
    description: Yup.string(),
    // start: Yup.date().required(),
    // end: Yup.date().required(),
    location: Yup.string()
  });

  return (
    <App>
      <AppHeader />
      <Container maxWidth="md">
        <Formik
          initialValues={values}
          onSubmit={handleSubmit}
          validationSchema={schema}
        >
          {props => <AddToCalendarForm {...props} />}
        </Formik>
        {results && <ResultCard results={results} />}
      </Container>
    </App>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  rootElement
);
