import React from 'react';
import { ShieldCheck, Scale, Award, HeartHandshake, CheckCircle2, Lock, Smartphone, CreditCard, Headphones } from 'lucide-react';
import editorialDeskImage from '../assets/images/editorial_desk_1790152352377.jpg';

export const MethodologiePage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      {/* Header */}
      <div className="max-w-3xl space-y-4">
        <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md">
          <Scale className="w-3.5 h-3.5" />
          <span>Charte Déontologique & Audit Éditorial</span>
        </div>
        <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
          Notre Méthodologie d’Évaluation des Opérateurs
        </h1>
        <p className="text-base text-slate-600 leading-relaxed">
          Pour assurer une information transparente, intègre et conforme aux exigences strictes de la réglementation française, nous appliquons une grille d’évaluation multicritères rigoureuse. Chaque plateforme présentée sur notre portail fait l'objet d'un audit préalable exhaustif.
        </p>
      </div>

      {/* Hero Image & Editorial Philosophy */}
      <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs grid grid-cols-1 lg:grid-cols-12">
        <div className="lg:col-span-7 p-8 sm:p-10 space-y-4 flex flex-col justify-center">
          <span className="text-xs font-semibold uppercase text-blue-600 tracking-wider">
            Indépendance & Rigueur
          </span>
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
            Une analyse fondée sur des critères vérifiables et documentés
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            Notre démarche se fonde sur l’observation objective des services proposés par les opérateurs légaux en France. Nous refusons catégoriquement les pratiques opaques de redirection, le référencement de plateformes offshore illégales ou la promotion de jeux de hasard interdits sur le territoire national (casinos virtuels, machines à sous, roulettes en ligne).
          </p>
          <div className="pt-2 flex items-center gap-2 text-xs font-medium text-emerald-800">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>Scope certifié : Paris sportifs agréés par l’Autorité Nationale des Jeux (ANJ)</span>
          </div>
        </div>
        <div className="lg:col-span-5 bg-slate-100 min-h-[240px]">
          <img
            src={editorialDeskImage}
            alt="Bureau de recherche éditoriale et analyse sportive"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>

      {/* Les 7 Critères d'Évaluation */}
      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
            Les 7 Piliers de Notre Grille d’Évaluation
          </h2>
          <p className="text-sm text-slate-500 mt-1">
            Chaque critère est pondéré pour établir notre note éditoriale sur 5.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Critère 1 */}
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900">
              1. Autorisation & Agrément ANJ
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Critère éliminatoire absolu. Nous vérifions directement auprès de l’ANJ le numéro de décision officiel, la validité de l'agrément, l'identité juridique de la société éditrice et son domaine officiel en <code>.fr</code>.
            </p>
          </div>

          {/* Critère 2 */}
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
              <Lock className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900">
              2. Réglementation & Sécurité des Fonds
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Ségrégation obligatoire des fonds des parieurs sur des comptes bancaires dédiés, chiffrement SSL 256 bits, respect du RGPD et conformité au protocole de vérification d'identité (KYC).
            </p>
          </div>

          {/* Critère 3 */}
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold">
              <Award className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900">
              3. Offre de Paris & Niveau des Cotes
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Analyse du taux de retour aux joueurs (TRJ) dans le respect du plafond légal français (85%), variété des sports autorisés, types de paris (simples, combinés, systèmes, live) et présence du Cash Out.
            </p>
          </div>

          {/* Critère 4 */}
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-lg bg-slate-100 text-slate-700 flex items-center justify-center font-bold">
              <Smartphone className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900">
              4. Ergonomie & Application Mobile
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Fluidité de navigation sur mobile et ordinateur, rapidité de validation du coupon de pari, stabilité de l'application iOS / Android et options de confort (Face ID, streaming vidéo).
            </p>
          </div>

          {/* Critère 5 */}
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center font-bold">
              <CreditCard className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900">
              5. Dépôts & Retraits de Gains
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Diversité des méthodes sans frais (CB, PayPal, Apple Pay, virement instantané), seuil de dépôt minimum accessible et rapidité du traitement des retraits bancaires obligatoires.
            </p>
          </div>

          {/* Critère 6 */}
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-lg bg-rose-50 text-rose-600 flex items-center justify-center font-bold">
              <Headphones className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900">
              6. Service Client & Assistance Francophone
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Disponibilité d'un Live Chat réactif 7j/7, présence d'une ligne téléphonique non surtaxée, qualité des réponses par email et exhaustivité de la base de connaissances.
            </p>
          </div>

          {/* Critère 7 */}
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs space-y-3 md:col-span-2 lg:col-span-3">
            <div className="w-10 h-10 rounded-lg bg-red-50 text-red-600 flex items-center justify-center font-bold">
              <HeartHandshake className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900">
              7. Jeu Responsable & Protection des Publics Vulnérables
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Intransigeance sur l’application des mesures préventives : obligation de configurer les plafonds de mise et de versement dès l’inscription, mécanismes d’auto-exclusion immédiats, seuil de retrait automatique obligatoire et affichage permanent des messages d'alerte sanitaires.
            </p>
          </div>
        </div>
      </section>

      {/* Transparence Financière & Liens Affiliés */}
      <section className="bg-slate-50 p-8 rounded-2xl border border-slate-200 space-y-4">
        <h2 className="text-xl font-bold text-slate-900 tracking-tight">
          Transparence Financière & Déclaration d'Affiliation
        </h2>
        <div className="prose prose-slate text-xs sm:text-sm text-slate-700 space-y-3 leading-relaxed">
          <p>
            ParisSportifs Comparateur est un portail indépendant d'information. Pour maintenir la gratuité de nos contenus, financer notre travail de veille réglementaire et salarier nos rédacteurs, notre site peut percevoir une commission d'affiliation lorsque des utilisateurs accèdent à un opérateur agréé via certains liens présents sur nos pages.
          </p>
          <div className="bg-white p-4 rounded-lg border border-slate-200 space-y-2">
            <h4 className="font-bold text-slate-900">Nos garanties d'impartialité :</h4>
            <ul className="list-disc pl-5 space-y-1 text-slate-600 text-xs">
              <li><strong>Aucune complaisance commerciale :</strong> La rémunération financière ne permet à aucun opérateur d'acheter une note, de modifier notre appréciation critique ou de contourner nos critères d'évaluation.</li>
              <li><strong>Zéro opérateur illégal :</strong> Nous refusons toute sollicitation financière de sites de paris sportifs ne disposant pas d'un agrément valide délivré par l'Autorité Nationale des Jeux pour la France.</li>
              <li><strong>Pas de dissimulation technique :</strong> Tous nos liens sortants sont directs vers les domaines français officiels <code>.fr</code> sans passage par des scripts intermédiaires ou des pages de cloaking.</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};
