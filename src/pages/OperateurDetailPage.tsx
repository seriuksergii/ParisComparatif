import React from 'react';
import { OPERATORS, Operator } from '../data/operators';
import { Link, useRouter } from '../context/RouterContext';
import {
  ShieldCheck,
  ExternalLink,
  Check,
  X,
  CreditCard,
  Smartphone,
  Headphones,
  HeartHandshake,
  Calendar,
  Building2,
  FileCheck2,
  AlertTriangle,
  ArrowLeft,
  Star,
  CheckCircle2
} from 'lucide-react';

interface OperateurDetailPageProps {
  slug: string;
}

export const OperateurDetailPage: React.FC<OperateurDetailPageProps> = ({ slug }) => {
  const { navigate } = useRouter();
  const operator = OPERATORS.find((op) => op.slug === slug);

  if (!operator) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-20 text-center space-y-4">
        <h1 className="text-2xl font-bold text-slate-900">Fiche opérateur non trouvée</h1>
        <p className="text-sm text-slate-600">
          L'opérateur demandé ne figure pas dans notre registre des opérateurs agréés de paris sportifs en France.
        </p>
        <Link
          to="/operateurs"
          className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Retour à l'annuaire des opérateurs</span>
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      {/* Navigation breadcrumb */}
      <nav aria-label="Fil d'Ariane" className="flex items-center gap-2 text-xs text-slate-500">
        <Link to="/" className="hover:text-slate-900">Accueil</Link>
        <span>/</span>
        <Link to="/operateurs" className="hover:text-slate-900">Opérateurs</Link>
        <span>/</span>
        <span className="text-slate-800 font-medium">{operator.name}</span>
      </nav>

      {/* Hero Header of Operator */}
      <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-6 pb-6 border-b border-slate-100">
          <div className="flex items-start gap-5">
            {/* Monogram / Brand Emblem */}
            <div
              className="w-16 h-16 rounded-xl flex items-center justify-center font-bold text-white text-xl shadow-xs shrink-0"
              style={{ backgroundColor: operator.brandColor }}
            >
              {operator.name.slice(0, 2).toUpperCase()}
            </div>
            <div className="space-y-1.5">
              <div className="flex items-center gap-2.5 flex-wrap">
                <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                  {operator.name}
                </h1>
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Agréé ANJ</span>
                </span>
              </div>
              <p className="text-xs text-slate-500">
                {operator.legalName} · Siège : {operator.headquarters}
              </p>
              <p className="text-sm text-slate-700 max-w-2xl pt-1 leading-relaxed">
                {operator.shortDescription}
              </p>
            </div>
          </div>

          {/* Rating box & Direct Action CTA */}
          <div className="flex flex-col sm:flex-row lg:flex-col items-start sm:items-center lg:items-end justify-between gap-4 w-full lg:w-auto shrink-0 pt-4 lg:pt-0">
            <div className="text-left lg:text-right">
              <div className="flex items-center gap-1 text-amber-500 font-bold text-lg">
                <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
                <span className="text-slate-900 text-xl tabular-nums">{operator.score.toFixed(1)}</span>
                <span className="text-slate-400 text-xs font-normal">/ 5</span>
              </div>
              <span className="text-xs text-slate-500 block">Note globale de la rédaction</span>
            </div>

            {/* DIRECT OUTBOUND LINK STRICTLY TO OFFICIAL FRENCH OPERATOR */}
            <a
              href={operator.finalDestinationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors inline-flex items-center justify-center gap-2 shadow-xs"
              title={`Accéder directement au site officiel agréé ${operator.displayUrl}`}
            >
              <span>Voir la plateforme ({operator.displayUrl})</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Regulatory Strip */}
        <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
          <div>
            <span className="text-slate-400 block text-[11px]">Agrément officiel</span>
            <span className="font-mono text-slate-800 font-medium">{operator.anjLicence}</span>
          </div>
          <div>
            <span className="text-slate-400 block text-[11px]">Domaine vérifié</span>
            <span className="font-mono text-blue-700 font-medium">{operator.displayUrl}</span>
          </div>
          <div>
            <span className="text-slate-400 block text-[11px]">Dernier contrôle</span>
            <span className="text-slate-800 font-medium">{operator.dateChecked}</span>
          </div>
          <div>
            <span className="text-slate-400 block text-[11px]">Périmètre agréé</span>
            <span className="text-emerald-700 font-medium">{operator.category} en ligne</span>
          </div>
        </div>
      </section>

      {/* Main Grid: Content on Left, Fiche Technique on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: In-depth Reviews */}
        <div className="lg:col-span-8 space-y-10">
          {/* 1. Présentation de la plateforme */}
          <section className="bg-white p-6 sm:p-8 rounded-xl border border-slate-200 shadow-xs space-y-4">
            <h2 className="text-xl font-bold text-slate-900 tracking-tight">
              1. Présentation et historique de {operator.name}
            </h2>
            <p className="text-sm text-slate-700 leading-relaxed">
              {operator.detailedContent.overview}
            </p>
            <div className="bg-slate-50 p-4 rounded-lg border border-slate-100 text-xs text-slate-600">
              <strong>Avis de la rédaction :</strong> {operator.editorialVerdict}
            </div>
          </section>

          {/* 2. Réglementation et agrément ANJ */}
          <section className="bg-white p-6 sm:p-8 rounded-xl border border-slate-200 shadow-xs space-y-4">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-emerald-600" />
              <h2 className="text-xl font-bold text-slate-900 tracking-tight">
                2. Réglementation et conformité légale en France
              </h2>
            </div>
            <p className="text-sm text-slate-700 leading-relaxed">
              {operator.detailedContent.regulation}
            </p>
            <div className="border border-emerald-200 bg-emerald-50/60 p-4 rounded-lg text-xs text-emerald-900 space-y-1.5">
              <div className="font-semibold flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Statut légal vérifié auprès de l’ANJ :</span>
              </div>
              <p>
                L'opérateur <strong>{operator.legalName}</strong> est titulaire de la décision d'agrément <strong>{operator.anjLicence}</strong>. Il est autorisé à proposer des paris sportifs à cote fixe et mutuels sur le domaine français <code>{operator.displayUrl}</code>. Aucun casino en ligne, jeu de machine à sous ou jeu non autorisé n'est commercialisé sous ce domaine.
              </p>
            </div>
          </section>

          {/* 3. Offre de paris sportifs */}
          <section className="bg-white p-6 sm:p-8 rounded-xl border border-slate-200 shadow-xs space-y-4">
            <h2 className="text-xl font-bold text-slate-900 tracking-tight">
              3. Offre de paris sportifs et compétitions couvertes
            </h2>
            <p className="text-sm text-slate-700 leading-relaxed">
              {operator.detailedContent.sportsOffer}
            </p>

            <div className="pt-2">
              <h3 className="text-xs font-semibold uppercase text-slate-500 tracking-wider mb-2">
                Disciplines sportives couvertes dans cette fiche
              </h3>
              <div className="flex flex-wrap gap-2">
                {operator.sportsCovered.map((sport, i) => (
                  <span
                    key={i}
                    className="text-xs font-medium text-slate-700 bg-slate-100 px-2.5 py-1 rounded-md"
                  >
                    {sport}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-2">
              <h3 className="text-xs font-semibold uppercase text-slate-500 tracking-wider mb-2">
                Types de paris autorisés
              </h3>
              <div className="flex flex-wrap gap-2">
                {operator.betTypes.map((type, i) => (
                  <span
                    key={i}
                    className="text-xs font-medium text-slate-700 bg-slate-100 px-2.5 py-1 rounded-md"
                  >
                    {type}
                  </span>
                ))}
              </div>
            </div>
          </section>

          {/* 4. Méthodes de paiement */}
          <section className="bg-white p-6 sm:p-8 rounded-xl border border-slate-200 shadow-xs space-y-4">
            <div className="flex items-center gap-2">
              <CreditCard className="w-5 h-5 text-blue-600" />
              <h2 className="text-xl font-bold text-slate-900 tracking-tight">
                4. Dépôts et retraits de gains
              </h2>
            </div>
            <p className="text-sm text-slate-700 leading-relaxed">
              {operator.detailedContent.payments}
            </p>

            <div className="overflow-x-auto pt-2">
              <table className="w-full text-xs text-left">
                <thead className="bg-slate-50 text-slate-600 border-b border-slate-200">
                  <tr>
                    <th className="py-2.5 px-3">Méthode acceptée</th>
                    <th className="py-2.5 px-3">Dépôt minimum</th>
                    <th className="py-2.5 px-3">Délai</th>
                    <th className="py-2.5 px-3">Frais opérateur</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700">
                  {operator.paymentMethods.map((pm, idx) => (
                    <tr key={idx}>
                      <td className="py-2.5 px-3 font-medium text-slate-900">{pm.name}</td>
                      <td className="py-2.5 px-3 tabular-nums">{pm.minDeposit}</td>
                      <td className="py-2.5 px-3">{pm.instant ? 'Instantané' : '1 à 3 jours'}</td>
                      <td className="py-2.5 px-3">{pm.fees}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="text-[11px] text-slate-500 bg-slate-50 p-3 rounded-lg border border-slate-100">
              <strong>Règle légale française :</strong> Tout retrait de gains doit obligatoirement être viré sur le compte bancaire (IBAN français ou zone SEPA) au nom et prénom du titulaire du compte de jeu après validation définitive de son identité.
            </div>
          </section>

          {/* 5. Application mobile */}
          <section className="bg-white p-6 sm:p-8 rounded-xl border border-slate-200 shadow-xs space-y-4">
            <div className="flex items-center gap-2">
              <Smartphone className="w-5 h-5 text-blue-600" />
              <h2 className="text-xl font-bold text-slate-900 tracking-tight">
                5. Application mobile & Ergonomie
              </h2>
            </div>
            <p className="text-sm text-slate-700 leading-relaxed">
              {operator.detailedContent.appReview}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs pt-1">
              <div className="bg-slate-50 p-3.5 rounded-lg border border-slate-200">
                <span className="font-semibold text-slate-900 block">Version Apple iOS</span>
                <span className="text-slate-600">{operator.mobileApp.iosScore}</span>
              </div>
              <div className="bg-slate-50 p-3.5 rounded-lg border border-slate-200">
                <span className="font-semibold text-slate-900 block">Version Google Android</span>
                <span className="text-slate-600">{operator.mobileApp.androidScore}</span>
              </div>
            </div>
            <p className="text-xs text-slate-500 italic">
              {operator.mobileApp.notes}
            </p>
          </section>

          {/* 6. Service client */}
          <section className="bg-white p-6 sm:p-8 rounded-xl border border-slate-200 shadow-xs space-y-4">
            <div className="flex items-center gap-2">
              <Headphones className="w-5 h-5 text-blue-600" />
              <h2 className="text-xl font-bold text-slate-900 tracking-tight">
                6. Service client & Assistance francophone
              </h2>
            </div>
            <p className="text-sm text-slate-700 leading-relaxed">
              {operator.detailedContent.supportReview}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs pt-2">
              <div className="p-3 bg-slate-50 rounded-lg border border-slate-100">
                <span className="text-slate-400 block text-[11px]">Messagerie / Chat</span>
                <span className="font-semibold text-slate-900">
                  {operator.customerSupport.liveChat ? 'Live Chat actif' : 'Par formulaire'}
                </span>
              </div>
              <div className="p-3 bg-slate-50 rounded-lg border border-slate-100">
                <span className="text-slate-400 block text-[11px]">Téléphone</span>
                <span className="font-semibold text-slate-900">
                  {operator.customerSupport.phone || 'Non disponible'}
                </span>
              </div>
              <div className="p-3 bg-slate-50 rounded-lg border border-slate-100">
                <span className="text-slate-400 block text-[11px]">Horaires</span>
                <span className="font-semibold text-slate-900">
                  {operator.customerSupport.hours}
                </span>
              </div>
            </div>
          </section>

          {/* 7. Jeu responsable */}
          <section className="bg-white p-6 sm:p-8 rounded-xl border border-amber-200 shadow-xs space-y-4">
            <div className="flex items-center gap-2">
              <HeartHandshake className="w-5 h-5 text-amber-600" />
              <h2 className="text-xl font-bold text-slate-900 tracking-tight">
                7. Jeu responsable et outils de modération
              </h2>
            </div>
            <p className="text-sm text-slate-700 leading-relaxed">
              {operator.detailedContent.responsiblePlay}
            </p>
            <div className="bg-amber-50 p-4 rounded-lg text-xs text-amber-900 space-y-2">
              <div className="font-semibold">Outils de protection disponibles sur la plateforme :</div>
              <ul className="list-disc pl-4 space-y-1 text-amber-800">
                <li>Fixation préalable obligatoire du plafond de dépôt hebdomadaire.</li>
                <li>Fixation préalable obligatoire du plafond de mises hebdomadaires.</li>
                <li>Seuil de virement automatique des gains vers compte bancaire.</li>
                <li>Auto-exclusion temporaire (de 24 heures à plusieurs mois) ou définitive.</li>
              </ul>
              <div className="pt-2 text-[11px] text-amber-900 font-medium">
                Assistance officielle : Joueurs Info Service au 09 74 75 13 13 (appel non surtaxé).
              </div>
            </div>
          </section>

          {/* 8. Avantages et Points à considérer */}
          <section className="bg-white p-6 sm:p-8 rounded-xl border border-slate-200 shadow-xs space-y-4">
            <h2 className="text-xl font-bold text-slate-900 tracking-tight">
              8. Avantages et points à considérer
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              <div className="space-y-3">
                <h3 className="text-xs font-semibold uppercase text-emerald-800 tracking-wider">
                  Points forts
                </h3>
                <div className="space-y-2">
                  {operator.pros.map((pro, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{pro}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="text-xs font-semibold uppercase text-slate-500 tracking-wider">
                  Points à considérer
                </h3>
                <div className="space-y-2">
                  {operator.cons.map((con, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-600">
                      <span className="text-slate-400 font-bold shrink-0 mt-0.5">•</span>
                      <span>{con}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Right Column: Sticky Identity Card */}
        <aside className="lg:col-span-4 space-y-6">
          <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs space-y-6 sticky top-20">
            <div>
              <h3 className="font-bold text-slate-900 text-base">Fiche Technique Officielle</h3>
              <p className="text-xs text-slate-500 mt-0.5">Données transmises à l'ANJ</p>
            </div>

            <div className="space-y-3 text-xs">
              <div className="flex justify-between py-2 border-b border-slate-100">
                <span className="text-slate-500">Nom commercial</span>
                <span className="font-bold text-slate-900">{operator.name}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-slate-100">
                <span className="text-slate-500">Société éditrice</span>
                <span className="font-semibold text-slate-800 text-right">{operator.legalName}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-slate-100">
                <span className="text-slate-500">Agrément ANJ</span>
                <span className="font-mono text-slate-800 font-medium text-right">{operator.anjLicence}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-slate-100">
                <span className="text-slate-500">Domaine officiel</span>
                <span className="font-mono text-blue-700 font-medium">{operator.displayUrl}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-slate-100">
                <span className="text-slate-500">Dépôt minimum</span>
                <span className="font-semibold text-slate-800">{operator.minDeposit}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-slate-100">
                <span className="text-slate-500">Dernier audit</span>
                <span className="text-slate-700">{operator.dateChecked}</span>
              </div>
            </div>

            {/* DIRECT OUTBOUND BUTTON STRICTLY TO THE OFFICIAL FRENCH DESTINATION */}
            <div className="space-y-2 pt-2">
              <a
                href={operator.finalDestinationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors inline-flex items-center justify-center gap-2 shadow-xs"
                title={`Visiter ${operator.displayUrl}`}
              >
                <span>Accéder au site officiel français</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <p className="text-[11px] text-slate-400 text-center leading-tight">
                Lien sortant direct vers le site agréé {operator.displayUrl}. Aucune redirection intermédiaire.
              </p>
            </div>

            <div className="p-3 bg-amber-50 border border-amber-200 rounded-lg text-amber-900 text-xs">
              <strong>Avertissement 18+ :</strong> Les paris sportifs sont réservés aux personnes majeures. Jouer comporte des risques : 09 74 75 13 13.
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};
