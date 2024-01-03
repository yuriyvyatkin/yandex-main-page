import './App.css';

import Ads from './components/header/Ads/Ads';
import ExchangeRates from './components/header/ExchangeRates/ExchangeRates';
import News from './components/header/News/News';
import currencyRates from './data/currencyRates';
import newsNames from './data/newsNames';
import newsCategories from './data/newsCategories';

import Search from './components/body/Search';
import Image from './components/header/common/Image/Image';
import searchCategories from './data/searchCategories';

import Widgets from './components/footer/Widgets';

import EtherWidget from './components/footer/Widgets/EtherWidget/EtherWidget';
import FavoritesWidget from './components/footer/Widgets/FavoritesWidget/FavoritesWidget';
import GermanMapWidget from './components/footer/Widgets/GermanMapWidget/GermanMapWidget';
import TVProgramWidget from './components/footer/Widgets/TVProgramWidget/TVProgramWidget';
import WeatherWidget from './components/footer/Widgets/WeatherWidget/WeatherWidget';
import TVPrograms from './data/TVPrograms';
import ether from './data/ether';
import favoritePages from './data/favoritePages';
import germanMapItems from './data/germanMapItems';

function App() {
  return (
    <>
      <header className="App-header">
        <div className="App-wrapper">
          <div className="App-header__main">
            <News newsCategories={newsCategories} newsNames={newsNames} />

            <ExchangeRates currencyRates={currencyRates} />
          </div>

          <Ads
            title="Работа над ошибками"
            description="Смотрите на Яндексе и запоминайте"
          >
            <Image
              containerClass="Ads__image-container"
              imgClass="Ads-image"
              src="https://picsum.photos/id/2/100"
              alt="Plug"
            />
          </Ads>
        </div>
      </header>

      <div className="App-body">
        <div className="App-wrapper">
          <Search
            searchCategories={searchCategories}
            searchBarLabel="Яндекс"
            searchBtnName="Найти"
            searchAdvice="Найдётся всё. Например,"
            searchExample="фаза луны сегодня"
          />

          <Image
            containerClass="Banner"
            imgClass="Banner-image"
            src="https://picsum.photos/id/1063/1000"
            alt="Plug"
          />
        </div>
      </div>

      <footer className="App-footer">
        <div className="App-wrapper">
          <Widgets>
            <WeatherWidget
              title="Погода"
              averageTemperature="+17"
              morningTemperature="+17"
              daytimeTemperature="+20"
            />
            <GermanMapWidget title="Карта Германии" items={germanMapItems} />
            <EtherWidget title="Эфир" items={ether} />
            <FavoritesWidget title="Посещаемое" items={favoritePages} />
            <TVProgramWidget title="Телепрограмма" items={TVPrograms} />
          </Widgets>
        </div>
      </footer>
    </>
  );
}

export default App;
