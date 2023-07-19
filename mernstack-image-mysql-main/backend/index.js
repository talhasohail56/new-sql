import express from "express";
import FileUpload from "express-fileupload";
import cors from "cors";
// import morgan from "morgan";
import ProductRoute from "./routes/ProductRoute.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(FileUpload());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
// app.use(morgan("combined"));
app.use(ProductRoute);

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  });
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
