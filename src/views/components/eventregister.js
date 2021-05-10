import React from "react";
import {
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CForm,
  CFormGroup,
  CFormText,
  CTextarea,
  CInput,
  CInputFile,
  CLabel,
  CSelect,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";

const EventRegister = () => {
  return (
    <>
      <CCard>
        <CCardHeader>Event Registration Form</CCardHeader>
        <CCardBody>
          <CForm
            action=""
            method="post"
            encType="multipart/form-data"
            className="form-horizontal"
          >
            <CFormGroup row>
              <CCol md="3">
                <CLabel htmlFor="text-input">Event Name</CLabel>
              </CCol>
              <CCol xs="12" md="9">
                <CInput
                  id="text-input"
                  name="text-input"
                  placeholder="Event name"
                />
                <CFormText>Please be specific with event name</CFormText>
              </CCol>
            </CFormGroup>
            <CFormGroup row>
              <CCol md="3">
                <CLabel htmlFor="text-input">Club name</CLabel>
              </CCol>
              <CCol xs="12" md="9">
                <CInput
                  id="text-input"
                  name="text-input"
                  placeholder="Club name"
                />
                <CFormText>Please write exact club name</CFormText>
              </CCol>
            </CFormGroup>

            <CFormGroup row>
              <CCol md="3">
                <CLabel htmlFor="date-input">Start Date</CLabel>
              </CCol>
              <CCol xs="12" md="9">
                <CInput
                  type="date"
                  id="date-input"
                  name="date-input"
                  placeholder="start date"
                />
              </CCol>
            </CFormGroup>
            <CFormGroup row>
              <CCol md="3">
                <CLabel htmlFor="date-input">End Date</CLabel>
              </CCol>
              <CCol xs="12" md="9">
                <CInput
                  type="date"
                  id="date-input"
                  name="date-input"
                  placeholder="start date"
                />
              </CCol>
            </CFormGroup>
            <CFormGroup row>
              <CCol md="3">
                <CLabel htmlFor="textarea-input">Description</CLabel>
              </CCol>
              <CCol xs="12" md="9">
                <CTextarea
                  name="textarea-input"
                  id="textarea-input"
                  rows="9"
                  placeholder="Description..."
                />
              </CCol>
            </CFormGroup>
            <CFormGroup row>
              <CCol md="3">
                <CLabel htmlFor="select">Team Size Allowed</CLabel>
              </CCol>
              <CCol xs="12" md="9">
                <CSelect custom name="select" id="select">
                  <option value="0">Please select</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </CSelect>
              </CCol>
            </CFormGroup>
            <CFormGroup row>
              <CLabel col md="3" htmlFor="file-input">
                Poster
              </CLabel>
              <CCol xs="12" md="9">
                <CInputFile id="file-input" name="file-input" />
              </CCol>
            </CFormGroup>
          </CForm>
        </CCardBody>
        <CCardFooter>
          <CButton type="submit" size="sm" color="primary">
            <CIcon name="cil-scrubber" /> Submit
          </CButton>
          <CButton type="reset" size="sm" color="danger">
            <CIcon name="cil-ban" /> Reset
          </CButton>
        </CCardFooter>
      </CCard>
    </>
  );
};
export default EventRegister;
