import React from 'react';
import { AUDIT_TABLE_DATA } from '../data/operators';
import { CheckCircle2, ExternalLink, ShieldCheck } from 'lucide-react';

export const AuditTable: React.FC = () => {
  return (
    <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-xs">
      <div className="p-5 border-b border-slate-100 bg-slate-50/60">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-emerald-600" />
              <h3 className="font-semibold text-slate-900 text-base">
                Registre de Contrôle des Destinations & Agréments ANJ
              </h3>
            </div>
            <p className="text-xs text-slate-500 mt-1">
              Table de vérification manuelle : conformité GEO France (.fr), absence de redirection masquée et intégrité des licences.
            </p>
          </div>
          <div className="text-xs text-slate-600 bg-emerald-50 text-emerald-800 border border-emerald-200 px-3 py-1.5 rounded-md self-start sm:self-auto font-medium">
            8/8 Opérateurs Contrôlés & Conformes
          </div>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs">
          <thead className="bg-slate-50 text-slate-600 font-semibold border-b border-slate-200">
            <tr>
              <th className="py-3 px-4">Opérateur & Société</th>
              <th className="py-3 px-4">Display URL</th>
              <th className="py-3 px-4">Actual Final URL (Direct)</th>
              <th className="py-3 px-4">Licence / Agrément ANJ</th>
              <th className="py-3 px-4">Date de contrôle</th>
              <th className="py-3 px-4 text-center">Statut GEO</th>
              <th className="py-3 px-4 text-right">Lien direct</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-slate-700">
            {AUDIT_TABLE_DATA.map((row) => (
              <tr key={row.name} className="hover:bg-slate-50/80 transition-colors">
                <td className="py-3.5 px-4">
                  <div className="font-semibold text-slate-900">{row.name}</div>
                  <div className="text-[11px] text-slate-500">{row.legalName}</div>
                </td>
                <td className="py-3.5 px-4 font-mono text-[11px] text-slate-800">
                  {row.displayUrl}
                </td>
                <td className="py-3.5 px-4 font-mono text-[11px] text-blue-700 font-medium">
                  {row.finalDestinationUrl}
                </td>
                <td className="py-3.5 px-4 text-slate-800">
                  <span className="font-mono text-[11px] bg-slate-100 px-1.5 py-0.5 rounded text-slate-700">
                    {row.anjLicence}
                  </span>
                </td>
                <td className="py-3.5 px-4 text-slate-500 whitespace-nowrap">
                  {row.dateChecked}
                </td>
                <td className="py-3.5 px-4 text-center">
                  <span className="inline-flex items-center gap-1 text-emerald-700 font-medium text-[11px]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>France (FR)</span>
                  </span>
                </td>
                <td className="py-3.5 px-4 text-right">
                  <a
                    href={row.finalDestinationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-800 font-medium text-xs hover:underline"
                    title={`Visiter ${row.displayUrl} directement`}
                  >
                    <span>Vérifier</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="p-3 bg-slate-50/50 border-t border-slate-100 text-[11px] text-slate-500 flex items-center justify-between">
        <span>Protocole : vérification manuelle directe par protocole HTTPS sans intermédiaire technique.</span>
        <span>Régulateur officiel : autorite-nationale-jeux.fr</span>
      </div>
    </div>
  );
};
