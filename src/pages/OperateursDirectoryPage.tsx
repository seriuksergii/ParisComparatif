import React, { useState } from 'react';
import { OPERATORS } from '../data/operators';
import { OperatorCard } from '../components/OperatorCard';
import { Search, ShieldCheck } from 'lucide-react';

export const OperateursDirectoryPage: React.FC = () => {
  const [search, setSearch] = useState('');

  const operators = OPERATORS.filter((op) =>
    op.name.toLowerCase().includes(search.toLowerCase()) ||
    op.legalName.toLowerCase().includes(search.toLowerCase()) ||
    op.anjLicence.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      <div className="max-w-3xl space-y-3">
        <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-md">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
          <span>Annuaire Officiel ANJ · Périmètre Paris Sportifs</span>
        </div>
        <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
          Annuaire des Opérateurs Agréés de Paris Sportifs en France
        </h1>
        <p className="text-sm text-slate-600 leading-relaxed">
          Consultez les fiches complètes de chacun des opérateurs détenant un agrément officiel délivré par l’Autorité Nationale des Jeux (ANJ) pour l’exercice des paris sportifs en ligne sur le territoire français.
        </p>
      </div>

      {/* Search Input */}
      <div className="max-w-md">
        <div className="relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Filtrer par nom ou numéro d’agrément..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 text-sm bg-white border border-slate-200 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-blue-500 shadow-xs text-slate-800"
          />
        </div>
      </div>

      {/* Grid of Operators */}
      <div className="flex flex-col gap-4">
        {operators.map((op, idx) => (
          <OperatorCard key={op.id} operator={op} rank={idx + 1} />
        ))}
      </div>

      {/* Legal Note */}
      <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 text-xs text-slate-600 space-y-2">
        <h4 className="font-semibold text-slate-900">À propos de cet annuaire</h4>
        <p>
          Cet annuaire est tenu à jour au fur et à mesure des publications du régulateur national (ANJ). Les numéros d'agrément correspondent aux décisions officielles d'autorisation de mise sur le marché français. Tout site non mentionné dans le registre officiel de l'ANJ est réputé illégal en France et fait l'objet de mesures de blocage administratif par les autorités publiques.
        </p>
      </div>
    </div>
  );
};
