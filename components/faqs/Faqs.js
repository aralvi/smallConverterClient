import React, { useState } from "react";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
  UncontrolledAccordion,
} from "reactstrap";
import styles from "../accordian/Accordian.module.css";

export const Faqs = () => {
  return (
    <>
      <h2
        style={{ textAlign: "center", fontWeight: "bold" }}
        className="font-weight-bold"
      >
        Frequently Asked Questions
      </h2>
      <UncontrolledAccordion defaultOpen={["3"]} stayOpen>
        <AccordionItem className="m-4 border">
          <AccordionHeader className={styles.AccordianHeader} targetId="1">
            How to change JPG to PDF for free?
          </AccordionHeader>
          <AccordionBody className={styles.AccordianBodyBg} accordionId="1">
            <strong>This is the first item&apos;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&apos;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem className="m-4 border">
          <AccordionHeader targetId="2">
            How to convert PDF to Word on Mac?
          </AccordionHeader>
          <AccordionBody className={styles.AccordianBodyBg} accordionId="2">
            <strong>This is the second item&apos;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&apos;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem className="m-4 border">
          <AccordionHeader targetId="3">
            How to edit a PDF in word?
          </AccordionHeader>
          <AccordionBody className={styles.AccordianBodyBg} accordionId="3">
            <p>
              You can convert PDF to editable Word files by first using our
              online Word converter. Our tool extracts the text within the PDF
              file using the latest OCR technology. Once the conversion is
              finished, you can edit the file in Microsoft Word on your device.
            </p>
          </AccordionBody>
        </AccordionItem>
      </UncontrolledAccordion>
    </>
  );
};
