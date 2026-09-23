import React from 'react';
import { Lock } from 'lucide-react';
import { CONTACT_EMAIL } from '../data/site';

export const PolitiqueConfidentialitePage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      <div className="space-y-3">
        <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-700 bg-slate-100 px-2.5 py-1 rounded-md">
          <Lock className="w-3.5 h-3.5" />
          <span>Protection des Données & RGPD</span>
        </div>
        <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
          Politique de Confidentialité
        </h1>
        <p className="text-sm text-slate-500">
          Dernière mise à jour : 23 Septembre 2026 · Conforme au Règlement Général sur la Protection des Données (RGPD 2016/679) et à la loi Informatique et Libertés.
        </p>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-xs space-y-8 text-sm text-slate-700 leading-relaxed">
        {/* Responsable de traitement */}
        <section className="space-y-3 pb-6 border-b border-slate-100">
          <h2 className="font-bold text-slate-900 text-base">1. Responsable du Traitement des Données (Data Controller)</h2>
          <p className="text-xs sm:text-sm text-slate-600">
            Pour toute question relative au traitement des données collectées sur le site, écrivez à{' '}
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-blue-700 hover:underline font-semibold">{CONTACT_EMAIL}</a>.
          </p>
        </section>

        {/* Données collectées */}
        <section className="space-y-3 pb-6 border-b border-slate-100">
          <h2 className="font-bold text-slate-900 text-base">2. Données Traitées & Finalités</h2>
          <p className="text-xs sm:text-sm text-slate-600">
            Notre portail d'information s'efforce de minimiser au strict nécessaire la collecte de données personnelles. Nous ne créons aucun compte utilisateur obligatoire, ne recueillons aucune donnée bancaire et n'hébergeons aucune donnée de jeu.
          </p>
          <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm text-slate-600">
            <li><strong>Données de navigation et mesures d’audience :</strong> Adresse IP anonymisée, type de terminal, navigateur, pages consultées et paramètres de campagne (UTM, GCLID). Finalité : amélioration de l'ergonomie, détection des erreurs techniques et audit de conformité du trafic publicitaire.</li>
            <li><strong>Données de correspondance :</strong> Nom, prénom et adresse email transmis volontairement via notre formulaire de contact éditorial. Finalité : traitement des demandes et signalements d'erreurs.</li>
          </ul>
        </section>

        {/* Liens sortants et partenaires */}
        <section className="space-y-3 pb-6 border-b border-slate-100">
          <h2 className="font-bold text-slate-900 text-base">3. Liens Sortants & Sites Tiers Agréés</h2>
          <p className="text-xs sm:text-sm text-slate-600">
            Lorsque vous cliquez sur un bouton dirigeant vers un opérateur agréé (ex. Winamax, Vbet, FeelingBet), vous êtes redirigé directement vers son domaine officiel français sécurisé. Une fois sur le site de l'opérateur, sa propre politique de confidentialité s'applique pour la création de votre compte de jeu et la vérification obligatoire de votre majorité par pièce d’identité.
          </p>
        </section>

        {/* Vos Droits */}
        <section className="space-y-3 pb-6 border-b border-slate-100">
          <h2 className="font-bold text-slate-900 text-base">4. Vos Droits sous le RGPD</h2>
          <p className="text-xs sm:text-sm text-slate-600">
            Conformément aux articles 15 à 22 du RGPD, vous disposez des droits suivants sur vos données :
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs pt-1">
            <div className="p-3 bg-slate-50 rounded-lg border border-slate-100">
              <strong>Droit d'accès et de rectification :</strong> Vous pouvez demander une copie de vos données et exiger leur mise à jour.
            </div>
            <div className="p-3 bg-slate-50 rounded-lg border border-slate-100">
              <strong>Droit à l'effacement (« droit à l'oubli ») :</strong> Vous pouvez solliciter la suppression de vos données de contact.
            </div>
            <div className="p-3 bg-slate-50 rounded-lg border border-slate-100">
              <strong>Droit d'opposition :</strong> Vous pouvez refuser tout traitement fondé sur notre intérêt légitime.
            </div>
            <div className="p-3 bg-slate-50 rounded-lg border border-slate-100">
              <strong>Droit à la limitation du traitement :</strong> Suspension temporaire de l'exploitation de vos informations.
            </div>
          </div>
          <p className="text-xs text-slate-500 pt-2">
            Pour exercer l’un de ces droits, adressez votre demande à <a href={`mailto:${CONTACT_EMAIL}`} className="text-blue-700 hover:underline font-semibold">{CONTACT_EMAIL}</a>. Vous disposez également du droit d'introduire une réclamation auprès de la Commission Nationale de l'Informatique et des Libertés (CNIL - cnil.fr).
          </p>
        </section>

        {/* Conservation & Sécurité */}
        <section className="space-y-3">
          <h2 className="font-bold text-slate-900 text-base">5. Sécurité & Conservation des Données</h2>
          <p className="text-xs sm:text-sm text-slate-600">
            Les données de contact issues du formulaire sont conservées pendant un délai maximal de 24 mois suivant la clôture de la demande, puis détruites.
          </p>
        </section>
      </div>
    </div>
  );
};
