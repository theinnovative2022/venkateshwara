import React from 'react'
import { TextField,Button} from '@mui/material'
import { useRef,useState } from 'react'

export default function ContactForm() {
    const formRef=useRef();
    const mobileRegex=/((\+*)((0[ -]*)*|((91 )*))((\d{12})+|(\d{10})+))|\d{5}([- ]*)\d{6}/
    
    const handleFormSubmit=(event)=>{
        event.preventDefault();
        alert("Message is sent!")
        formRef.current.reset();
    }
    
    const handlePhoneChange=(event)=>{
        const value=event.target.value;
        if(!mobileRegex.test(value) && value.length>0){
            setPhoneError(true);
        }
        else{
            setPhoneError(false);
        }
    }
    const [phoneError, setPhoneError] = useState(false);
    
    return (
    <>
        <form onSubmit={handleFormSubmit} ref={formRef}>
            <TextField name="name" margin='normal' type="text" placeholder='Lorem Ipsum' variant='outlined' label="Full Name" fullWidth required></TextField>
            <TextField name="mail" margin='normal' type="email" placeholder='loremipsum@abc.com' variant='outlined' label="Email" fullWidth required></TextField>
            <TextField error={phoneError} onChange={handlePhoneChange} name="mobileNo" margin='normal' type="number" placeholder='+91 9876543210' variant='outlined' label="Contact No"  fullWidth required></TextField>
            <TextField name="message" margin='normal' type="text" placeholder='Your meesage' variant='outlined' label="Message" minRows={4} multiline fullWidth required></TextField>
            <Button type="submit" className='px-3 my-2' variant='contained'>Send Message</Button>   
        </form> 
    </>
  )
}
