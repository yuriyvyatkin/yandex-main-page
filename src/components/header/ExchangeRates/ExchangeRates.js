import './ExchangeRates.css';

// выводит курсы валют
export default function ExchangeRates({ currencyRates }) {
  return (
    <div className="Exchange-rates-container">
      <ul className="Exchange-rates">
        {currencyRates.map((item, index) => {
          return (
            <li className="Exchange-rates__item" key={index}>
              <a href="#0" className="Exchange-rates__item-link">
                {item.currency}
              </a>
              <span className="Exchange-rates__item-rate">{item.rate}</span>
            </li>
          );
        })}
      </ul>
      <a href="#0" className="Exchange-rates__more-rates">
        &#8230;
      </a>
    </div>
  );
}
