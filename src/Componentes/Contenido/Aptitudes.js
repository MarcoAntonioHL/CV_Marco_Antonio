import React,{useEffect, useState} from "react";
import PropTypes from "prop-types";
import LinearProgress from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function LineaProgresolabel(props){
    return (
        <Box sx={{display:"flex",alignItems:"center"}}>
            <Box sx={{width:"100%",mr:1}}>
                <LinearProgress sx={{height:"15px",width:`${props.value}%`}} color="primary" variant="determinate"  ></LinearProgress>
            </Box>
            <Box sx={{minWidth: 35}}>
                <Typography sx={{color:"#ffb74d"}} variant="body2" color="text.secondary">
                    {`${Math.round(props.value)}%`}
                </Typography>
            </Box>
        </Box>

    )

}
function Funcionamiento(props){
    const [progress,setProgress]=useState(0);
    useEffect(()=>{
        const timer=setInterval(()=>{setProgress((marcador)=>(marcador>=props.valor? props.valor:marcador+1))},70) 
    },[]
    );
    return(
        <LineaProgresolabel value={progress}></LineaProgresolabel>
    );

}


function Aptitudes(){
    /*const [progress,setProgress]=useState(0);

    useEffect(()=>{
        const timer=setInterval(()=>{setProgress((marcador)=>(marcador>=100? 100:marcador+1 ))},90)
        
    },[]);*/
    

    return (
    <>
    <div className="contenedorAptitudes">
            <div id="aptitudes">
                <h2 className="titulo">APTITUDES e IDIOMAS</h2>
                <div className="letrasContenido">
                    <p>Microsoft excel<Funcionamiento valor={70}></Funcionamiento></p>
                    <p>Microsoft word<Funcionamiento valor={70}></Funcionamiento></p>
                    <p>PowerBI-Basico<Funcionamiento valor={50}></Funcionamiento></p>
                    <p>HTML<Funcionamiento valor={70}></Funcionamiento></p>
                    <p>CSS<Funcionamiento valor={60}></Funcionamiento></p>
                    <p>javaScript<Funcionamiento valor={50}></Funcionamiento></p>
                    <p>Python<Funcionamiento valor={60}></Funcionamiento></p>
                    <p>React<Funcionamiento valor={40}></Funcionamiento></p>
                    <p>Angular<Funcionamiento valor={20}></Funcionamiento></p>
                    <p>sqlServer<Funcionamiento valor={40}></Funcionamiento></p>
                    <p>Django<Funcionamiento valor={40}></Funcionamiento></p>
                    <h3>IDIOMAS</h3>
                    <p>Español-Lengua materna</p>
                    <p>Ingles-Intermedio</p>
                </div>
            </div>
        </div>
    </>
    )
}
export default Aptitudes;