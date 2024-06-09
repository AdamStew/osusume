import { Flex, Tabs, Tab } from '@dynatrace/strato-components-preview';
import { animeRecommendations, movieRecommendations } from '../constants/recommendations.constant';
import List from '../shared/components/list.component';

const HomePage = () => {
  /**
   * const [tabIndex, setTabIndex] = useState(parseInt(localStorage.getItem('tabIndex') ?? '0') ?? 0);
   * useEffect(() => {
   *   localStorage.setItem('tabIndex', `${tabIndex}`);
   * }, [tabIndex]);
   *
   * defaultIndex={tabIndex} onChange={setTabIndex} on Tabs is broken;
   */

  return (
    <>
      <Flex flexDirection="column" gap={32} alignItems="center">
        <Tabs>
          <Tab title="TV Series">
            <Flex flexDirection="column">
              {animeRecommendations.map((list) => {
                return <List list={list} key={list.name} />;
              })}
            </Flex>
          </Tab>
          <Tab title="Movies">
            <Flex flexDirection="column">
              {movieRecommendations.map((list) => {
                return <List list={list} key={list.name} />;
              })}
            </Flex>
          </Tab>
        </Tabs>
      </Flex>
    </>
  );
};

export default HomePage;
