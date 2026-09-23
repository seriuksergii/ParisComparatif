import React, { useState } from 'react';
import { OPERATORS, Operator } from '../data/operators';
import { Link } from '../context/RouterContext';
import { ShieldCheck, Check, X, ExternalLink, ArrowRight, ArrowUpDown, Smartphone, CreditCard, LifeBuoy } from 'lucide-react';

export const ComparatifPage: React.FC = () => {
  const [sortBy, setSortBy] = useState<'score' | 'payout' | 'app'>('score');
  const [filterPayment, setFilterPayment] = useState<string>('all');
  const [filterPhoneSupport, setFilterPhoneSupport] = useState<boolean>(false);

  const sortedOperators = [...OPERATORS]
    .filter((op) => {
      if (filterPayment !== 'all') {
        const hasPayment = op.paymentMethods.some((p) =>
          p.name.toLowerCase().includes(filterPayment.toLowerCase())
        );
        if (!hasPayment) return false;
      }
      if (filterPhoneSupport && !op.customerSupport.phone) {
        return false;
      }
      return true;
    })
    .sort((a, b) => {
      if (sortBy === 'score') return b.score - a.score;
      if (sortBy === 'payout') return b.payoutRating - a.payoutRating;
      if (sortBy === 'app') return b.appRating - a.appRating;
      return 0;
    });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      {/* Title & Introduction */}
      <div className="max-w-3xl space-y-3">
        <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>Cadre réglementaire ANJ (France)</span>
        </div>
        <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
          Comparatif des Opérateurs de Paris Sportifs Autorisés en France
        </h1>
        <p className="text-sm text-slate-600 leading-relaxed">
          Analysez et comparez les caractéristiques objectives des plateformes de paris sportifs titulaires d’un agrément valide auprès de l’Autorité Nationale des Jeux. Nos évaluations reposent sur des critères vérifiables : niveau des cotes, ergonomie de l’application, rapidité des paiements et respect des normes de jeu responsable.
        </p>
      </div>

      {/* Control Panel: Filters & Sorting (interactive segmented controls) */}
      <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        {/* Sort Controls */}
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold text-slate-500 flex items-center gap-1">
            <ArrowUpDown className="w-3.5 h-3.5" />
            Trier par :
          </span>
          <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-lg">
            <button
              type="button"
              onClick={() => setSortBy('score')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                sortBy === 'score' ? 'bg-white text-slate-900 shadow-xs font-semibold' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Note globale
            </button>
            <button
              type="button"
              onClick={() => setSortBy('payout')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                sortBy === 'payout' ? 'bg-white text-slate-900 shadow-xs font-semibold' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Cotes & Retours
            </button>
            <button
              type="button"
              onClick={() => setSortBy('app')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                sortBy === 'app' ? 'bg-white text-slate-900 shadow-xs font-semibold' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              App mobile
            </button>
          </div>
        </div>

        {/* Filter Controls */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-semibold text-slate-500">Filtrer :</span>
          <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-lg">
            <button
              type="button"
              onClick={() => setFilterPayment('all')}
              className={`px-2.5 py-1 text-xs rounded-md ${
                filterPayment === 'all' ? 'bg-white text-slate-900 font-semibold shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Tous
            </button>
            <button
              type="button"
              onClick={() => setFilterPayment('paypal')}
              className={`px-2.5 py-1 text-xs rounded-md ${
                filterPayment === 'paypal' ? 'bg-white text-slate-900 font-semibold shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              PayPal
            </button>
            <button
              type="button"
              onClick={() => setFilterPayment('apple pay')}
              className={`px-2.5 py-1 text-xs rounded-md ${
                filterPayment === 'apple pay' ? 'bg-white text-slate-900 font-semibold shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Apple Pay
            </button>
          </div>

          <button
            type="button"
            onClick={() => setFilterPhoneSupport(!filterPhoneSupport)}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg border transition-colors ${
              filterPhoneSupport
                ? 'bg-blue-50 border-blue-300 text-blue-800'
                : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
            }`}
          >
            Assistance téléphonique requise
          </button>
        </div>
      </div>

      {/* Comparison Master Table */}
      <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-xs">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 text-slate-600 font-semibold border-b border-slate-200">
              <tr>
                <th className="py-4 px-4 min-w-[200px]">Opérateur</th>
                <th className="py-4 px-4 text-center">Note globale</th>
                <th className="py-4 px-4 min-w-[170px]">Agrément ANJ officiel</th>
                <th className="py-4 px-4 min-w-[130px]">Dépôt min.</th>
                <th className="py-4 px-4 min-w-[150px]">Paiements principaux</th>
                <th className="py-4 px-4 min-w-[120px]">Application</th>
                <th className="py-4 px-4 min-w-[130px]">Support client</th>
                <th className="py-4 px-4 text-right min-w-[160px]">Accès direct</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              {sortedOperators.map((op, idx) => (
                <tr key={op.id} className="hover:bg-slate-50/60 transition-colors">
                  {/* Operator Info */}
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-9 h-9 rounded-lg flex items-center justify-center font-bold text-white text-xs shrink-0"
                        style={{ backgroundColor: op.brandColor }}
                      >
                        {op.name.slice(0, 2).toUpperCase()}
                      </div>
                      <div>
                        <div className="font-bold text-slate-900 text-sm">
                          <Link to={`/operateurs/${op.slug}`} className="hover:text-blue-600 transition-colors">
                            {op.name}
                          </Link>
                        </div>
                        <div className="text-[11px] text-slate-500">
                          {op.legalName}
                        </div>
                        <div className="text-[10px] font-mono text-slate-400">
                          {op.displayUrl}
                        </div>
                      </div>
                    </div>
                  </td>

                  {/* Rating */}
                  <td className="py-4 px-4 text-center">
                    <div className="inline-flex items-center gap-1 font-bold text-slate-900 text-sm bg-slate-50 px-2 py-1 rounded">
                      <span className="text-amber-500">★</span>
                      <span className="tabular-nums">{op.score.toFixed(1)}</span>
                      <span className="text-slate-400 text-xs font-normal">/5</span>
                    </div>
                  </td>

                  {/* ANJ Licence */}
                  <td className="py-4 px-4">
                    <div className="flex items-start gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <div>
                        <div className="font-mono text-[11px] text-slate-800 font-medium">
                          {op.anjLicence}
                        </div>
                        <div className="text-[10px] text-slate-500">
                          Vérifié : {op.dateChecked}
                        </div>
                      </div>
                    </div>
                  </td>

                  {/* Min deposit */}
                  <td className="py-4 px-4 font-semibold text-slate-800 tabular-nums">
                    {op.minDeposit}
                  </td>

                  {/* Payments */}
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-1.5 text-slate-600">
                      <CreditCard className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <span className="text-[11px]">
                        CB, {op.paymentMethods.some(p => p.name.includes('PayPal')) ? 'PayPal, ' : ''}Virement
                      </span>
                    </div>
                  </td>

                  {/* Mobile App */}
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-1 text-slate-800 text-[11px]">
                      <Smartphone className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                      <span>iOS ({op.mobileApp.iosScore.split(' ')[0]})</span>
                    </div>
                  </td>

                  {/* Support */}
                  <td className="py-4 px-4">
                    <div className="text-[11px] space-y-0.5">
                      <div className="text-slate-800">
                        {op.customerSupport.liveChat ? 'Live Chat 7j/7' : 'Formulaire / Email'}
                      </div>
                      {op.customerSupport.phone ? (
                        <div className="text-emerald-700 font-medium">
                          Tél : {op.customerSupport.phone}
                        </div>
                      ) : (
                        <div className="text-slate-400">Sans téléphone direct</div>
                      )}
                    </div>
                  </td>

                  {/* Actions */}
                  <td className="py-4 px-4 text-right space-y-1.5">
                    {/* Direct Outbound Link strictly to official French destination */}
                    <a
                      href={op.finalDestinationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-md transition-colors shadow-xs"
                      title={`Accéder directement au site officiel ${op.displayUrl}`}
                    >
                      <span>Voir le site</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                    <div>
                      <Link
                        to={`/operateurs/${op.slug}`}
                        className="inline-flex items-center gap-1 text-[11px] text-slate-600 hover:text-slate-900 transition-colors"
                      >
                        <span>Fiche détaillée</span>
                        <ArrowRight className="w-2.5 h-2.5" />
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Table footer disclosure */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 text-xs text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-2">
          <span>Toutes les plateformes présentées sont soumises au contrôle strict de l’ANJ.</span>
          <span className="text-slate-400">Liens directs sans passerelle technique intermédiaire.</span>
        </div>
      </div>

      {/* Explanatory notes on comparison criteria */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs space-y-2">
          <h3 className="font-bold text-slate-900 text-sm">Comment les cotes sont évaluées</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Nous comparons les marges moyennes appliquées par les opérateurs sur les 5 championnats majeurs de football européen et sur les tournois de tennis du Grand Chelem.
          </p>
        </div>

        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs space-y-2">
          <h3 className="font-bold text-slate-900 text-sm">Normes de retrait en France</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            En France, conformément à la réglementation ANJ, les retraits de gains ne peuvent être effectués que par virement bancaire vers un compte nominatif validé par pièce d'identité et RIB.
          </p>
        </div>

        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs space-y-2">
          <h3 className="font-bold text-slate-900 text-sm">Outils de limitation obligatoires</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Tous les opérateurs listés imposent dès l'inscription la configuration des plafonds de versement et de mise hebdomadaires, modifiables avec un délai de latence réglementaire.
          </p>
        </div>
      </div>
    </div>
  );
};
