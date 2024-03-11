import { Link } from "react-router-dom";
import HeaderTitle from "../HeaderTitle";

export default function Index() {
  return (
    <>
      <div className="row">
        <div className="col-md-3 text-center">
          <img
            id="jeanetteLeft"
            src="Pictures/jeanette_index.jpg"
            className="img-fluid rounded"
            title="jeanette mahoney massage therapist"
            alt="jeanette mahoney massage therapist"
          />
        </div>

        <div className="col-md-6">
          <HeaderTitle>
            Jeanette Mahoney Massage in Brighton and Hove
          </HeaderTitle>

          <p>
            Jeanette Mahoney is an experienced massage therapist working in
            Brighton and Hove. Jeanette has been practising massage since 2001
            &amp; truly believes there is a particular style of massage which is
            effective and suitable for everyone. she now specializes in the
            following therapies
          </p>

          <br />

          <ul>
            <li>
              <Link to="thai-yoga-massage" className="link-dark">
                Thai Yoga massage
              </Link>
            </li>
            <li>
              <Link to="deep-tissue-and-sports-massage" className="link-dark">
                Deep tissue/Sports massage
              </Link>
            </li>
            <li>
              <Link to="pregnancy-massage" className="link-dark">
                Pregnancy - Thai &amp; Table massage
              </Link>
            </li>
            <li>
              <Link to="chair-massage" className="link-dark">
                Chair massage
              </Link>
            </li>
            <li>
              <a href="deep-tissue-and-sports-massage" className="link-dark">
                Therapeutic/Swedish massage
              </a>
            </li>
            <li>
              <a href="couples-massage" className="link-dark">
                Couples massage
              </a>
            </li>
          </ul>

          <br />

          <p>
            Jeanette adapts her treatments to cater for individual needs... if a
            client desires a relaxing, nurturing treatment then a gentle Swedish
            massage would be given...alternatively a Deep-tissue/Sports
            treatment would be more suitable for those requiring a more intense
            treatment... if a client feels they want to be stretched and
            re-energized Thai Yoga massage may be more appropriate... or for a
            shorter 30 minute treatment during the working day, focussing on the
            upper body only, through clothing, a Chair massage may be
            preferable.
            </p>
            <p>
            Jeanette is available for appointments at venues in both Brighton
            and Hove see{" "}
            <Link to="contact" className="link-dark">
              contact page
            </Link>{" "}
            for details. you can contact jeanette on <b>07932-568566</b> or at
            jenmahoney13@hotmail.com
          </p>
        </div>

        <div className="col-md-3 text-center">
          <img
            src="Pictures/flowershome.jpg"
            id="jeanetteRight"
            className="rounded img-fluid"
            title="flowers"
            alt="jeanette mahoney massage therapist"
          />
        </div>
      </div>
    </>
  );
}
