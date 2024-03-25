import HeaderTitle from "../HeaderTitle";

export default function About() {
  return (
    <div>
      <div className="row">
        <div className="col-md-4 text-center ">
          <img
            src="Pictures/Jeanette_Mahoney_About.jpg"
            className="rounded img-fluid"
            title="jeanette mahoney massage therapist"
            alt="jeanette mahoney massage therapist"
            id="jeanetteLeft"
          />
        </div>

        <div className="col-md-8 ">
          <HeaderTitle>About Jeanette</HeaderTitle>
          <p>
            <b>Jeanette</b> started her career in the health &amp; fitness
            industry managing an independent health club in North London where
            she also taught aerobics &amp; circuit classes... during this time
            she began her massage studies &amp; after qualifying initially in 
            <b> Swedish massage </b>
            she realized her passion for this subject &amp; decided to pursue a
            full-time massage path &amp; so continued her studies in 
            <b> Sports, Chair &amp; Pregnancy massage</b>
          </p>

          <p>
            In 2002, <b>Jeanette</b> travelled to Thailand for the first time &
            experienced her first Ashtanga Yoga retreat, inspiring her to follow
            a dedicated yoga path, she also discovered her passion for
            traditional <b>Thai Yoga massage</b>, which motivated her to return
            to Thailand several times to study with the Sunshine Network School
            of Thai massage in Chang Mai, North Thailand...
          </p>
          <p>
          Today, Jeanette continues to further her general <b>massage</b> knowledge studying in the UK.

          </p>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6">
          <br />
          <h2>Qualifications:</h2>
          <br />
          <ul className="lead">
            <li>LSSM (London School of Sports massage) diploma</li>
            <li>BTEC Sports & Remedial higher Diploma</li>
            <li>LCM (London College of Massage) Diploma</li>
            <li>OCM (On-Site Academy of Massage) Diploma</li>
            <li>
              Thai Yoga beginners, advanced, Thai-osteo certificates, 
              the Sunshine Network School, Thailand & Metta
              School, UK
            </li>
            <li>
              Pregnancy &amp; Baby massage certificate,
              Jing massage School, Brighton.
            </li>
            <li>BA (Hons) Leisure & Tourism Management Degree</li>
          </ul>
        </div>

        <div className="col-md-6">
          <img
            src="Pictures/flower.jpg"
            className="rounded img-fluid float-end"
            title="jeanette mahoney massage therapist"
            alt="jeanette mahoney massage therapist"
            id="jeanetteRight"
          />
        </div>
      </div>
      <br />
      <br />
      <div className="text-justify">
        Jeanette has also undertaken numerous massage workshops &amp; continues
        to attend regular courses to further her professional development.
        <p>
          <b>Insurance</b>: Jeanette is a fully insured member of the CThA (
          Complementary Therapists Association) with Holistic Insurance Services
        </p>
        <p className="sp loudtext cursive">
          Jeanette believes the key to a healthy &amp; happy lifestyle is to
          achieve the balance between good nutrition, sufficient sleep &amp;
          rest, nurturing the body &amp; mind, reducing stress, keeping life as
          simple as possible &amp; feeding the creative mind.
        </p>
        <p>
          Jeanette enjoys practicing yoga, circuit training, receiving regular
          bodywork &amp; playing the guitar &amp; piano. She is part of a jazz
          harmony vocal trio called the Zanetti's who perform in and around the
          Brighton and Hove area.
        </p>
      </div>
      <br />
      <br />
    </div>
  );
}
