import {
  Box,
  TextField,
  Grid,
  Card,
  CardContent,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
} from "@mui/material";
import { useState } from "react";
import { validateEmail } from "../utils";
import Modal from "./Modal";

const ReviewForm = () => {

    {/* modal state */}
    const [modalOpen, setModalOpen] = useState(false);
    const handleModalOpen = () => {
      setModalOpen(true);
    };
    const handleModalClose = () => {
      setModalOpen(false);
    };
    {/* movies data */}
  const infoMovieCard = [
    { id: 1, title: "Jhon Wick 4" },
    { id: 2, title: "Jhon Wick 4" },
    { id: 3, title: "Jhon Wick 4" },
    { id: 4, title: "Jhon Wick 4" },
  ];

     {/*form state */}
    const [formData, setFormData] = useState({
        movie:"",
        name: "",
        email: "",
        message:""
      });
      {/*errors state */}
      const [errors, setErrors] = useState({
        movie:"",
        name:"",
        email: "",
        message:""
      });

      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };


      {/* validation form */}
      const handleSubmit = (e) => {
        e.preventDefault();
        let errors = {};
        if (!formData.name.trim()) {
          errors.name = 'El nombre es requerido';
        }
        if (!formData.movie) {
            errors.movie = 'La pelicula es requerida';
          }
          if (formData.message.length < 10) {
            errors.message = 'Minimo 10 caracteres';
          }
        if (formData.email.length < 4) {
          errors.email = 'El email debe tener al menos 4 caracteres';
        } 
        else if (!validateEmail(formData.email)) {
            {/* validate email fn */}
          errors.email = 'Email inválido'; 
        }
        setErrors(errors);
        if (Object.keys(errors).length === 0) {
            handleModalOpen()
            setFormData(formData)     
        }
     
        
      };
      
    {/* clear form fields */}
    const clearFormFields = () => {

        setFormData({
            movie:"",
            name:"",
            email: "",
            message:""
          })
       
      }




  return (
    <section className=" xl:px-[4.3rem] bg-[#282828]  mx-auto h-screen  p-5 pt-20">
      {/* title section */}
      <h2 className=" p-5 md:pt-20 text-4xl font-bold text-white ">
        Reseña de peliculas
      </h2>
      <p className="pl-5 my-2 text-white text-xl">Deja tu opinion</p>

      <form onSubmit={handleSubmit} className=" max-w-[600px] mx-auto px-10">
        <Box my={2}>
          <Card sx={{ backgroundColor: "transparent", boxShadow:"none"}}>
            <CardContent >
              <Grid container direction="row" spacing={2}>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                  <FormControl sx={{ width: "100%" }}>
                    {/** SELECT MOVIE INPUT */}
                    <InputLabel style={{ color: "white" }}>
                      Seleccionar pelicula
                    </InputLabel>
                    <Select
                    value={formData.movie}
                    onChange={handleChange}
                      name="movie"
                      sx={{
                        "& .MuiOutlinedInput-notchedOutline": {
                          borderColor: "#554F95",
                        },
                        "&:hover .MuiOutlinedInput-notchedOutline": {
                          borderColor: "#554F95",
                        },
                        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                          borderColor: "#554F95",
                        },
                      }}
                      style={{ color: "white" }}
                      fullWidth
                      label="Seleccionar pelicula"
                    >
                      <MenuItem value={0}>Seleccione</MenuItem>
                      {infoMovieCard.map((movie, index) => (
                        <MenuItem key={index} value={movie.id}>
                          {movie.title}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                  {errors.movie && <p className="text-white">{errors.movie}</p>}
                </Grid>
                         {/** NAME INPUT */}
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                  <TextField
                    label="Nombre completo"
                    type="text"
                    InputLabelProps={{
                      style: { color: "white" },
                    }}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        "& fieldset": {
                          borderColor: "#554F95",
                        },
                        "&:hover fieldset": {
                          borderColor: "#554F95",
                        },
                        "&.Mui-focused fieldset": {
                          borderColor: "#554F95",
                        },
                      },
                    }}
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    margin="dense"
                    fullWidth
                    style={{ color: "white" }}
                    variant="outlined"
                    InputProps={{
                      style: { color: "white" },
                    }}
                  />
                    {errors.name && <p className="text-white">{errors.name}</p>}
                </Grid>
                 {/** EMAIL INPUT */}
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12} >
                  <TextField
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    margin="dense"
                    fullWidth
                    label="E-mail"
                    type="email"
                    InputLabelProps={{
                      style: { color: "white" },
                    }}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        "& fieldset": {
                          borderColor: "#554F95",
                        },
                        "&:hover fieldset": {
                          borderColor: "#554F95",
                        },
                        "&.Mui-focused fieldset": {
                          borderColor: "#554F95",
                        },
                      },
                    }}
                    variant="outlined"
                    InputProps={{
                      style: { color: "white" },
                    }}
                  />
                   {errors.email && <p className="text-white">{errors.email}</p>}
                </Grid>

                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                     {/** REVIEW MESSAGE INPUT */}
                  <TextField
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    margin="dense"
                    multiline
                    rows={7}
                    fullWidth
                    label="Reseña"
                    type="reseña"
                    InputLabelProps={{
                      style: { color: "white" },
                    }}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        "& fieldset": {
                          borderColor: "#554F95",
                        },
                        "&:hover fieldset": {
                          borderColor: "#554F95",
                        },
                        "&.Mui-focused fieldset": {
                          borderColor: "#554F95",
                        },
                      },
                    }}
                    variant="outlined"
                    InputProps={{
                      style: { color: "white" },
                    }}
                  />
                    {errors.message && <p className="text-white">{errors.message}</p>}
                </Grid>
                         {/** BUTTON SUBMIT & CLEAR  */}
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                  <Box sx={{ alignItems: "center" }}>

                        <div className=" flex flex-col sm:flex md:flex-row justify-evenly gap-6 items-center mt-5">
                            <button 
                            type="submit"
                            className=" font-bold text-xl text-white px-20 py-4 
                             rounded-lg outline-none border-2 border-[#554F95]">
                                Finalizar</button>
                            <button
                            onClick={() => clearFormFields()}
                            className=" font-bold text-xl text-gray-400">Reiniciar</button>
                        </div>

                   
                  </Box>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Box>
      </form>
      <Modal isOpen={modalOpen} clearFormFields={clearFormFields} onClose={handleModalClose} formData={formData} />
    </section>
  );
};

export default ReviewForm;
