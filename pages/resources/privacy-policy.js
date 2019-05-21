import Layout from "../../components/Layout";
import Meta from "../../components/Meta";
import Slogan from "../../components/Slogan";

// import "../../styles/style.scss";

// import patientForm from '../forms/Fichman-Eye-Center-Patient-Information-2016.pdf'

import {
  Grid,
  Row,
  Col,
  Jumbotron,
  Image,
  ListGroup,
  ListGroupItem
} from "react-bootstrap";

const PrivacyPolicy = () => (
  <Layout>
    <Meta
      title={`Fichman Eye Center | Costs & Fees`}
      description={`About page for Fichman Costs & Fees`}
    />

    {/* <Jumbotron
      style={{
        backgroundImage: `linear-gradient(0deg,rgba(96, 176, 244,0.5),rgba(96, 176, 244,0.5)), url(../static/images/adult-career-clipboard-1919236.jpg)`,
        backgroundRepeat: "no-repeat"
      }}
    >
      <div className="jumbotron-container">
        <h1 className="jumbotron-header-center">Costs & Fees</h1>
      </div>
    </Jumbotron> */}

    <Grid className="content-container">
      <Row className="text-section">
        <Col>
          <h1 className="text-section-header">Privacy Policy</h1>
          <h3 className="list-header">Notice of Privacy Practices</h3>
          <p className="text-section-paragraph">
            As Required by the Privacy Regulations Created as a Result of the
            Health Insurance Portability and Accountability Act of 1996 (HIPAA)
          </p>
          <p className="text-section-paragraph">
            THIS NOTICE DESCRIBES HOW HEALTH INFORMATION ABOUT YOU (AS A PATIENT
            OF THIS PRACTICE) MAY BE USED AND DISCLOSED, AND HOW YOU CAN GET
            ACCESS TO YOUR INDIVIDUALLY IDENTIFIABLE HEALTH INFORMATION
          </p>
          <h3 className="list-header">PLEASE REVIEW THIS NOTICE CAREFULLY.</h3>
          <h3 className="list-header">A. OUR COMMITMENT TO YOUR PRIVACY</h3>
          <p className="text-section-paragraph">
            Our practice is dedicated to maintaining the privacy of your
            individually identifiable health information (IIHI). In conducting
            our business, we will create records regarding you and the treatment
            and services we provide to you. We are required by law to maintain
            the confidentiality of health information that identifies you. We
            also are required by law to provide you with this notice of our
            legal duties and the privacy practices that we maintain in our
            practice concerning your IIHI. By federal and state law, we must
            follow the terms of the notice of privacy practices that we have in
            effect at the time.
          </p>
          <p className="text-section-paragraph">
            We realize that these laws are complicated, but we must provide you
            with the following important information:
          </p>

          <ul className="list-group">
            <li className="list-item">
              &rarr; How we may use and disclose your IIHI
            </li>
            <li className="list-item">
              &rarr; Your privacy rights in your IIHI
            </li>
            <li className="list-item">
              &rarr; Our obligations concerning the use and disclosure of your
              IIHI
            </li>
          </ul>

          <h3 className="list-header">
            B. IF YOU HAVE QUESTIONS ABOUT THIS NOTICE, PLEASE CONTACT:
          </h3>
          <p className="text-section-paragraph">
            OFFICE MANAGER, 178 Hartford Road, Manchester, CT, 06040, Telephone
            860-649-9973
          </p>

          <h3 className="list-header">
            C. WE MAY USE AND DISCLOSE YOUR INDIVIDUALLY IDENTIFIABLE HEALTH
            INFORMATION (IIHI) IN THE FOLLOWING WAYS
          </h3>
          <p className="text-section-paragraph">
            The following categories describe the different ways in which we may
            use and disclose your IIHI.
          </p>

          <p className="text-section-paragraph">
            <strong>1. Treatment.</strong> Our practice may use your IIHI to
            treat you. For example, we may ask you to have laboratory tests
            (such as blood or urine tests), and we may use the results to help
            us reach a diagnosis. We might use your IIHI in order to write a
            prescription for you, or we might disclose your IIHI to a pharmacy
            when we order a prescription for you. Many of the people who work
            for our practice – including, but not limited to, our doctors and
            nurses – may use or disclose your IIHI in order to treat you or to
            assist others in your treatment. Additionally, we may disclose your
            IIHI to others who may assist in your care, such as your spouse,
            children or parents
          </p>
          <p className="text-section-paragraph">
            Finally, we may also disclose your IIHI to other health care
            providers for purposes related to your treatment.
          </p>
          <p className="text-section-paragraph">
            <strong>2. Payment.</strong> Our practice may use and disclose your
            IIHI in order to bill and collect payment for the services and items
            you may receive from us. For example, we may contact your health
            insurer to certify that you are eligible for benefits (and for what
            range of benefits), and we may provide your insurer with details
            regarding your treatment to determine if your insurer will cover, or
            pay for, your treatment. We also may use and disclose your IIHI to
            obtain payment from third parties that may be responsible for such
            costs, such as family members. Also, we may use your IIHI to bill
            you directly for services and items. We may disclose your IIHI to
            other health care providers and entities to assist in their billing
            and collection efforts.
          </p>
          <p className="text-section-paragraph">
            <strong>3. Health Care Operations.</strong> Our practice may use and
            disclose your IIHI to operate our business. As examples of the ways
            in which we may use and disclose your information for our
            operations, our practice may use your IIHI to evaluate the quality
            of care you received from us, or to conduct cost-management and
            business planning activities for our practice. We may disclose your
            IIHI to other health care providers and entities to assist in their
            health care operations.
          </p>
          <p className="text-section-paragraph">
            <strong>4. Appointment Reminders.</strong> Our practice may use and
            disclose your IIHI to contact you and remind you of an appointment.
          </p>
          <p className="text-section-paragraph">
            <strong>5. Treatment Options.</strong> Our practice may use and
            disclose your IIHI to inform you of potential treatment options or
            alternatives.
          </p>
          <p className="text-section-paragraph">
            <strong>6. Health-Related Benefits and Services.</strong> Our
            practice may use and disclose your IIHI to inform you of
            health-related benefits or services that may be of interest to you.
          </p>
          <p className="text-section-paragraph">
            <strong>7. Release of Information to Family/Friends.</strong> Our
            practice may release your IIHI to a friend or family member that is
            involved in your care, or who assists in taking care of you. For
            example, a parent or guardian may ask that a babysitter take their
            child to the pediatrician’s office for treatment of a cold. In this
            example, the babysitter may have access to this child’s medical
            information.
          </p>
          <p className="text-section-paragraph">
            <strong>8. Disclosures Required By Law.</strong> Our practice will
            use and disclose your IIHI when we are required to do so by federal,
            state or local law.
          </p>

          <h3 className="list-header">
            D. USE AND DISCLOSURE OF YOUR IIHI IN CERTAIN SPECIAL CIRCUMSTANCES
          </h3>
          <p className="text-section-paragraph">
            The following categories describe unique scenarios in which we may
            use or disclose your identifiable health information:
          </p>
          <p className="text-section-paragraph">
            <strong>1. Public Health Risks.</strong> Our practice may disclose
            your IIHI to public health authorities that are authorized by law to
            collect information for the purpose of:
          </p>

          <ul className="list-group">
            <li className="list-item">
              &rarr; maintaining vital records, such as births and deaths
            </li>
            <li className="list-item">
              &rarr; reporting child abuse or neglect
            </li>
            <li className="list-item">
              &rarr; preventing or controlling disease, injury, or disability
            </li>
            <li className="list-item">
              &rarr; notifying a person regarding potential exposure to a
              communicable disease
            </li>
            <li className="list-item">
              &rarr; notifying a person regarding a potential risk for spreading
              or contracting a disease or condition
            </li>
            <li className="list-item">
              &rarr; reporting recations to drugs or problems with products or
              devices
            </li>
            <li className="list-item">
              &rarr; notifying individuals if a product or device they may be
              using has been recalled
            </li>
            <li className="list-item">
              &rarr; notifying appropriate government agency(ies) and
              authority(ies) regarding the potential abuse or neglect of an
              adult patient (including domestic violence); however, we will only
              disclose this information if the patient agrees or we are required
              or authorized by law to disclose this information
            </li>
            <li className="list-item">
              &rarr; notifying your employer under limited circumstances related
              primarily to workplace injury or illness or medical surveillance.
            </li>
          </ul>

          <p className="text-section-paragraph">
            <strong>2. Health Oversight Activities.</strong> Our practice may
            disclose your IIHI to a health oversight agency for activities
            authorized by law. Oversight activities can include, for example,
            investigations, inspections, audits, surveys, licensure and
            disciplinary actions; civil, administrative, and criminal procedures
            or actions; or other activities necessary for the government to
            monitor government programs, compliance with civil rights laws and
            the health care system in general.
          </p>
          <p className="text-section-paragraph">
            <strong>3. Lawsuits and Similar Proceedings.</strong> Our practice
            may use and disclose your IIHI in response to a court or
            administrative order, if you are involved in a lawsuit or similar
            proceeding. We also may disclose your IIHI in response to a
            discovery request, subpoena, or other lawful process by another
            party involved in the dispute, but only if we have made an effort to
            inform you of the request or to obtain an order protecting the
            information the party has requested.
          </p>
          <p className="text-section-paragraph">
            <strong>4. Law Enforcement.</strong> We may release IIHI if asked to
            do so by a law enforcement official:
          </p>
          <ul className="list-group">
            <li className="list-item">
              &rarr; Regarding a crime victim in certain situations, if we are
              unable to obtain the person’s agreement
            </li>
            <li className="list-item">
              &rarr; Concerning a death we believe has resulted from criminal
              conduct
            </li>
            <li className="list-item">
              &rarr; Regarding criminal conduct at our office
            </li>
            <li className="list-item">
              &rarr; In response to a warrant, summons, court order, subpoena or
              similar legal process
            </li>
            <li className="list-item">
              &rarr; To identify/locate a suspect, material witness, fugitive or
              missing person
            </li>
            <li className="list-item">
              &rarr; In an emergency, to report a crime (including the location
              or victim(s) of the crime, or the description, identity or
              location of the perpetrator)
            </li>
          </ul>
          <p className="text-section-paragraph">
            <strong>5. Deceased Patients.</strong> Our practice may release IIHI
            to a medical examiner or coroner to identify a deceased individual
            or to identify the cause of death. If necessary, we also may release
            information in order for funeral directors to perform their jobs.
          </p>
          <p className="text-section-paragraph">
            <strong>6. Organ and Tissue Donation.</strong> Our practice may
            release your IIHI to organizations that handle organ, eye or tissue
            procurement or transplantation, including organ donation banks, as
            necessary to facilitate organ or tissue donation and transplantation
            if you are an organ donor.
          </p>
          <p className="text-section-paragraph">
            <strong>7. Research.</strong> Our practice may use and disclose your
            IIHI for research purposes in certain limited circumstances. We will
            obtain your written authorization to use your IIHI for research
            purposes except when an Institutional Review Board or Privacy Board
            has determined that the waiver of your authorization satisfies the
            following: (i) the use or disclosure involves no more than a minimal
            risk to your privacy based on the following: (A) an adequate plan to
            protect the identifiers from improper use and disclosure; (B) an
            adequate plan to destroy the identifiers at the earliest opportunity
            consistent with the research (unless there is a health or research
            justification for retaining the identifiers or such retention is
            otherwise required by law); and (C) adequate written assurances that
            the PHI will not be re-used or disclosed to any other person or
            entity (except as required by law) for authorized oversight of the
            research study, or for other research for which the use or
            disclosure would otherwise be permitted; (ii) the research could not
            practicably be conducted without the waiver; and (iii) the research
            could not practicably be conducted without access to and use of the
            PHI.
          </p>
          <p className="text-section-paragraph">
            <strong>8. Serious Threats to Health or Safety.</strong> Our
            practice may use and disclose your IIHI when necessary to reduce or
            prevent a serious threat to your health and safety or the health and
            safety of another individual or the public. Under these
            circumstances, we will only make disclosures to a person or
            organization able to help prevent the threat.
          </p>
          <p className="text-section-paragraph">
            <strong>9. Military.</strong> Our practice may disclose your IIHI if
            you are a member of U.S. or foreign military forces (including
            veterans) and if required by the appropriate authorities.
          </p>
          <p className="text-section-paragraph">
            <strong>10. National Security.</strong> Our practice may disclose
            your IIHI to federal officials for intelligence and national
            security activities authorized by law. We also may disclose your
            IIHI to federal officials in order to protect the President, other
            officials or foreign heads of state, or to conduct investigations.
          </p>
          <p className="text-section-paragraph">
            <strong>11. Inmates. </strong> Our practice may disclose your IIHI
            to correctional institutions or law enforcement officials if you are
            an inmate or under the custody of a law enforcement official.
            Disclosure for these purposes would be necessary: (a) for the
            institution to provide health care services to you, (b) for the
            safety and security of the institution, and/or (c) to protect your
            health and safety or the health and safety of other individuals.
          </p>
          <p className="text-section-paragraph">
            <strong>12. Workers’ Compensation.</strong> Our practice may release
            your IIHI for workers’ compensation and similar programs.
          </p>

          <h3 className="list-header">E. YOUR RIGHTS REGARDING YOUR IIHI</h3>

          <p className="text-section-paragraph">
            You have the following rights regarding the IIHI that we maintain
            about you:
          </p>
          <p className="text-section-paragraph">
            <strong>1. Confidential Communications.</strong> You have the right
            to request that our practice communicate with you about your health
            and related issues in a particular manner or at a certain location.
            For instance, you may ask that we contact you at home, rather than
            work. In order to request a type of confidential communication, you
            must make a written request to OFFICE MANAGER, 178 Hartford Road,
            Manchester, CT, 06040, Telephone 860-649-9973, specifying the
            requested method of contact, or the location where you wish to be
            contacted. Our practice will accommodate reasonable requests. You do
            not need to give a reason for your request.
          </p>
          <p className="text-section-paragraph">
            <strong>2. Requesting Restrictions.</strong> You have the right to
            request a restriction in our use or disclosure of your IIHI for
            treatment, payment or health care operations. Additionally, you have
            the right to request that we restrict our disclosure of your IIHI to
            only certain individuals involved in your care or the payment for
            your care, such as family members and friends. We are not required
            to agree to your request; however, if we do agree, we are bound by
            our agreement except when otherwise required by law, in emergencies,
            or when the information is necessary to treat you. In order to
            request a restriction in our use or disclosure of your IIHI, you
            must make your request in writing to OFFICE MANAGER, 178 Hartford
            Road, Manchester, CT, 06040, Telephone 860-649-9973. Your request
            must describe in a clear and concise fashion:
            <div>(a) the information you wish restricted;</div>
            <div>
              (b) whether you are requesting to limit our practice’s use,
              disclosure or both; and
            </div>
            <div>(c) to whom you want the limits to apply.</div>
          </p>
          <p className="text-section-paragraph">
            <strong>3. Inspection and Copies.</strong> You have the right to
            inspect and obtain a copy of the IIHI that may be used to make
            decisions about you, including patient medical records and billing
            records, but not including psychotherapy notes. You must submit your
            request in writing to OFFICE MANAGER, 178 Hartford Road, Manchester,
            CT, 06040, Telephone 860-649-9973, in order to inspect and/or obtain
            a copy of your IIHI. Our practice may charge a fee for the costs of
            copying, mailing, labor and supplies associated with your request.
            Our practice may deny your request to inspect and/or copy in certain
            limited circumstances; however, you may request a review of our
            denial. Another licensed health care professional chosen by us will
            conduct reviews.
          </p>
          <p className="text-section-paragraph">
            <strong>4. Amendment.</strong> You may ask us to amend your health
            information if you believe it is incorrect or incomplete, and you
            may request an amendment for as long as the information is kept by
            or for our practice. To request an amendment, your request must be
            made in writing and submitted to OFFICE MANAGER, 178 Hartford Road,
            Manchester, CT, 06040, Telephone 860-649-9973. You must provide us
            with a reason that supports your request for amendment. Our practice
            will deny your request if you fail to submit your request (and the
            reason supporting your request) in writing. Also, we may deny your
            request if you ask us to amend information that is in our opinion:
            (a) accurate and complete; (b) not part of the IIHI kept by or for
            the practice; (c) not part of the IIHI which you would be permitted
            to inspect and copy; or (d) not created by our practice, unless the
            individual or entity that created the information is not available
            to amend the information.
          </p>
          <p className="text-section-paragraph">
            <strong>5. Accounting of Disclosures.</strong> All of our patients
            have the right to request an “accounting of disclosures.” An
            “accounting of disclosures” is a list of certain non-routine
            disclosures our practice has made of your IIHI for non-treatment,
            non-payment or non-operations purposes. Use of your IIHI as part of
            the routine patient care in our practice is not required to be
            documented. For example, the doctor sharing information with the
            nurse; or the billing department using your information to file your
            insurance claim. In order to obtain an accounting of disclosures,
            you must submit your request in writing to OFFICE MANAGER, 178
            Hartford Road, Manchester, CT, 06040, Telephone 860-649-9973. All
            requests for an “accounting of disclosures” must state a time
            period, which may not be longer than six (6) years from the date of
            disclosure and may not include dates before April 14, 2003. The
            first list you request within a 12-month period is free of charge,
            but our practice may charge you for additional lists within the same
            12-month period. Our practice will notify you of the costs involved
            with additional requests, and you may withdraw your request before
            you incur any costs.
          </p>
          <p className="text-section-paragraph">
            <strong>6. Right to a Paper Copy of This Notice.</strong> You are
            entitled to receive a paper copy of our notice of privacy practices.
            You may ask us to give you a copy of this notice at any time. To
            obtain a paper copy of this notice, contact OFFICE MANAGER, 178
            Hartford Road, Manchester, CT, 06040, Telephone 860-649-9973.
          </p>
          <p className="text-section-paragraph">
            <strong>7. Right to File a Complaint.</strong> If you believe your
            privacy rights have been violated, you may file a complaint with our
            practice or with the Secretary of the Department of Health and Human
            Services. To file a complaint with our practice, contact OFFICE
            MANAGER, 178 Hartford Road, Manchester, CT, 06040, Telephone
            860-649-9973. All complaints must be submitted in writing. You will
            not be penalized for filing a complaint.
          </p>
          <p className="text-section-paragraph">
            <strong>
              8. Right to Provide an Authorization for Other Uses and
              Disclosures.
            </strong>{" "}
            Our practice will obtain your written authorization for uses and
            disclosures that are not identified by this notice or permitted by
            applicable law. Any authorization you provide to us regarding the
            use and disclosure of your IIHI may be revoked at any time in
            writing. After you revoke your authorization, we will no longer use
            or disclose your IIHI for the reasons described in the
            authorization. Please note, we are required to retain records of
            your care.
          </p>

          <h3 className="text-section-footer">
            Again, if you have any questions regarding this notice or our health
            information privacy policies, please contact OFFICE MANAGER, 178
            Hartford Road, Manchester, CT, 06040, Telephone 860-649-9973.
          </h3>

        
        </Col>
      </Row>

      <Row className="slogan-section">
        <Slogan />
      </Row>
    </Grid>
  </Layout>
);

export default PrivacyPolicy;
