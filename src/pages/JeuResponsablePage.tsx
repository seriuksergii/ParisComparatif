import React, { useState } from 'react';
import { Phone, ExternalLink, ShieldAlert, HeartHandshake, CheckCircle2, AlertTriangle, Scale, Lock, Info } from 'lucide-react';

export const JeuResponsablePage: React.FC = () => {
  // Self-test questions
  const [answers, setAnswers] = useState<Record<number, boolean>>({});

  const questions = [
    { id: 1, text: "Avez-vous déjà parié plus d'argent que vous ne pouviez vous permettre de perdre ?" },
    { id: 2, text: "Avez-vous déjà tenté de 'vous refaire' immédiatement après avoir perdu un pari ?" },
    { id: 3, text: "Avez-vous déjà menti à vos proches sur les sommes misées ou le temps passé à parier ?" },
    { id: 4, text: "Le jeu a-t-il déjà provoqué des tensions familiales ou des soucis financiers ?" },
    { id: 5, text: "Ressentez-vous une anxiété ou une irritabilité lorsque vous essayez de réduire vos paris ?" },
  ];

  const handleAnswer = (id: number, val: boolean) => {
    setAnswers((prev) => ({ ...prev, [id]: val }));
  };

  const yesCount = Object.values(answers).filter(Boolean).length;
  const answeredCount = Object.keys(answers).length;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      {/* Title & Official Warning Banner */}
      <div className="max-w-3xl space-y-4">
        <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-red-800 bg-red-50 border border-red-200 px-2.5 py-1 rounded-md">
          <ShieldAlert className="w-3.5 h-3.5 text-red-600" />
          <span>Interdiction légale aux mineurs (-18) · Prévention & Santé publique</span>
        </div>
        <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
          Jeu Responsable & Prévention de l’Addiction
        </h1>
        <p className="text-base text-slate-600 leading-relaxed">
          Le pari sportif doit demeurer une activité récréative et conviviale. Pratiqué sans modération, il peut comporter des risques financiers, psychologiques et sociaux graves. Retrouvez ici tous les conseils, outils d’auto-limitation et contacts d'assistance disponibles en France.
        </p>
      </div>

      {/* Emergency Call Box */}
      <div className="bg-gradient-to-r from-red-900 to-amber-950 text-white rounded-2xl p-6 sm:p-8 shadow-sm">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs uppercase tracking-wider text-amber-300 font-semibold">
              Assistance anonyme, gratuite et confidentielle
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
              Besoin d’aide ou de conseils ?
            </h2>
            <p className="text-xs sm:text-sm text-amber-100 max-w-xl">
              Des professionnels sont à votre écoute 7 jours sur 7, de 08h00 à 02h00 du matin, pour vous conseiller ou accompagner un proche en difficulté.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            <a
              href="tel:0974751313"
              className="px-6 py-3.5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-sm rounded-xl transition-colors inline-flex items-center gap-2 shadow-xs whitespace-nowrap"
            >
              <Phone className="w-4 h-4" />
              <span>09 74 75 13 13</span>
            </a>
            <a
              href="https://www.joueurs-info-service.fr"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3.5 bg-white/10 hover:bg-white/20 text-white font-medium text-xs rounded-xl transition-colors inline-flex items-center gap-2 border border-white/20"
            >
              <span>joueurs-info-service.fr</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>

      {/* Les Outils d'Auto-Limitation Obligatoires en France */}
      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
            Les Outils Légaux de Modération chez les Opérateurs ANJ
          </h2>
          <p className="text-sm text-slate-500 mt-1">
            En application de la législation française, tout opérateur agréé par l'ANJ intègre obligatoirement ces dispositifs de sécurité.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs space-y-3">
            <div className="w-9 h-9 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
              1
            </div>
            <h3 className="font-bold text-slate-900 text-base">Limites de Dépôt & Mises</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Dès l'ouverture de votre compte, vous devez obligatoirement fixer un plafond maximum de versement et un plafond de mise par période de 7 jours. Toute demande d'augmentation prend effet après un délai légal de 48 heures minimum pour éviter les décisions impulsives.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs space-y-3">
            <div className="w-9 h-9 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
              2
            </div>
            <h3 className="font-bold text-slate-900 text-base">Seuil de Retrait Automatique</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              La loi impose de définir un seuil au-delà duquel vos gains sont automatiquement virés sur votre compte bancaire. Cela empêche de rejouer des gains acquis et sécurise votre solde réel.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs space-y-3">
            <div className="w-9 h-9 rounded-lg bg-red-50 text-red-600 flex items-center justify-center font-bold">
              3
            </div>
            <h3 className="font-bold text-slate-900 text-base">Auto-Exclusion Temporaire</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Vous pouvez à tout moment vous exclure temporairement d’une plateforme pour une durée allant de 24 heures à plusieurs mois. Durant cette période, toute connexion et tout pari sont strictement bloqués sans annulation possible.
            </p>
          </div>
        </div>
      </section>

      {/* Dispositif National d'Interdiction Volontaire de Jeux */}
      <section className="bg-slate-50 p-8 rounded-2xl border border-slate-200 space-y-4">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-slate-900 text-white flex items-center justify-center shrink-0">
            <Scale className="w-6 h-6" />
          </div>
          <div className="space-y-2">
            <h2 className="text-xl font-bold text-slate-900 tracking-tight">
              L'Interdiction Volontaire de Jeux en France
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Si vous estimez ne plus maîtriser votre pratique de jeu, vous pouvez demander une interdiction volontaire de jeux auprès de l'Autorité Nationale des Jeux (ANJ). Cette démarche est confidentielle, gratuite et s'applique automatiquement à tous les casinos, clubs de jeux et sites internet agréés (paris sportifs, poker, FDJ).
            </p>
            <div className="pt-2">
              <a
                href="https://interdictiondejeux.anj.fr"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors shadow-xs"
              >
                <span>Accéder au service officiel de l’ANJ (interdictiondejeux.anj.fr)</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Auto-évaluation interactive */}
      <section className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs space-y-6">
        <div>
          <span className="text-xs font-semibold uppercase text-blue-600 tracking-wider">
            Auto-évaluation anonyme
          </span>
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight mt-1">
            Faites le point sur vos habitudes de paris
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Répondez en toute sincérité à ces 5 questions pour évaluer votre niveau d'exposition au risque. Vos réponses restent strictement locales sur votre navigateur.
          </p>
        </div>

        <div className="space-y-4">
          {questions.map((q) => (
            <div
              key={q.id}
              className="p-4 rounded-xl border border-slate-100 bg-slate-50/50 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
            >
              <span className="text-xs sm:text-sm text-slate-800 font-medium">
                {q.id}. {q.text}
              </span>
              <div className="flex items-center gap-2 shrink-0">
                <button
                  type="button"
                  onClick={() => handleAnswer(q.id, true)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                    answers[q.id] === true
                      ? 'bg-red-600 text-white font-bold'
                      : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  Oui
                </button>
                <button
                  type="button"
                  onClick={() => handleAnswer(q.id, false)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                    answers[q.id] === false
                      ? 'bg-slate-800 text-white font-bold'
                      : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  Non
                </button>
              </div>
            </div>
          ))}
        </div>

        {answeredCount > 0 && (
          <div
            className={`p-5 rounded-xl border text-xs sm:text-sm space-y-2 ${
              yesCount >= 2
                ? 'bg-red-50 border-red-200 text-red-900'
                : 'bg-emerald-50 border-emerald-200 text-emerald-900'
            }`}
          >
            <div className="font-bold text-base">
              {yesCount >= 2
                ? '⚠️ Attention : Signaux de jeu problématique identifiés'
                : '✅ Pratique de jeu actuellement sous contrôle'}
            </div>
            <p>
              {yesCount >= 2
                ? `Vous avez répondu par l'affirmative à ${yesCount} question(s). Ces éléments indiquent une pratique à risque. Nous vous recommandons vivement de contacter Joueurs Info Service au 09 74 75 13 13 ou d'activer une pause temporaire.`
                : 'Vos réponses indiquent une gestion saine de votre activité de loisir. Continuez à respecter vos plafonds budgétaires et à ne parier que de l’argent disponible.'}
            </p>
          </div>
        )}
      </section>

      {/* Liste des structures d'aide en France */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-slate-900 tracking-tight">
          Organismes & Associations d’Aide Spécialisés
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs space-y-2">
            <h3 className="font-bold text-slate-900 text-sm">Joueurs Info Service</h3>
            <p className="text-slate-600">
              Service public national d’écoute, d’information et d’orientation sous tutelle de Santé publique France.
            </p>
            <div className="font-semibold text-blue-700">Tél : 09 74 75 13 13 (appel non surtaxé 7j/7)</div>
          </div>

          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs space-y-2">
            <h3 className="font-bold text-slate-900 text-sm">SOS Joueurs</h3>
            <p className="text-slate-600">
              Association d'aide psychologique, juridique et d’accompagnement au surendettement pour les joueurs et leurs familles.
            </p>
            <div className="font-semibold text-blue-700">Tél : 09 69 39 55 12</div>
          </div>
        </div>
      </section>
    </div>
  );
};
