/* eslint-disable react/prop-types */

export default function CompanyInfo({title, img, text1, text2, text3, isRevertCol = false}) {
  return (
    <div className='margin-top-90'>
      <div className='company-info'>
        <div className={isRevertCol ? "company-info-container  row-reverse" : "company-info-container "}>
          <div className='company-info-img'>
            <div style={{"background-image": `url('${img}')`}} className='scale-img'></div>
          </div>
          <div>
            <div>
              <h1>{title}</h1>
            </div>
            <span className='line'></span>
            <div className='company-info-content'>
              {text1} <br />
              <br />
              {text2}
              <br />
              <br />
              {text3}

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
