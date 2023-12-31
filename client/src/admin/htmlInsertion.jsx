import { Box, Button, InputLabel, TextField, Typography } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const HtmlInsertion = () => {
    const navigate = useNavigate();
  const [input, setInput] = useState({
    title: "",
  });
  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
        const {data} = axios.post('http://localhost:8080/api/v1/content/create-content',{
            title:input.title,
            description:[],
        });
        if(data?.success){
            localStorage.setItem("contId",data.content._id)
            alert('CContent Created');
            navigate('/htmldes');
            
        }

    } catch (error) {
        console.log(error);
        
    }
    
  };

  const HandleChange = (e) => {
    setInput((prevstate) => ({
      ...prevstate,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <form onSubmit={handleSubmit}>
      <Box
        width={"50%"}
        border={3}
        borderRadius={10}
        padding={3}
        margin={"auto"}
        boxShadow={"10px 10px 20px #ccc"}
        display={"flex"}
        flexDirection={"column"}
        marginTop={"30px"}
      >
        <Typography
          variant="h2"
          textAlign={"center"}
          fontWeight={"bold"}
          padding={3}
          color={"gray"}
        >
          Create A html
          </Typography>
          <InputLabel
            sx={{ mb: 1, mt: 2, fontSize: "24px", fontWeight: "bold" }}
          >
            Title
          </InputLabel>
          <TextField
            name="title"
            value={input.title}
            onChange={HandleChange}
            margin="normal"
            variant="outlined"
            required
          />
          <Button type="submit" color="primary" variant="contained">Submit</Button>
        
      </Box>
    </form>
  )
}

export default HtmlInsertion