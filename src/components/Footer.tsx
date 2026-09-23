import React from 'react';
import { Link } from '../context/RouterContext';
import { ShieldCheck, ExternalLink, CheckCircle2 } from 'lucide-react';
import { CONTACT_EMAIL, SITE_NAME } from '../data/site';

const OFFICIAL_AUTHORITIES = [
  {
    name: 'ANJ',
    role: 'Autorité Nationale des Jeux, régulateur des jeux d’argent en France.',
    href: 'https://anj.fr',
  },
  {
    name: 'Médiateur des jeux',
    role: 'Règlement amiable des litiges avec un opérateur agréé.',
    href: 'https://mediateurdesjeuxenligne.fr',
  },
  {
    name: 'Joueurs Info Service',
    role: 'Aide aux joueurs et à leur entourage, 09 74 75 13 13.',
    href: 'https://www.joueurs-info-service.fr',
  },
  {
    name: 'Interdiction volontaire de jeux',
    role: 'Dispositif officiel de l’ANJ pour s’interdire de jouer.',
    href: 'https://interdictiondejeux.anj.fr',
  },
] as const;

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800 text-sm">
      {/* Primary Legal & Regulatory Declaration Block */}
      <div className="bg-slate-950/80 border-b border-slate-800/80 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
            <div className="space-y-2">
              <p className="font-semibold text-slate-100 text-sm tracking-wide">
                DÉCLARATION LÉGALE DE CONFORMITÉ RÉGLEMENTAIRE
              </p>
              <p className="text-slate-300 leading-relaxed text-xs sm:text-sm">
                « Tous les liens sortants liés aux jeux d'argent et de hasard présents sur ce site dirigent exclusivement vers des entités titulaires des licences et autorisations requises pour exercer en France. »
              </p>
              <p className="text-slate-400 leading-relaxed text-xs">
                ParisSportifs Comparateur est un site indépendant d'information et de comparaison. Nous n'organisons aucun jeu d'argent, n'acceptons aucune mise ni aucun dépôt. Certains liens peuvent être des liens affiliés. Cette rémunération n’affecte en rien l’indépendance de nos analyses, la vérification des agréments ANJ, ni la stricte application des règles de jeu responsable.
              </p>
            </div>
          </div>

          <div className="bg-slate-900/90 rounded-lg p-3.5 border border-slate-800 flex items-center gap-2 text-xs text-slate-300">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Contrôle technique : 0 redirection masquée, 0 domaine non français, 100% autorisations ANJ actives.</span>
          </div>
        </div>
      </div>

      <section aria-label="Autorités et services officiels en France" className="border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h2 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">
            Autorités et services officiels
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {OFFICIAL_AUTHORITIES.map((authority) => (
              <li key={authority.href}>
                <a
                  href={authority.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-full flex items-start justify-between gap-3 rounded-lg border border-slate-800 bg-slate-950/50 px-4 py-3 hover:border-slate-600 hover:bg-slate-800/60 transition-colors"
                >
                  <span>
                    <span className="block text-sm font-semibold text-white">{authority.name}</span>
                    <span className="block text-xs text-slate-400 mt-1 leading-relaxed">{authority.role}</span>
                  </span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-500 shrink-0 mt-0.5" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Col 1: About */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded bg-blue-600 flex items-center justify-center text-white">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <span className="font-bold text-white text-base tracking-tight">
              ParisComparatif<span className="text-blue-400">.com</span>
            </span>
          </div>
          <p className="text-slate-400 text-xs leading-relaxed">
            Portail indépendant de référence pour comparer les opérateurs de paris sportifs autorisés en France. Données vérifiées auprès de l’ANJ, impartialité éditoriale et sensibilisation au jeu responsable.
          </p>
          <div className="text-xs text-slate-500 pt-1">
            <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-white transition-colors">
              {CONTACT_EMAIL}
            </a>
          </div>
        </div>

        {/* Col 2: Navigation Éditoriale */}
        <div>
          <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-3">
            Guides & Comparatifs
          </h4>
          <ul className="space-y-2 text-xs">
            <li>
              <Link to="/comparatif" className="text-slate-400 hover:text-white transition-colors">
                Comparatif des plateformes
              </Link>
            </li>
            <li>
              <Link to="/operateurs" className="text-slate-400 hover:text-white transition-colors">
                Annuaire des opérateurs agréés
              </Link>
            </li>
            <li>
              <Link to="/methodologie" className="text-slate-400 hover:text-white transition-colors">
                Méthodologie d’évaluation
              </Link>
            </li>
            <li>
              <Link to="/a-propos" className="text-slate-400 hover:text-white transition-colors">
                À propos de notre équipe
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-slate-400 hover:text-white transition-colors">
                Contact & Questions éditoriales
              </Link>
            </li>
          </ul>
        </div>

        {/* Col 3: Opérateurs Agréés */}
        <div>
          <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-3">
            Fiches Opérateurs
          </h4>
          <ul className="space-y-2 text-xs">
            <li>
              <Link to="/operateurs/winamax" className="text-slate-400 hover:text-white transition-colors">
                Winamax (ANJ 0003-PS-2024-05-14-AGR-02)
              </Link>
            </li>
            <li>
              <Link to="/operateurs/feelingbet" className="text-slate-400 hover:text-white transition-colors">
                FeelingBet (ANJ 0056-PS-2026-03-04-AGR-01)
              </Link>
            </li>
            <li>
              <Link to="/operateurs/olybet" className="text-slate-400 hover:text-white transition-colors">
                Olybet (ANJ 0060-PS-2023-04-20)
              </Link>
            </li>
          </ul>
        </div>

        {/* Col 4: Réglementation & Légal */}
        <div>
          <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-3">
            Légal & Prévention
          </h4>
          <ul className="space-y-2 text-xs">
            <li>
              <Link to="/jeu-responsable" className="text-amber-300 hover:text-white font-medium transition-colors">
                Jeu responsable & Prévention 18+
              </Link>
            </li>
            <li>
              <Link to="/mentions-legales" className="text-slate-400 hover:text-white transition-colors">
                Mentions légales
              </Link>
            </li>
            <li>
              <Link to="/politique-confidentialite" className="text-slate-400 hover:text-white transition-colors">
                Politique de Confidentialité (RGPD)
              </Link>
            </li>
            <li>
              <Link to="/conditions-utilisation" className="text-slate-400 hover:text-white transition-colors">
                Conditions Générales d’Utilisation
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800 py-6 px-4 text-center text-xs text-slate-500">
        <div className="max-w-7xl mx-auto space-y-3">
          <p className="text-slate-300 leading-relaxed">
            Le jeu comporte des risques, notamment l'endettement, l'isolement et la dépendance. Si vous avez besoin d'aide, appelez le{' '}
            <a href="tel:+33974751313" className="text-amber-300 hover:text-white font-medium">
              09 74 75 13 13
            </a>{' '}
            (appel non surtaxé).
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <p>© {new Date().getFullYear()} {SITE_NAME}. Tous droits réservés.</p>
            <p className="text-slate-400">
              Jeu strictement interdit aux mineurs (Code de la sécurité intérieure art. L. 320-1)
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
