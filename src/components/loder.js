import React from 'react'
import styled from 'styled-components'




function Loder() {
    const Loder = styled.section`
width: 100%;
height:100vh;
background-color:#F4F5F8;
display: flex;
align-items: center;
justify-content:center;
`
const Container = styled.div`
width: 300px;
height : 300px ;
background-color:transparent;
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
flex-wrap: wrap;
animation: cercle 1s  infinite ;
@keyframes cercle {
    0%{
        transform: rotate(45deg);
        width: 50px;
    }
    50%{
        transform: rotate(180deg);
        width: 150px;
    }
    100%{
        transform: rotate(360deg);
        width: 50px;
    }
    
}
`
const Square = styled.div`
width: 25px;
height : 25px ;
background-color:#2680C0;
border-radius: 100%;
transition: 0.3s linear;
transform: rotate(180deg);
`
  return (
    <Loder>
    <Container>
    <Square />
    <Square />
    </Container>
    
    </Loder>
  )
}

export default Loder