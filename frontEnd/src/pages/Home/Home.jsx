
import Banner from '../../components/Banner/Banner';
import FeaturesItem from '../../components/FeaturesItem/FeaturesItem';
import './Home.css';

export default function Home() {
  const featureTitleChat = 'You are our #1 priority';
  const featureTitleMoney = 'More savings means higher rates';
  const featureTitleSecurity = 'Security you can trust';

  const featureDescriptionChat =
    'Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.';
  const featureDescriptionMoney =
    'The more you save with us, the higher your interest rate will be!';
  const featureDescriptionSecurity =
    'We use top of the line encryption to make sure your data and money is always safe.';

  return (
    <div className="container-home">
      <main>
        <Banner />
        <section className="features">
          <h2 className="sr-only">Features</h2>
          <FeaturesItem
            icon="/img/icon-chat.png"
            title={featureTitleChat}
            description={featureDescriptionChat}
          />
          <FeaturesItem
            icon="/img/icon-money.png"
            title={featureTitleMoney}
            description={featureDescriptionMoney}
          />
          <FeaturesItem
            icon="/img/icon-security.png"
            title={featureTitleSecurity}
            description={featureDescriptionSecurity}
          />
        </section>
      </main>
    </div>
  );
}
