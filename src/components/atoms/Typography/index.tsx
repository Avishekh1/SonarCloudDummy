import React from 'react'
import {Typography as Typo} from '@mui/material'
import { styled } from '@mui/material/styles'

interface TextProps 
{
    text:string,
    fontWeight:string,
    fontSize:string,
    color:string,
    lineHeight:string,
    variant:"h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "subtitle1" | "subtitle2" | "body1" | "body2" | "caption" | "button" | "overline" | "inherit" | undefined


}
const Typography = ({...props}:TextProps) => {
     
    const {text,fontWeight,fontSize,color,lineHeight,variant}=props
    const Title = styled(Typo)({
       fontFamily: 'Gilroy,sans-serif',
       fontStyle: 'normal',
       fontWeight:`${fontWeight}`,
       color:`${color}`,
       fontSize:`${fontSize}`,
       display:'flex',
       justifyContent:'center',
       alignItems:'center',
       variant:`${variant}`,
       lineHeight:`${lineHeight}`




    })
  return (
    <Title variant={variant}>{text}</Title>
  )
}

export default Typography
