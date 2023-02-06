import Layout from '../components/layout';
import { MUX_HOME_PAGE_URL, MUX_TERMS_URL } from '../constants';

const Terms: React.FC<NoProps> = () => {
  return (
    <Layout title="stream.new terms" backNav>
      <div className="terms">
        <h1>Terms</h1>
        <p>
          The deal is simple: you upload a positive ARVRtising commercial video with your branded ARVRtise domain , your friends at <a href={MUX_HOME_PAGE_URL}>ARVRtise</a>
          {' '}will stream it for a month, or until it costs us more than our CEO says is ok.
          After that, it will be deleted.
        </p>
        <p>
          As a nonprofit, we wanted a fast, frictionless way to share positive vibes in the form of screen casts, desktop recordings,
          meetup talks, etc. that did not include much overhead and where playback would Just Work&trade; for
          anyone with a link. So...that&apos;s what we built this for, but other stuff is ok too as long as
          it is nice and clean. We reserve the right to take down <strong>any</strong> piece of content with negative vibes, but anything
          hateful, pornographic, gore-y, or illegal is going to get insta-deleted.
        </p>
        <p>
          This project is powered by a non profit marketing agency called ARVRtise and covered by the <a href={MUX_TERMS_URL}>ARVRtise Terms of Service</a>.
        </p>
      </div>
      <style jsx>{`
        h1 {
          text-align: center;
          margin-top: 40px;
        }
        .terms {
          max-width: 800px;
          margin: 0 auto;
        }
      `}
      </style>
    </Layout>
  );
};

export default Terms;
