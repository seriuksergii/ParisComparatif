import React, { useState } from 'react';
import { OPERATORS } from '../data/operators';
import { OperatorCard } from '../components/OperatorCard';
import { AuditTable } from '../components/AuditTable';
import { Link } from '../context/RouterContext';
import { ShieldCheck, CheckCircle2, Search, ArrowRight, Award, Lock, FileCheck2, Scale } from 'lucide-react';

export const HomePage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [paymentFilter, setPaymentFilter] = useState<string>('all');

  const filteredOperators = OPERATORS.filter((op) => {
    const matchesSearch =
      op.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      op.legalName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      op.sportsCovered.some((s) => s.toLowerCase().includes(searchTerm.toLowerCase()));

    const matchesPayment =
      paymentFilter === 'all' ||
      op.paymentMethods.some((p) => p.name.toLowerCase().includes(paymentFilter.toLowerCase()));

    return matchesSearch && matchesPayment;
  });

  return (
    <div className="space-y-16 pb-16">
      {/* 1. Hero Section */}
      <section className="relative bg-slate-900 text-white overflow-hidden py-16 lg:py-24">
        {/* Measured dark overlay for contrast compliance */}
        <div className="absolute inset-0 z-0">
          <img
            src="/src/assets/images/hero_paris_sportifs_1790152324141.jpg"
            alt="Stade européen moderne"
            className="w-full h-full object-cover opacity-25"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-blue-300 bg-blue-950/80 border border-blue-800/80 px-3 py-1 rounded-full">
              <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
              <span>Conformité stricte ANJ · France uniquement</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Guide des plateformes de paris sportifs en France.
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              Comparez des plateformes autorisées en France et consultez nos fiches informatives indépendantes. Aucune offre illégale, aucune redirection dissimulée : découvrez les opérateurs agréés et pariez de façon éclairée et responsable.
            </p>

            {/* Direct Trust Bullet Points */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>100% Agréés par l’ANJ</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Liens directs officiels .fr</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Protection des joueurs (18+)</span>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-3">
              <Link
                to="/comparatif"
                className="px-6 py-3 text-sm font-semibold text-slate-900 bg-white hover:bg-slate-100 rounded-lg transition-colors inline-flex items-center gap-2 shadow-xs"
              >
                <span>Accéder au comparatif complet</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/methodologie"
                className="px-6 py-3 text-sm font-medium text-white bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 rounded-lg transition-colors"
              >
                Notre méthodologie
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Interactive Search & Filter Controls */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs space-y-4">
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Rechercher un opérateur (ex. Winamax, Vbet, FeelingBet...)"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-blue-500 focus:bg-white text-slate-800"
              />
            </div>

            {/* Filter buttons - segmented controls */}
            <div className="flex items-center gap-1.5 overflow-x-auto p-1 bg-slate-100 rounded-lg shrink-0">
              {[
                { id: 'all', label: 'Tous les opérateurs' },
                { id: 'paypal', label: 'PayPal accepté' },
                { id: 'apple pay', label: 'Apple Pay' },
                { id: 'virement', label: 'Virement instantané' },
              ].map((filter) => (
                <button
                  key={filter.id}
                  type="button"
                  onClick={() => setPaymentFilter(filter.id)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-md whitespace-nowrap transition-colors ${
                    paymentFilter === filter.id
                      ? 'bg-white text-slate-900 shadow-xs font-semibold'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>

          <div className="text-xs text-slate-500 flex items-center justify-between pt-1 border-t border-slate-100">
            <span>Affichage de {filteredOperators.length} opérateur(s) agréé(s) en France</span>
            <span className="text-slate-400">Périmètre : Paris Sportifs exclusivement</span>
          </div>
        </div>
      </section>

      {/* 3. Operator Comparison Cards Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
              Plateformes de Paris Sportifs Autorisées en France
            </h2>
            <p className="text-sm text-slate-500 mt-1">
              Opérateurs légaux titulaires d’un agrément délivré par l’ANJ. Liens vérifiés vers les domaines français officiels.
            </p>
          </div>
          <Link
            to="/comparatif"
            className="hidden sm:inline-flex items-center gap-1 text-sm font-semibold text-blue-600 hover:text-blue-700"
          >
            <span>Tableau comparatif</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="flex flex-col gap-4">
          {filteredOperators.map((operator, index) => (
            <OperatorCard key={operator.id} operator={operator} rank={index + 1} />
          ))}
        </div>
      </section>

      {/* 4. Full Regulatory Transparency Audit Table */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
        <div>
          <h2 className="text-xl font-bold text-slate-900 tracking-tight">
            Transparence Technique & Vérification des Liens
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Chaque lien sortant de notre site est public, audité et direct. Aucune page intermédiaire, aucun script de redirection, aucun cloaking.
          </p>
        </div>
        <AuditTable />
      </section>

      {/* 5. Editorial Methodology & Guarantee Pillars */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-100 rounded-2xl p-8 sm:p-10 border border-slate-200">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-blue-700">
              Nos engagements éditoriaux
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mt-2">
              Pourquoi consulter notre comparateur indépendant ?
            </h2>
            <p className="text-sm text-slate-600 mt-3 leading-relaxed">
              Le marché des jeux d’argent en ligne en France est strictement réglementé par la loi n° 2010-476. Notre mission est de fournir aux parieurs majeurs une information rigoureuse, impartiale et vérifiée.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-5 rounded-xl border border-slate-200/80 shadow-xs space-y-2">
              <div className="w-8 h-8 rounded bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
                <FileCheck2 className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-bold text-slate-900">Agrément ANJ Actif</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Nous vérifions chaque numéro de décision auprès du registre officiel de l'ANJ. Aucun site non agréé n'est référencé.
              </p>
            </div>

            <div className="bg-white p-5 rounded-xl border border-slate-200/80 shadow-xs space-y-2">
              <div className="w-8 h-8 rounded bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
                <Lock className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-bold text-slate-900">Zéro Redirection Cachée</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Les boutons mènent directement à l'URL française officielle de l'opérateur. Aucun script masqué ni page de chargement.
              </p>
            </div>

            <div className="bg-white p-5 rounded-xl border border-slate-200/80 shadow-xs space-y-2">
              <div className="w-8 h-8 rounded bg-amber-50 text-amber-600 flex items-center justify-center font-bold">
                <Scale className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-bold text-slate-900">Périmètre Sportif Strict</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Conformément au cadre d'agrément, nos fiches sont dédiées uniquement aux paris sportifs, sans jeux de casino interdits en France.
              </p>
            </div>

            <div className="bg-white p-5 rounded-xl border border-slate-200/80 shadow-xs space-y-2">
              <div className="w-8 h-8 rounded bg-purple-50 text-purple-600 flex items-center justify-center font-bold">
                <Award className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-bold text-slate-900">Jeu Responsable</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Vérification systématique de la présence des outils d'auto-limitation et renvoi direct vers Joueurs Info Service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Responsible Gaming Guidance Spotlight */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl border border-amber-200 overflow-hidden shadow-xs grid grid-cols-1 lg:grid-cols-12">
          <div className="lg:col-span-7 p-8 sm:p-10 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-amber-800 bg-amber-50 border border-amber-200 px-3 py-1 rounded-md">
                <span>Dispositif légal de protection</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                Le pari sportif doit rester un loisir maîtrisé.
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                En France, les opérateurs agréés ont l’obligation légale de vous permettre de fixer des limites de versement et de mise dès votre inscription. Si vous ressentez une difficulté à contrôler vos mises, des structures gratuites et anonymes sont disponibles 7j/7 pour vous accompagner.
              </p>

              <div className="space-y-2 pt-2 text-xs text-slate-700">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-500" />
                  <span>Joueurs Info Service : <strong>09 74 75 13 13</strong> (appel non surtaxé)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-500" />
                  <span>Interdiction volontaire de jeux auprès du ministère de l’Intérieur et de l’ANJ</span>
                </div>
              </div>
            </div>

            <div>
              <Link
                to="/jeu-responsable"
                className="px-5 py-2.5 text-xs font-semibold text-amber-950 bg-amber-100 hover:bg-amber-200 rounded-lg transition-colors inline-flex items-center gap-2"
              >
                <span>Consulter notre guide de jeu responsable</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 bg-amber-50 relative min-h-[220px]">
            <img
              src="/src/assets/images/responsible_gaming_1790152339285.jpg"
              alt="Espace de travail calme symbolisant la modération"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>
    </div>
  );
};
