import React from 'react';

import { Header } from './MainPageHeader';
import { MainPageContent } from './MainPageContent';
import { MainPageFooter} from './MainPageFooter'

export const MainPage = () => (
  <>
    <Header />
    <MainPageContent />
    <MainPageFooter />
  </>
);
