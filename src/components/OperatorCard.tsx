import React from 'react';
import { Operator } from '../data/operators';
import { Link } from '../context/RouterContext';
import { ExternalLink, ShieldCheck, Check, ArrowRight, Star } from 'lucide-react';

interface OperatorCardProps {
  operator: Operator;
  rank?: number;
}

export const OperatorCard: React.FC<OperatorCardProps> = ({ operator, rank }) => {
  const appLabel =
    operator.mobileApp.ios && operator.mobileApp.android
      ? 'iOS & Android'
      : operator.mobileApp.ios
        ? 'iOS'
        : operator.mobileApp.android
          ? 'Android'
          : 'Site mobile';

  return (
    <article className="bg-white rounded-xl border border-slate-200 hover:border-slate-300 transition-shadow hover:shadow-md p-5 sm:p-6">
      <div className="flex flex-col lg:flex-row lg:items-stretch gap-5">
        <div className="lg:w-64 shrink-0 flex items-start gap-3.5">
          <div
            className="w-12 h-12 rounded-lg flex items-center justify-center font-bold text-white shadow-xs shrink-0 text-base"
            style={{ backgroundColor: operator.brandColor }}
          >
            {operator.name.slice(0, 2).toUpperCase()}
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-2">
              {rank && (
                <span className="text-xs font-semibold text-slate-400">#{rank}</span>
              )}
              <h3 className="text-lg font-bold text-slate-900 tracking-tight">
                <Link to={`/operateurs/${operator.slug}`} className="hover:text-blue-600 transition-colors">
                  {operator.name}
                </Link>
              </h3>
            </div>
            <p className="text-xs text-slate-500 mt-0.5">
              {operator.legalName}
              <span className="mx-1.5 text-slate-300">·</span>
              {operator.category}
            </p>
            <div className="mt-2 flex items-center gap-1 text-amber-500 font-bold text-sm">
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              <span className="text-slate-900 tabular-nums">{operator.score.toFixed(1)}</span>
              <span className="text-slate-400 text-xs font-normal">/ 5</span>
              <span className="text-[11px] text-slate-500 font-normal ml-1">Note éditoriale</span>
            </div>
          </div>
        </div>

        <div className="flex-1 min-w-0 lg:border-l lg:border-slate-100 lg:pl-5">
          <div className="text-xs text-slate-600 flex flex-wrap items-center gap-x-3 gap-y-1">
            <div className="flex items-center gap-1 text-emerald-700 font-medium">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span>{operator.anjLicence}</span>
            </div>
            <span className="text-slate-300">·</span>
            <div>
              <span className="text-slate-500">Domaine officiel : </span>
              <span className="font-mono text-slate-800">{operator.displayUrl}</span>
            </div>
            <span className="text-slate-300">·</span>
            <span className="text-slate-500">Contrôlé le {operator.dateChecked}</span>
          </div>

          <p className="text-slate-600 text-sm mt-3 leading-relaxed">
            {operator.shortDescription}
          </p>

          <div className="mt-3 flex flex-col sm:flex-row sm:flex-wrap gap-x-5 gap-y-1.5">
            {operator.pros.slice(0, 3).map((pro, idx) => (
              <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                <span>{pro}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:w-52 shrink-0 flex flex-col justify-between gap-3 lg:border-l lg:border-slate-100 lg:pl-5">
          <div className="grid grid-cols-2 lg:grid-cols-1 gap-2 text-xs">
            <div>
              <span className="text-slate-400 block text-[11px]">Dépôt minimum</span>
              <span className="font-semibold text-slate-800 tabular-nums">{operator.minDeposit}</span>
            </div>
            <div>
              <span className="text-slate-400 block text-[11px]">App mobile</span>
              <span className="font-semibold text-slate-800">{appLabel}</span>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <a
              href={operator.finalDestinationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center py-2.5 px-3 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors inline-flex items-center justify-center gap-1.5 shadow-xs"
              title={`Accéder directement au site officiel agréé ${operator.displayUrl}`}
            >
              <span>Voir la plateforme</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <Link
              to={`/operateurs/${operator.slug}`}
              className="w-full text-center py-2.5 px-3 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors inline-flex items-center justify-center gap-1.5"
            >
              <span>Consulter la fiche</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
};
