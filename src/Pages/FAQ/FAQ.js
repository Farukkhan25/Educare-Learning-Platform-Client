import React from "react";
import {
  MDBAccordion,
  MDBAccordionItem,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";

const FAQ = () => {
  return (
    <>
      <MDBContainer>
        <section>
          <MDBTypography
            tag="h3"
            className="text-center mb-4 pb-2 text-primary fw-bold"
          >
            FAQ
          </MDBTypography>
          <p className="text-center mb-5">
            Find the answers for the most frequently asked questions below
          </p>

          <MDBRow>
            <MDBCol md="6" lg="4" className="mb-4">
              <MDBTypography tag="h6" className="mb-3 text-primary">
                <MDBIcon far icon="paper-plane text-primary pe-2" />
                Is online education as effective as face-to-face instruction?
              </MDBTypography>
              <p>
                <strong>
                  <u>Absolutely!</u>
                </strong>{" "}
                Online education may seem relatively new, but years of research
                suggests it can be just as effective as traditional coursework,
                and often more so. According to a U.S. Department of Education
                analysis of more than 1,000 learning studies, online students
                tend to outperform classroom-based students across most
                disciplines and demographics. Another major review published the
                same year found that online students had the advantage 70
                percent of the time, a gap authors projected would only widen as
                programs and technologies evolve.
              </p>
            </MDBCol>
            <MDBCol md="6" lg="4" className="mb-4">
              <MDBTypography tag="h6" className="mb-3 text-primary">
                <MDBIcon fas icon="pen-alt text-primary pe-2" /> Do employers
                accept online degrees?
              </MDBTypography>
              <p>
                <strong>
                  <u>Yes, they accept!</u>
                </strong>{" "}
                All new learning innovations are met with some degree of
                scrutiny, but skepticism subsides as methods become more
                mainstream. Such is the case for online learning. Studies
                indicate employers who are familiar with online degrees tend to
                view them more favorably, and more employers are acquainted with
                them than ever before. The majority of colleges now offer online
                degrees, including most public, not-for-profit, and Ivy League
                universities. Online learning is also increasingly prevalent in
                the workplace as more companies invest in web-based employee
                training and development programs.
              </p>
            </MDBCol>
            <MDBCol md="6" lg="4" className="mb-4">
              <MDBTypography tag="h6" className="mb-3 text-primary">
                <MDBIcon fas icon="user text-primary pe-2" /> How do I know if
                online education is right for me?
              </MDBTypography>
              <p>
                Choosing the right degree program takes time and careful
                research no matter how one intends to study. Learning styles,
                goals, and programs always vary, but students considering online
                colleges must consider technical skills, ability to
                self-motivate, and other factors specific to the medium. A
                number of colleges and universities have developed assessments
                to help prospective students determine whether they are prepared
                for online learning. You can access a compilation of assessments
                from many different colleges online. Online course demos and
                trials can also be helpful, particularly if they are offered by
                schools of interest. Students can call online colleges and ask
                to speak an admissions representative who can clarify additional
                requirements and expectations.
              </p>
            </MDBCol>
          </MDBRow>
        </section>

        <MDBAccordion alwaysOpen initialActive={1}>
          <MDBAccordionItem
            collapseId={1}
            headerTitle="Is online education more conducive to cheating?"
          >
            The concern that online students cheat more than traditional
            students is perhaps misplaced. When researchers at Marshall
            University conducted a study to measure the prevalence of cheating
            in online and classroom-based courses, they concluded, “somewhat
            surprisingly, the results showed higher rates of academic dishonesty
            in live courses.” The authors suggest the social familiarity of
            students in a classroom setting may lessen their sense of moral
            obligation. Another reason cheating is less common in online
            programs is that colleges have adopted strict anti-cheating
            protocols and technologies.
          </MDBAccordionItem>
          <MDBAccordionItem
            collapseId={3}
            headerTitle="How do I know if online education is right for me?"
          >
            Choosing the right degree program takes time and careful research no
            matter how one intends to study. Learning styles, goals, and
            programs always vary, but students considering online colleges must
            consider technical skills, ability to self-motivate, and other
            factors specific to the medium. A number of colleges and
            universities have developed assessments to help prospective students
            determine whether they are prepared for online learning. You can
            access a compilation of assessments from many different colleges
            online. Online course demos and trials can also be helpful,
            particularly if they are offered by schools of interest. Students
            can call online colleges and ask to speak an admissions
            representative who can clarify additional requirements and
            expectations.
          </MDBAccordionItem>
          <MDBAccordionItem
            collapseId={1}
            headerTitle=" What technical skills do online students need?"
          >
            Online learning platforms are typically designed to be as
            user-friendly as possible: intuitive controls, clear instructions,
            and tutorials guide students through new tasks. However, students
            still need basic computer skills to access and navigate these
            programs. These skills include: using a keyboard and a mouse;
            running computer programs; using the Internet; sending and receiving
            email; using word processing programs; and using forums and other
            collaborative tools. Most online programs publish such requirements
            on their websites. If not, an admissions adviser can help. Students
            who do not meet a program’s basic technical skills requirements are
            not without recourse. Online colleges frequently offer classes and
            simulations that help students establish computer literacy before
            beginning their studies. Microsoft’s online digital literacy
            curriculum is one free resource.
          </MDBAccordionItem>

          <MDBAccordionItem
            collapseId={2}
            headerTitle="How do I know if an online degree program is credible?"
          >
            As with traditional colleges, some online schools are considered
            more credible than others. Reputation, post-graduation employment
            statistics, and enrollment numbers are not always reliable
            indicators of quality, which is why many experts advise students to
            look for accredited schools. In order for an online college to be
            accredited, a third-party organization must review its practices,
            finances, instructors, and other important criteria and certify that
            they meet certain quality standards. The certifying organization
            matters, too, since accreditation is only as reliable as the agency
            that grants it. Students should confirm online programs’ accrediting
            agencies are recognized by the U.S. Department of Education and/or
            the Council on Higher Education Accreditation before submitting
            their applications.
          </MDBAccordionItem>
          <MDBAccordionItem
            collapseId={1}
            headerTitle="What technology requirements must online students meet? "
          >
            Technical requirements vary from one online degree program to the
            next, but most students need at minimum high-speed Internet access,
            a keyboard, and a computer capable of running specified online
            learning software. Courses using identity verification tools and
            voice- or web-conferencing software require webcams and microphones.
            Scanners and printers help, too. While online schools increasingly
            offer mobile apps for learning on-the-go, smartphones and tablets
            alone may not be sufficient. Most online colleges list minimum
            technology requirements on their websites. Students who do not meet
            these requirements should contact schools directly to inquire about
            programs that can help. Some online schools lend or provide laptops,
            netbooks, or tablets for little to no cost, though students must
            generally return them right away if they withdraw from courses.
            Other colleges may offer grants and scholarships to help cover
            technical costs for students who qualify.
          </MDBAccordionItem>
        </MDBAccordion>
      </MDBContainer>
    </>
  );
};

export default FAQ;
