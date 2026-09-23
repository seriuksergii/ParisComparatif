import React from 'react';
import { Mail, ShieldCheck, Scale } from 'lucide-react';
import { CONTACT_EMAIL, SITE_NAME } from '../data/site';

export const MentionsLegalesPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      <div className="space-y-3">
        <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-700 bg-slate-100 px-2.5 py-1 rounded-md">
          <Scale className="w-3.5 h-3.5" />
          <span>Informations Juridiques & Réglementaires</span>
        </div>
        <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
          Mentions Légales
        </h1>
        <p className="text-sm text-slate-500">
          En vigueur au 23 Septembre 2026 · Conformité loi n° 2004-575 pour la confiance dans l'économie numérique (LCEN).
        </p>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-xs space-y-8 text-sm text-slate-700 leading-relaxed">
        {/* Éditeur */}
        <section className="space-y-3 pb-6 border-b border-slate-100">
          <div className="flex items-center gap-2 text-slate-900 font-bold text-base">
            <Mail className="w-5 h-5 text-blue-600" />
            <h2>1. Contact de l'éditeur</h2>
          </div>
          <div className="text-xs sm:text-sm space-y-1.5 text-slate-600">
            <p>
              <strong>Email :</strong>{' '}
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-blue-700 hover:underline">{CONTACT_EMAIL}</a>
            </p>
          </div>
        </section>

        {/* Nature de l'Activité & Avertissement Jeux d'Argent */}
        <section className="space-y-3 pb-6 border-b border-slate-100">
          <div className="flex items-center gap-2 text-slate-900 font-bold text-base">
            <ShieldCheck className="w-5 h-5 text-emerald-600" />
            <h2>2. Nature du Service & Déclaration de Conformité Jeux d'Argent</h2>
          </div>
          <div className="space-y-2 text-xs sm:text-sm text-slate-600">
            <p>
              ParisSportifs Comparateur est un portail éditorial indépendant d'information, d'analyse et de comparaison. <strong>Le site n'organise aucun jeu d'argent ou de hasard, n'enregistre aucune mise et n'accepte aucun dépôt financier.</strong>
            </p>
            <p className="p-4 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 font-medium">
              « Tous les liens sortants liés aux jeux d'argent et de hasard présents sur ce site dirigent exclusivement vers des entités titulaires des licences et autorisations requises pour exercer en France. »
            </p>
            <p>
              Toutes les plateformes mentionnées opèrent sous agrément officiel délivré par l'Autorité Nationale des Jeux (ANJ), conformément à la loi n° 2010-476 du 12 mai 2010. Les personnes consultant ce site sont informées que la pratique des paris sportifs est réservée aux personnes majeures (+18 ans) et que les jeux d’argent comportent des risques d'endettement et de dépendance.
            </p>
          </div>
        </section>

        {/* Propriété intellectuelle */}
        <section className="space-y-3 pb-6 border-b border-slate-100">
          <h2 className="font-bold text-slate-900 text-base">3. Propriété Intellectuelle</h2>
          <p className="text-xs sm:text-sm text-slate-600">
            L'ensemble des contenus éditoriaux, analyses, textes, méthodologies et chartes graphiques figurant sur ce portail sont la propriété de {SITE_NAME}. Les marques, dénominations commerciales et logos des opérateurs cités (Winamax, Vbet, NetBet, FeelingBet, Olybet, etc.) demeurent la propriété exclusive de leurs détenteurs respectifs et ne sont utilisés qu’à des fins d’identification éditoriale et d'information du public.
          </p>
        </section>

        {/* Contact DPO */}
        <section className="space-y-3">
          <h2 className="font-bold text-slate-900 text-base">4. Protection des données</h2>
          <p className="text-xs sm:text-sm text-slate-600">
            Pour toute question relative au traitement des données personnelles ou pour exercer vos droits (accès, rectification, effacement), écrivez à <a href={`mailto:${CONTACT_EMAIL}`} className="text-blue-700 hover:underline font-semibold">{CONTACT_EMAIL}</a>.
          </p>
        </section>
      </div>
    </div>
  );
};
