import {useState} from 'react'
import { useHistory } from 'react-router-dom';
import validate from './validateInfo';

function useForm() {
    const history = useHistory();
    const [values,setValues] = useState({
        last_name: '',
        first_name: '',
        email: '',
        phone: '',
        ville : '',
        adresse : '',
        password: '',
        password2: ''

    });
    const [errors,setErrors]=useState({});
    var errors_1={
    last_name: '',
    first_name: '',
    email: '',
    phone: '',
    ville : '',
    adresse : '',
    password: '',
    password2: ''
};

   let isSubmitting=false;

    const handleChange = (e) => {
        const {name,value} = e.target;
        setValues({
            ...values,
            [name]: value
        });

    }
    
    
    const  add_user = (e) => {
        e.preventDefault();
         errors_1=validate(values);
         setErrors(validate(values));
        if(Object.keys(errors_1).length===0){
        fetch('http://localhost:8000/users/register/',{
            'method' : 'POST',
            "headers" : {
              "Content-type" :"text/xml; charset=utf-8",
             // "X-CSRFToken" :csrftoken 
            },
            "body":`<user id="1"><firstName>${values.first_name}</firstName><lastName>${values.last_name}</lastName><phone>${values.phone}</phone><email>${values.email}</email><ville>${values.ville}</ville><adresse>${values.adresse}</adresse><password>${values.password}</password></user>`
        })
        .then(response=>
           response.text())
        .then(data=>{
            
          if(data===""){
              isSubmitting=true;
        if(isSubmitting===true){ 
           
            history.push('/Register')
        }   
          }else{
            setErrors({
                ...errors,
                ['email'] : 'email already exist'
            })
                
           
           
          }
        });}
    }
    

    return (
       {handleChange,values,add_user,errors}
    )
}

export default useForm
