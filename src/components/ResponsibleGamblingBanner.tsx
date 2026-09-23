import React from 'react';
import { Phone, ExternalLink } from 'lucide-react';
import { Link } from '../context/RouterContext';

export const ResponsibleGamblingBanner: React.FC = () => {
  return (
    <aside aria-label="Avertissement légal jeu responsable" className="bg-amber-950 text-amber-50 border-b border-amber-900/60 text-xs py-2 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2 text-center md:text-left">
        <div className="flex items-center flex-wrap justify-center md:justify-start gap-2">
          <span className="bg-red-700 text-white font-bold px-1.5 py-0.5 rounded text-[11px] tracking-wider whitespace-nowrap">
            18+
          </span>
          <span className="font-semibold text-amber-200">
            JEU RESPONSABLE :
          </span>
          <span className="text-amber-100">
            Les jeux d’argent et de hasard comportent des risques : endettement, isolement, dépendance.
          </span>
        </div>

        <div className="flex items-center flex-wrap justify-center gap-3 shrink-0">
          <a
            href="tel:0974751313"
            className="inline-flex items-center gap-1.5 text-amber-300 hover:text-white font-medium underline underline-offset-2 transition-colors"
            title="Appeler Joueurs Info Service (appel non surtaxé)"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>09 74 75 13 13 (non surtaxé)</span>
          </a>
          <span className="text-amber-700 hidden sm:inline" aria-hidden="true">|</span>
          <a
            href="https://www.joueurs-info-service.fr"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-amber-200 hover:text-white transition-colors"
          >
            <span>joueurs-info-service.fr</span>
            <ExternalLink className="w-3 h-3" />
          </a>
          <span className="text-amber-700 hidden sm:inline" aria-hidden="true">|</span>
          <Link
            to="/jeu-responsable"
            className="text-amber-200 hover:text-white underline underline-offset-2 font-medium"
          >
            Guide de prévention
          </Link>
        </div>
      </div>
    </aside>
  );
};
