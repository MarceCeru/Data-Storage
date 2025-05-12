import logo from '../assets/imagenes/logo.svg'
import document from '../assets/imagenes/icon-document.svg'
import folder from '../assets/imagenes/icon-folder.svg'
import upload from '../assets/imagenes/icon-upload.svg'
import './Section-one.css'

export const SectionOne = () => {
    return (
        <div className="section-one">
            <img src={logo} alt="" />
            <div className="section-one__icons">
                <div className='icon-conainer'><img src={document} alt="document-image" /></div>
                <div className='icon-conainer'><img src={folder} alt="folder-image" /></div>
                <div className='icon-conainer'><img src={upload} alt="upload-image" /></div>
            </div>
        </div>
    )

}