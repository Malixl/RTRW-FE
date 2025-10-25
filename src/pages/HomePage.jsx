import MainLayout from '../components/templates/MainLayout';
import DefinitionSection from '../components/organisms/DefinitionSection';
import ObjectivesSection from '../components/organisms/ObjectivesSection';
import ContentsSection from '../components/organisms/ContentsSection';
import {
  heroData,
  rtrwDefinition,
  rtrwObjectives,
  rtrwContents,
} from '../constants/rtrwData';

const HomePage = () => {
  return (
    <MainLayout heroData={heroData}>
      <DefinitionSection data={rtrwDefinition} />
      <ObjectivesSection data={rtrwObjectives} />
      <ContentsSection data={rtrwContents} />
    </MainLayout>
  );
};

export default HomePage;
