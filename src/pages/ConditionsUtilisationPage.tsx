import React from 'react';
import { Scale, AlertCircle, ShieldCheck } from 'lucide-react';

export const ConditionsUtilisationPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      <div className="space-y-3">
        <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-700 bg-slate-100 px-2.5 py-1 rounded-md">
          <Scale className="w-3.5 h-3.5" />
          <span>Conditions Générales d'Utilisation (CGU)</span>
        </div>
        <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
          Conditions Générales d’Utilisation
        </h1>
        <p className="text-sm text-slate-500">
          En vigueur au 23 Septembre 2026. L'accès et l'utilisation de ce portail emportent l'acceptation sans réserve des présentes conditions.
        </p>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-xs space-y-8 text-sm text-slate-700 leading-relaxed">
        {/* Objet */}
        <section className="space-y-3 pb-6 border-b border-slate-100">
          <h2 className="font-bold text-slate-900 text-base">1. Objet du Service</h2>
          <p className="text-xs sm:text-sm text-slate-600">
            Le site <strong>ParisSportifs Comparateur</strong> a pour objet exclusif de fournir des contenus informatifs, comparatifs et analytiques portant sur les offres de paris sportifs commercialisées par les opérateurs légalement autorisés en France par l'Autorité Nationale des Jeux (ANJ).
          </p>
          <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 font-medium text-xs sm:text-sm">
            ParisSportifs Comparateur n'est en aucun cas un bookmaker, un casino ou un opérateur de jeux. Le site n'enregistre aucune mise, n'encaisse aucun fonds et n'a aucune qualité d'intermédiaire financier.
          </div>
        </section>

        {/* Condition d'âge légal 18+ */}
        <section className="space-y-3 pb-6 border-b border-slate-100">
          <div className="flex items-center gap-2 text-slate-900 font-bold text-base">
            <AlertCircle className="w-5 h-5 text-red-600" />
            <h2>2. Condition d'Âge Légal & Interdiction aux Mineurs</h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-600">
            Conformément à l’article L. 320-1 du Code de la sécurité intérieure français, <strong>les jeux d’argent et de hasard sont strictement interdits aux mineurs</strong>. L'accès à nos comparatifs est réservé aux personnes physiques âgées de 18 ans révolus au moment de la consultation. Tout utilisateur procédant à une inscription auprès d'un opérateur partenaire sera soumis à une vérification rigoureuse de son état civil et de son âge.
          </p>
        </section>

        {/* Exactitude des informations et absence de conseil financier */}
        <section className="space-y-3 pb-6 border-b border-slate-100">
          <h2 className="font-bold text-slate-900 text-base">3. Exactitude des Informations & Cotes Sportives</h2>
          <p className="text-xs sm:text-sm text-slate-600">
            Nos équipes s’efforcent de maintenir à jour les informations relatives aux cotes, fonctionnalités et agréments ANJ. Toutefois, les cotes sportives étant intrinsèquement volatiles et fixées de manière autonome par chaque opérateur, seules les cotes affichées sur le site officiel de l'opérateur au moment de la validation définitive du pari font foi.
          </p>
          <p className="text-xs text-slate-500">
            Les analyses publiées sur notre site constituent des avis éditoriaux journalistiques et ne sauraient en aucun cas être assimilées à des conseils financiers ou à une garantie de gain.
          </p>
        </section>

        {/* Liens hypertextes sortants */}
        <section className="space-y-3 pb-6 border-b border-slate-100">
          <div className="flex items-center gap-2 text-slate-900 font-bold text-base">
            <ShieldCheck className="w-5 h-5 text-emerald-600" />
            <h2>4. Liens Hypertextes Sortants & Transparence</h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-600">
            Tous les liens sortants proposés sur notre site dirigent directement et exclusivement vers les domaines français officiels (<code>.fr</code>) des opérateurs agréés par l'ANJ. Nous interdisons toute technique de redirection masquée, de chargement intermédiaire ou de cloaking.
          </p>
        </section>

        {/* Droit applicable */}
        <section className="space-y-3">
          <h2 className="font-bold text-slate-900 text-base">5. Loi Applicable & Juridiction Compétente</h2>
          <p className="text-xs sm:text-sm text-slate-600">
            Les présentes Conditions Générales d'Utilisation sont régies par le droit français. En cas de litige relatif à l'interprétation ou à l'exécution des présentes, et à défaut de résolution amiable préalable, les tribunaux compétents de la juridiction de la Cour d'appel de Paris seront seuls compétents.
          </p>
        </section>
      </div>
    </div>
  );
};
