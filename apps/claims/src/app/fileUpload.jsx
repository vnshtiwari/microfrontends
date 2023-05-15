import '../styles/claims.scss';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import '../styles/fileupload.scss'


export function FileUpload({heading}) {
  return (
    <div className="uploadContainer">
      <div className='fileUploadHeading'>
      {heading}
      </div>
     <Button className='mt-10' variant="contained" sx={{marginTop:"10px" , background:"darkgrey"}} component="label">
        Upload File
        <input type="file" hidden />
      </Button>
    </div>
  );
}

export default FileUpload;
