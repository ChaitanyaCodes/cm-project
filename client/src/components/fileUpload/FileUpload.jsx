import React, { Fragment, useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import {
    CAlert
} from '@coreui/react'


const FileUpload = () => {
    const [file, setFile] = useState('');
    const [filename, setFilename] = useState('chose File');
    const [uploadedFile, setUploadedFile] = useState({});

    const onChange = e => {
        setFile(e.target.files[0]);
        setFilename(e.target.files[0].name);
    };

    const onSubmit = async e => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('file', file);

        try {
            console.log("before upload");
            const res = await axios.post('/upload/csv', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            await console.log("after upload");
            await console.log(res);

            toast.success("file uploaded to the database.");
            // const { fileName, filePath } = res.data;
            // setUploadedFile({ fileName, filePath });
        } catch(err) {
            console.log(err.response.data.msg);
            if(err.response.status == 400) {
                toast.error(err.response.data.msg);
            } else if(err.response.status == 500) {
                toast.error(err.response.data.msg);
            }else if(err.response.status == 409){
                console.log(err.response.data.msg);
                toast.error(err.response.data.msg);
            } else {
                console.log(err);
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
            <br/>
            <CAlert color="success">
                <h4 className="alert-heading">Upload guide</h4>
                <p>
                    The upload file should be compulsorily in <strong>CSV</strong> format.
                </p>
                <hr />
                <p className="mb-0">
                    Make sure the Google form was duplicated from <a href="https://docs.google.com/forms/d/1e93ROsaOGYcctQRh1AZMN2RMNpWkHlq0gWLGGyVy7pQ/edit" target={"_blank"}>here</a>.
                </p>
                <hr />
                <p className="mb-0">
                    For proper guide on creating an <strong>FORM</strong> follow the <a href="https://codeaddicts.bit.ai/docs/view/UmDoUMwc9K5zxDqx" target={"_blank"}>Documentation</a>.
                </p>
            </CAlert>
            <ToastContainer />
        </Fragment>
            
        
    )
}

export default FileUpload;
