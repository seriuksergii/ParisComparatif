import React from 'react';
import { ShieldCheck, CheckCircle2, Scale, Users, Target, BookOpen } from 'lucide-react';
import { Link } from '../context/RouterContext';

export const AProposPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      {/* Title */}
      <div className="max-w-3xl space-y-4">
        <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md">
          <BookOpen className="w-3.5 h-3.5" />
          <span>Qui sommes-nous ?</span>
        </div>
        <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
          À Propos de ParisSportifs Comparateur
        </h1>
        <p className="text-base text-slate-600 leading-relaxed">
          ParisSportifs Comparateur est un portail média indépendant spécialisé dans l’analyse comparative des opérateurs de paris sportifs agréés par l’Autorité Nationale des Jeux (ANJ) sur le territoire français.
        </p>
      </div>

      {/* Mission Statement */}
      <section className="bg-white rounded-2xl border border-slate-200 p-8 shadow-xs space-y-6">
        <h2 className="text-xl font-bold text-slate-900 tracking-tight">
          Notre Mission d'Information Indépendante
        </h2>
        <div className="prose prose-slate text-sm text-slate-700 space-y-3 leading-relaxed">
          <p>
            Depuis la libéralisation du marché des jeux d'argent en ligne en 2010 sous l'égide de la loi n° 2010-476, la France s’est dotée de l'un des cadres réglementaires les plus protecteurs au monde. Notre mission consiste à guider les parieurs majeurs vers des environnements légaux, hautement sécurisés et vérifiés.
          </p>
          <p>
            Nous n'organisons aucun jeu d’argent, nous ne prenons aucun pari et nous ne percevons aucun dépôt. Notre rôle est strictement éditorial : comparer, tester, auditer et sensibiliser.
          </p>
        </div>
      </section>

      {/* Engagements de conformité stricte */}
      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
            Nos Principes de Transparence & Conformité
          </h2>
          <p className="text-sm text-slate-500 mt-1">
            Les règles déontologiques qui guident l’ensemble de nos publications :
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs space-y-3">
            <div className="flex items-center gap-2 text-blue-600 font-bold">
              <ShieldCheck className="w-5 h-5" />
              <span>Scope Strict : Paris Sportifs Uniquement</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Nous limitons nos comparatifs exclusivement aux activités de paris sportifs autorisées par l’ANJ. Nous ne proposons aucun contenu, aucune incitation et aucun lien vers des jeux de casino en ligne (machines à sous, roulette, blackjack) qui demeurent strictement interdits en France.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs space-y-3">
            <div className="flex items-center gap-2 text-emerald-600 font-bold">
              <CheckCircle2 className="w-5 h-5" />
              <span>Zéro Redirection Masquée (Direct Linking)</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Tous nos liens sortants mènent sans intermédiaire vers l’URL officielle française (<code>.fr</code>) de l’opérateur. Les internautes et les robots d’indexation de Google accèdent rigoureusement aux mêmes destinations, garantissant une transparence totale.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs space-y-3">
            <div className="flex items-center gap-2 text-purple-600 font-bold">
              <Scale className="w-5 h-5" />
              <span>Évaluation Factuelle & Neutre</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Nos revues s'appuient sur des tests réels de dépôt, de placement de paris et de retraits de gains par virement bancaire pour mesurer avec exactitude la fiabilité de chaque opérateur.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs space-y-3">
            <div className="flex items-center gap-2 text-red-600 font-bold">
              <Users className="w-5 h-5" />
              <span>Protection Systématique 18+</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Toutes nos pages rappellent avec insistance l'interdiction du jeu aux mineurs et affichent les coordonnées de Joueurs Info Service pour assister toute personne ressentant une perte de maîtrise.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Nav to other pages */}
      <div className="bg-slate-100 p-6 rounded-xl border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h3 className="font-bold text-slate-900 text-sm">Une question ou une remarque ?</h3>
          <p className="text-xs text-slate-600">Notre équipe de rédaction répond à vos sollicitations par email.</p>
        </div>
        <Link
          to="/contact"
          className="px-4 py-2 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors shadow-xs"
        >
          Nous contacter
        </Link>
      </div>
    </div>
  );
};
