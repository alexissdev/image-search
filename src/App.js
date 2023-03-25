import { useState } from "react";
import { Formik, Form, Field } from "formik";

import "./App.css";
import jsonConfig from "./config/config.json";
import Container from "./components/container/Container";
import Article from "./components/article/Article";
import Footer from "./components/footer/Footer";

const App = () => {
  const [photos, setPhotos] = useState([]);

  return (
    <div>
      <header>
        <Formik
          initialValues={{ serach: "" }}
          onSubmit={async (values) => {
            const response = await fetch(
              `https://api.unsplash.com/search/photos?per_page=20&query=${values.search}`,
              {
                headers: {
                  Authorization: `Client-ID ${jsonConfig["client-id"]}`,
                },
              }
            );

            const data = await response.json();
            setPhotos(data.results);
          }}
        >
          <Form>
            <Field name="search" />
          </Form>
        </Formik>
      </header>
      <Container>
        {photos && photos.map((photo) => <Article photo={photo} />)}
      </Container>

      <Footer />
    </div>
  );
};

export default App;
