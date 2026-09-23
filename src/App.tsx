/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { RouterProvider, useRouter } from './context/RouterContext';
import { ResponsibleGamblingBanner } from './components/ResponsibleGamblingBanner';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

// Pages
import { HomePage } from './pages/HomePage';
import { ComparatifPage } from './pages/ComparatifPage';
import { OperateursDirectoryPage } from './pages/OperateursDirectoryPage';
import { OperateurDetailPage } from './pages/OperateurDetailPage';
import { MethodologiePage } from './pages/MethodologiePage';
import { JeuResponsablePage } from './pages/JeuResponsablePage';
import { AProposPage } from './pages/AProposPage';
import { MentionsLegalesPage } from './pages/MentionsLegalesPage';
import { PolitiqueConfidentialitePage } from './pages/PolitiqueConfidentialitePage';
import { ConditionsUtilisationPage } from './pages/ConditionsUtilisationPage';
import { ContactPage } from './pages/ContactPage';

const AppContent: React.FC = () => {
  const { currentPath } = useRouter();

  // Route matching
  const renderCurrentPage = () => {
    // Exact or trailing slash
    const normalizedPath = currentPath.replace(/\/+$/, '') || '/';

    if (normalizedPath === '/') {
      return <HomePage />;
    }
    if (normalizedPath === '/comparatif') {
      return <ComparatifPage />;
    }
    if (normalizedPath === '/operateurs') {
      return <OperateursDirectoryPage />;
    }
    if (normalizedPath.startsWith('/operateurs/')) {
      const slug = normalizedPath.replace('/operateurs/', '');
      return <OperateurDetailPage slug={slug} />;
    }
    if (normalizedPath === '/methodologie') {
      return <MethodologiePage />;
    }
    if (normalizedPath === '/jeu-responsable') {
      return <JeuResponsablePage />;
    }
    if (normalizedPath === '/a-propos') {
      return <AProposPage />;
    }
    if (normalizedPath === '/mentions-legales') {
      return <MentionsLegalesPage />;
    }
    if (normalizedPath === '/politique-confidentialite') {
      return <PolitiqueConfidentialitePage />;
    }
    if (normalizedPath === '/conditions-utilisation') {
      return <ConditionsUtilisationPage />;
    }
    if (normalizedPath === '/contact') {
      return <ContactPage />;
    }

    // Default fallback to HomePage
    return <HomePage />;
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans selection:bg-blue-600 selection:text-white">
      {/* 1. Mandatory 18+ and Joueurs Info Service banner on all pages */}
      <ResponsibleGamblingBanner />

      {/* 2. Top Bar Navigation Contract */}
      <Header />

      {/* 3. Main Viewport Content */}
      <main className="flex-1">
        {renderCurrentPage()}
      </main>

      {/* 4. Complete Footer with mandatory regulatory declaration */}
      <Footer />
    </div>
  );
};

export default function App() {
  return (
    <RouterProvider>
      <AppContent />
    </RouterProvider>
  );
}
