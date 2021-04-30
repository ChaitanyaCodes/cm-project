import React from 'react';
import FileUpload from '../../../components/fileUpload/FileUpload';
const UploadCsv = () => {
    return(
        <div>
            <h4 className="display-6 text-center mt-1 mb-4" >
            <i className="fas fa-file-upload"/> Upload Student Response
            </h4>
            <FileUpload/>
        </div>
    )
}

export default UploadCsv;