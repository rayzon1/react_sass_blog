import React, { createRef, useEffect } from "react";

export default function Popup({ education, popupClickState, setPopupClickState }) {
  const closePopupRef = createRef();
  const closeElement = createRef();

  const closePopup = () => {
    closePopupRef.current.click(); 
    setPopupClickState(null);
    closeElement.current.style.visibility = 'hidden';
  }

  useEffect(() => {
    if (popupClickState !== null) {
      closeElement.current.style.visibility = 'visible';
    }
  }, [popupClickState])

  const PopupComponent = ({ data }) => {
    return (
      <>
      <div className="close" ref={closeElement}/>
      <div className="popup" id="popup" onClick={() => closePopup()}>
        <div className="popup__content">
          {/* <div className="popup__left" />
        <img src="img/nat-8.jpg" alt="Tour Photo" className="popup__img" />
        <img src="img/nat-9.jpg" alt="Tour Photo" className="popup__img" />
      </div> */}
          <div className="popup__right">
            <a href="#section-education" className="popup__close" ref={closePopupRef}>
              &times;
            </a>
            <h2 className="u-margin-bottom-small">{data.caption}</h2>
            <h3 className=" u-margin-bottom-small">{data.descriptionSub}</h3>
            <p className="popup__text">{data.descriptionMain}</p>
            {/* <a href="#" className="btn btn--green">
          Book now
        </a> */}
          </div>
        </div>
      </div>
      </>
    );
  };

  return (
    <>
      {education.map(data => {
        if (data.id === popupClickState) {
          return <PopupComponent data={data} />;
        }
      })}
    </>
  );
}
