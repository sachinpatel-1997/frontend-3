import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import useFetch from "./fetch"; 

function EditForm() {  
    const { id } = useParams();
    const { contestant: form, error, isPending } = 
    useFetch("http://localhost:5000/dashboard/form_single/" + 
    id);
    
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [fileName, setFileName] = useState('');

    useEffect(() => {
        setName(form.full_name);
        setAddress(form.home_address);
    }, [form])
    
        const editForm = async (id) => {
          try { 
            const formData = new FormData();
            formData.append("name", name);
            formData.append( "home_address", address);
            formData.append("image", fileName);

            const myHeaders = new Headers();
            myHeaders.append("jwtToken", localStorage.jwtToken);
      
            await 
fetch(`http://localhost:5000/dashboard/form_update/${id}`, {
              method: "PUT",
              headers: myHeaders,
              body: formData,
            });

          } catch (err) {
            console.error(err.message);
          }
        };

        const onChangeFile = e => {
          setFileName(e.target.files[0]);
        }

    return (
        <div>
            { isPending && <div>Loading...</div> }
            { error && <div>{ error }</div> }
            <form encType="multipart/form-data" 
             onSubmit={() => editForm(form.form_id)}>
                 <input
                  type="text"
                  className="form-control"
                  value={name || ''}
                 onChange={e => setName(e.target.value)}
                 />
                  <input
                  type="text"
                  className="form-control"
                  value={address || ''}
                  onChange={e => setAddress(e.target.value)}
                  />
                   <input
                   type="file"
                   id="update"
                   name="image"
                   onChange={onChangeFile}
                   />
                    <button type ="submit" >Save</button>
                    </form>
                    <div>
                      <img 
                      alt="contestant" 
          src= {`http://localhost:5000/upload/${form.passport}`} 
          className="rounded-circle" style={{width: "100px", 
           height: "100px"}}/>
        </div>
      </div>
    );
}

export default EditForm;