/* eslint-disable react/prop-types */
import './ModalImage.css'

export default function ModalImage({ title, dialog = false, closeDialog, imgSrc = 'https://doji.vn/wp-content/uploads/2022/12/banner_1440x690-copy-scaled.jpg' }) {

  return (
    <div className="container">
      {dialog && (
        <div className="dialog">
          <div className="dialog-content">
            <h3 style={{fontWeight: 200}}>{title}</h3>
            <button className="close-icon" onClick={() => closeDialog()}>&#10005;</button>
            <img className="popup-image" src={imgSrc} alt="Popup Image" />
          </div>
        </div>
      )}
    </div>
  );
}
