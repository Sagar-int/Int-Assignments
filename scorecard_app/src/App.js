import { useContext } from 'react';
import { Button, Form } from 'react-bootstrap';
import './App.css';
import { HomePage } from './components/homepage/HomePage';
import { DataContext } from './contexts/DataContext';
import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import { renderToString } from "react-dom/server";
import jsPDF from "jspdf";
import html2pdf from "html2pdf.js";
import { useSelector } from 'react-redux/es/exports';



function App() {

  const { handleEditButton, editFlag, } = useContext(DataContext);
  const { student_data } = useSelector((state) => state.AcademicReducer);


  const generatePDF = () => {
    const source = document.getElementById("homepageId");
    const fileName = student_data.roll_no ? `${student_data.roll_no}.pdf` : "xyz.pdf";
    var opt = {
      margin: 0.2,
      filename: fileName,
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 8 },
      jsPDF: { unit: 'in', format: 'A4', orientation: 'portrait' }
    };

    html2pdf().set(opt).from(source).save();
  };

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div className="App">
      <HomePage ref={componentRef} />

      <div className='save_btn' >
        {
          editFlag ?
            <Button
              variant="primary"
              size="sm"
              className="edit_logo"
              onClick={() => handleEditButton(false)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-save" viewBox="0 0 16 16">
                <path d="M2 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H9.5a1 1 0 0 0-1 1v7.293l2.646-2.647a.5.5 0 0 1 .708.708l-3.5 3.5a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L7.5 9.293V2a2 2 0 0 1 2-2H14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h2.5a.5.5 0 0 1 0 1H2z" />
              </svg>
              Save Changes
            </Button>

            :



            <div>

              <div className="footer-center">
                <Form.Text onClick={() => handleEditButton(true)} className="text-muted">
                  Click here to edit the Form *
                </Form.Text>
              </div>


              <div className='print_download_btn_div'>
                <Button variant="secondary" onClick={handlePrint}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-printer-fill" viewBox="0 0 16 16">
                    <path d="M5 1a2 2 0 0 0-2 2v1h10V3a2 2 0 0 0-2-2H5zm6 8H5a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1z" />
                    <path d="M0 7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-1v-2a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2H2a2 2 0 0 1-2-2V7zm2.5 1a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z" />
                  </svg>
                  Print
                </Button>

                <Button variant="secondary" onClick={generatePDF}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-file-earmark-arrow-down" viewBox="0 0 16 16">
                    <path d="M8.5 6.5a.5.5 0 0 0-1 0v3.793L6.354 9.146a.5.5 0 1 0-.708.708l2 2a.5.5 0 0 0 .708 0l2-2a.5.5 0 0 0-.708-.708L8.5 10.293V6.5z" />
                    <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5v2z" />
                  </svg>
                  Download
                </Button>
              </div>
            </div>


        }


      </div>

    </div>
  );
}




export default App;
