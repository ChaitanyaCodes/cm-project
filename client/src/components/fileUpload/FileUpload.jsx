import React, { Fragment, useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';


const FileUpload = () => {
    const [file, setFile] = useState('');
    const [filename, setFilename] = useState('chose File');
    const [uploadedFile, setUploadedFile] = useState({});

    const onChange = e => {
        setFile(e.target.files[0]);
        setFilename(e.target.files[0].name);
    }

    const onSubmit = async e => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('file', file);

        try {
            const res = await axios.post('http://localhost:5000/auth/login', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })

            toast.success("file uploaded to the database.");
            
            const { fileName, filePath } = res.data;
            setUploadedFile({ fileName, filePath });
        } catch(err) {
            if(err.response.status == 500) {
                console.log("There was an error in connecting the server");
            } else {
                console.log(err.response.data.msg);
            }
        }
    }

    return (
        <Fragment> 
            <form onSubmit={onSubmit}>
                <div className="input-group mb-3 mt-4">
                    <input type="file" className="custom-file-input" id="customFile" onChange={onChange}/>
                    <label className="custom-file-label" htmlFor="customFile">
                        {filename}
                    </label>
                </div>
                <input type="submit" value="Upload" className="btn btn-primary btn-block mt-4" />
            </form>
            <ToastContainer />
        </Fragment>
            
        
    )
}

export default FileUpload;
