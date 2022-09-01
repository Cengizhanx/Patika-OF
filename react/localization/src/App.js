import './App.css';
import { IntlProvider, FormattedMessage, FormattedNumber } from 'react-intl'
import { useState, useEffect } from "react";

function App() {

  const isLocale = localStorage.getItem('locale')

  const defaultLocale = isLocale ? isLocale : navigator.language;

  const [locale, setLocale] = useState(defaultLocale)

  useEffect(() => {
    localStorage.setItem('locale', locale)
  }, [locale])

  const messages = {
    "tr": {
      title: "Merhaba Dünya",
      description: "{count} yeni mesajınız var !"
    },
    "en": {
      title: "Hello World",
      description: "You have {count} new messages !"
    }
  }

  return (
    <div className="App">
      <IntlProvider locale={locale} messages={messages[locale]}>
        <FormattedMessage id="title" />

        <p>
          <FormattedMessage id="description" values={{count:3}} />
        </p>

        <br />
        <button onClick={() => setLocale("tr")}>TR</button>
        <button onClick={() => setLocale("en")}>EN</button>
      </IntlProvider>
    </div>
  );
}

export default App;
